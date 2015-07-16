Before that we focus at webpack hot module replacement, let's see some reasons why I choosed React/Webpack couple to create my blog and some extra websites:

- build must be fast
- development must be fast
- learning stack must be fast
- rendering must be fast
- SEO has to be good :)
..and :

With AngularJS, I have to admit learning curve was not that easy and even Meteor solution is sticked to lot of things behind.

I learn React step by step (sometimes 2 steps), component lyfecycle, virtual dom concepts and all that kind of stuff and it is just the beginning.

React facilitates isomorphism which is mainly a good approach for SEO when coding essentially in Javascript.

Then a very common task developer dislikes, as it is very time consuming, consist in handling deployment, build etc... Grunt, Gulp help us, Browserify is very nice but Webpack is a monster.

I wrote this article after having played with webpack HMR module and its API.

If you do not know webpack, do not worry, you still have time to play with it, and you should :)

## Live coding in React

You may all know [@gaearon](https://github.com/gaearon/) who put a big stone with [react-hot-loader](https://github.com/gaearon/react-hot-loader)

Purpose of this webpack's loader ( we will see later what is a 'loader') is to reload (re inject) in live your react components with your live code updates. To resume, you code with your favorite editor and webpack rebundle everything for you in live and re render page with updates.

Entry code is here, I will give my explanations about it then:

[react-hot-loader](https://github.com/gaearon/react-hot-loader/blob/master/index.js)

## What is a webpack loader

As describe in [documentation](http://webpack.github.io/docs/using-loaders.html), loader are transformations that can be applied on a resource file. A specific loader is executed during webpack compilation process if current compiled file extension (ex: .jpeg, .js, ...) matches loader's configuration.

By instance, imagine an image file and a loader generating thumbnails from it in different sizes.

A loader is mainly specified by :

- an extension(s) file to match: .png, .js, .whatever
- a name

Availables [loaders](http://webpack.github.io/docs/list-of-loaders.html)

## Write a loader

Why ? because you may have specific needs, webpack is your swiss knife.

[documentation](http://webpack.github.io/docs/how-to-write-a-loader.html)

I give an example later, let's come back to React Hot loader first.

### How React Hot Loader works

To resume, react hot webpack loader *enhances* all of your js code files with some webpack HMR “Hot Module Replacement” javascript code stuffs.

Before loader has passed:
```javascript
MyComponent code
```

After
```javascript
Some HMR code
MyComponent code
Some HMR code
```

But what happens in this "Some HMR code" ?

- it checks current resource (.js|jsx file) is a React component and if not do nothing when HMR triggers an update event.
- it watches some HMR update events and when necessary reloads your react component by doing tricky stuff with current react component to be updated.

### How HMR api works

Concepts are explained [here](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html) and example and api [here](http://webpack.github.io/docs/hot-module-replacement.html)

Until now I have just played with the following methods:

```javascript
// Accept code updates for the specified dependencies.
// The callback is called when dependencies were replaced.
accept(dependencies: string[], callback: (updatedDependencies))

// Accept code updates for this module without notification of parents.
// This should only be used if the module doesn’t export anything.
accept([errHandler])

dispose(callback: (data: object))
// see webpack website for explanations :)
```

To play with HMR you need to use webpack HotModuleReplacementPlugin plugin, example of use can be found [here](https://github.com/darul75/personal-blog/blob/master/examples/2015/2015-07-15_webpack-custom-loader-by-example/webpack.js)

We will take a small example.

main.js
```javascript
var dep = require('./dep');
var dep2 = require('./dep2');

dep.doSomething("darul"); // "do darul"
dep2.doSomething("darul"); // "do DARUL"
```

dep.js
```javascript
module.exports = {
	doSomething: function(name) {
		console.log('do ' + name);
	}
}
```

dep2.js
```javascript
module.exports = {
	doSomething: function(name) {
		console.log('do ' + name.toUpperCase());
	}
}
```

If you want your code to be aware of some HMR events you need to add some custom webpack code into you own code.

```javascript
// check if HMR is enabled
if(module.hot) {
  // do your stuff
}
```

Now image we update code from dep.js

dep.js
```javascript
module.exports = {
	doSomething: function(name) {
    // console.log('do ' + name);
		console.log('do something ' + name);
	}
}
```

If you do nothing, it will still output 'do darul' to console, OMG.

What you need is to enhance your module to accept or decline changes:

main.js
```javascript
var dep = require('./dep');
var dep2 = require('./dep2');

dep.doSomething("darul"); // fn call
dep2.doSomething("darul"); // fn call

// check if HMR is enabled
if(module.hot) {
   // accept update of dependency
   module.hot.accept(["./dep.js", "./dep2.js"], function() {
   	// most of the time just reaffect require instance
   	// with new fresh dependency module 
   	dep = require('./dep');
   	dep2 = require('./dep2');
   	// and maybe recall fn call again
   	dep.doSomething();
   	dep2.doSomething();
   }
}
```

## My idea

My idea was to create a loader which will enhance all my js files with the following HMR code:

```javascript
// check if HMR is enabled
if(module.hot) {
   // accept update of dependency
   //
   module.hot.accept([ALL_DEPENDENCIES_CALLED_IN_THIS_MODULE], function() {
   	// most of the time just reaffect require instance
   	// with new fresh dependencies
   	// iterate over all dependencies and require it again.
   	dep = require('./dep');
   	dep2 = require('./dep2');
   	// and maybe recall fn call from these modules.
   	dep.doSomething(params);
   	dep.doSomethingAgain(params);
   	dep2.doSomething();
   }
}
```

My loader code is here:

[here](https://github.com/darul75/personal-blog/blob/master/examples/2015/2015-07-15_webpack-custom-loader-by-example/test-loader.js)

### How it works ?

1> using regexp to match all require instructions like

```javascript
var dep = require('something');
```

will extract 'name' of variable and 'path' of dependency which gives 2 strings "dep"/"something".

2> using regexp to match function call for this required module, example

```javascript
var dep = require('something');

dep.doSomething(params);
dep.doSomethingAgain(params);
```

will extract which gives 2 strings "doSomething(params)"/"doSomethingAgain(params)".

After loader has finished working, your webpack code looks something like

```javascript
if (true) {
	module.hot.accept([3, 4], function() {
		dep = __webpack_require__(3);
		dep2 = __webpack_require__(4);
		dep.doSomething(params);
		dep.doSomethingAgain(params);
		dep2.doSomething();
	});
}
```

It is not perfect and all common nodejs modules or external library should be escaped...but that was a try.

My react swiss kit it here [web-react](https://github.com/darul75)
