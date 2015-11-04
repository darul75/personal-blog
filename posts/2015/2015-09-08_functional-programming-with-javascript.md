This article to cover some basics you might apply in order to make a robust, readable Javascript code.

Solution is to apply some functional programming recipes.

Depending on your project , you can work with 1,2,3 developers in your team , but if we are 50, 100 again, source code will become very dense, unclear , many line codes ... we we need to clarify -> functional thinking

## Intro

"Functions are like other objects, and can be passed by arguments, returned or partially applied (curry..). With this approach, we try to not express code as a suite of instructions but as transformations to apply to input data. We can create complex transformations by compositions.

Function have to be "pure", meaning they can not change their external environment and must always return the same result when we apply same arguments. Variables are immutable, you may not change it in a loop by instance. Function playing with external world are specific and can not be used to replace a pure function.

A side effect introduces a dependency between the global state of the system and the behaviour of a function. Consider a function that reads and returns the value of a global variable. If some other code can modify that global variable, then the result of a particular application of our function depends on the current value of the global variable. The function has a side effect, even though it never modifies the variable itself.

Purity makes the job of understanding code easier. The behaviour of a pure function does not depend on the value of a global variable, or the contents of a database, or the state of a network connection."

## First class function

In javascript function are called first class function, they can be assign to variable, they are data, first class objects.

**Declarative**
```javascript
function hello(name) {
  console.log('hello' + name);
}
```

**Assignment**
```javascript
var hello = function(name) {
  console.log('hello' + name);
}

var helloJulien = hello('julien');

helloJulien(); // hello julien
```

We all deeply use this notation.

## High order function

You can resume it in 2 lines if a function match one of these 2 requirements:

- return function

```javascript
function pow(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  }
}

var powOf2 = pow(2);
var powOf3 = pow(3);

console.log(powOf2(2)); // 4
console.log(powOf2(4)); // 16
console.log(powOf3(2)); // 8
console.log(powOf3(4)); // 64
```

- takes function as argument

```javascript
var someNums = [1,2,3,4];
// builtin map javascript function is a good example of high order function
console.log(someNums.map(powOf2)); // [ 1, 4, 9, 16 ]
// builtin forEach
var iteratee = function(elt) {
    console.log(powOf2(elt));
}
someNums.forEach(iteratee);
// 1
// 4
// 9
// 16
```

As you can see, we loop on an array but we do not really care about how to loop.

```javascript
for (var i=0; ....)
```

We focus on the result and processing requirements , not on the mechanism behind (here loop).

Write expressive code is the aim of this approach.

## One liner example

In functional programming, we can achieve big things by putting small things together, and in some cases, one line of code can be enough and less verbose.

```javascript
var names = ['bob', 'john', 'keith'];

var namesUpper = names.map(function (name) { return name.toUpperCase(); } );

console.log(namesUpper); // ["BOB", "JOHN", "KEITH"]
```

It is also convenient for testing and avoid bugs.

## Pure function

Our goal is to apply the following rules:

- Always produces the same result when given the same parameters
- Never has side effects.
- Never alters state of the global state of the program, system, or world.

```javascript
// impure
var pattern = /hello/; // check wether contains 'hello'

var containsHello = function(name) {
  return name.search(pattern) >= 0;
};

// pure
var containsHello = function(name) {
  var pattern = /hello/; // check wether contains 'hello'
  return name.search(pattern) >= 0;
};
```

Why is it useful to write pure function :

- avoid side effects
- they are by definition cacheable : see memoization
- testable as we do not need to worry about external system world state
- parallelizable

## Imperative vs functional

### Example 1

This scenario consist of computing sum of squared numbers for a given list.

**Imperative**

```javascript
var someNums = [1,2,3,4];
var result = 0;
for (var i = 0; i < someNums.length; i++) {
  var currentValue = someNums[i];
  result += currentValue * currentValue;
}
console.log(result); // 30
```

Ok but then even if it look nice, why not refactor it in more functional way.

**Functional**

```javascript
// one line enough
var add = function(first, second) { return first + second; }

var reduceSumSquareFunction = function(prev, current) {
  return add(prev, powOf2(current); // powOf2 see before for code
};

// builtin reduce function
var result = someNums.reduce(reduceSumSquareFunction);

console.log(result); // 30
```

### Example 2

Another example with data.

```javascript
var planets = [
  {name: 'mercure', radius: 2440},
  {name: 'venus', radius: 6052},
  {name: 'earth', radius: 6378},
  {name: 'mars', radius: 3397},
  {name: 'jupiter', radius: 71492},
  {name: 'saturn', radius: 58232},
  {name: 'uranus', radius: 25362},
  {name: 'neptune', radius: 24622 }
];
```

Imagine we want to extract all couple name/radius, wrap it into some html paragraph elements.

```javascript
<div>
  <p>Venus radius is 6052</p>
  <p>Earth radius is 6378</p>
  <p>Mars radius is 3397</p>
  <p>Jupiter radius is 71492</p>
  ...
</div>
```

*Steps*

- build div html element
- iterate over data elements and for each
  1. extract name
  2. capitalize name
  3. extract radius
  4. build paragraph html element
  5. append it to div html element

**Imperative**

```javascript
var div = document.createElement('div');
for (var i = 0; i < planets.length; i++) {
  // extract props
  var name = planets[i].name.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
  var radius = planets[i].radius;

  // create html paragraph
  var p = document.createElement('p');
  p.innerHTML = name + ' radius is: ' + radius;
  // append it to div element
  div.appendChild(p);
}
console.log(div);
```

Fiddle: http://jsfiddle.net/darul75/8aa4yc8q/

**Functional**

Your swiss knife is made of arbitrary custom functions you create or by using some existing library, as lodash, ramda or other great functional frameworks.

Let's create some utilities function.

```javascript
// 1) Function to extract a property
var prop = function(name) {
  return function(object) {
    return object[name];
  }
}

// 2) Function to capitalize a string
var cap = function(s) {
  return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

// 3) A DSL factory to build html components.
var HtmlFactory = function() {
  this.elt = {};
  return {
    create : function(tagName) {
      this.elt = document.createElement(tagName);
      return this;
    },
    addChild : function(child) {
      this.elt.appendChild(child);
      return this;
    },
    setProp : function(prop, value) {
      this.elt[prop] = value;
      return this;
    },
    getElement : function() {
      return this.elt;
    }
  };
}
```

This may sound like a lot of code compared to the imperative version, but later you will not have to rewrite this and use your own methods.

Let's see what your main code would look like.

```javascript
// 1) prepare functions to extract name and radius
var getName = prop('name');
var getRadius = prop('radius');

// 2) prepare function to build a paragraph inner text
var buildText = function(elt) {
  return cap(getName(elt)) + ' radius is: ' + getRadius(elt);
}

// 3) prepare function to build a  paragraph
var buildParagraphElt = function(value) {
  return new HtmlFactory().create('p').setProp('innerHTML', value).getElement();
};

// finally do the job

// build main div element
var divElt = new HtmlFactory().create('div');
// map over items and build paragraphs html elts
var createParagraphsElts = planets.map(buildText).map(buildParagraphElt);
// finally append it to div
createParagraphsElts.forEach(divElt.addChild, divElt);

console.log(divElt.getElement()); // job is done
```

Fiddle: http://jsfiddle.net/darul75/hyd8xdof/

Ok that is fine but we made 2 loops by calling map/map....it is fine for few elements but not the best idea we got.

## Composition

Add an util function to our swiss knife.

```javascript
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  }
}
```

Let's rewrite our previous code.

```javascript
var divElt = new HtmlFactory().create('div');

var buildParagraph = compose(buildParagraphElt, buildText);
// map over items and build paragraphs html elts
var paragraphsElts = planets.map(buildParagraph);

// finally append it to div
paragraphsElts.forEach(divElt.addChild, divElt);

console.log(divElt.getElement()); // job is done
```

Fiddle: http://jsfiddle.net/darul75/3qk4br3y/

https://lodash.com/docs#flowRight

## Partial function application

Also called currying, we have seen it before, you call a function with fewer arguments expected and it returns you a function that take the remaining arguments.

Do not need to create functions every time you need it, get your code expressive, compact code with use of a small abstraction.

```javascript
// create a simple curry function
function add(base) {
  return function(num) {
    return base + num;
  }
}

var add2 = add(2);
// check
console.log(add2(8)); // 10 ok we are right
```

https://lodash.com/docs#curry

## Async flow control

Another examples of functional programming can me made with our asynchronous javascript world.

This example is inspired by Christian Johansen presentation there https://vimeo.com/53013378

### Example

Goal is to fetch some scripts and combine them together.

*Steps*

- fetch scripts (asynchronous call)
- concatenate their content

*Note*

We will mock asynchronous fetching of our files by this code:

```javascript
// take a filename, and a callback
function getScript(name, cb) {
    var time = Math.random() * 5000;

    setTimeout(function() {cb(null, 'source for library '+name);}, time);
}
```

#### Reminders

**First attempt**

```javascript
function loadScript(scripts, callback) {

    var data = [];
    var l = scripts.length;

    for (var i=0;i<scripts.length;i++) {
        getScript(scripts[i], function(err, source) {
            data[i] = source; // i will always be the same..
            // below condition never verified
            if (data.length === l) {
              callback(data.join(''));
            }
        });
    }
}

var libs = ['jquery', 'backbone', 'lodash'];
loadScript(libs, function(data) {
  console.log('end callback : ' + data);
});

```

Fiddle: http://jsfiddle.net/darul75/n7ebs8kq/

What happened there, really nothing... quite nothing:

- 3 asynchronous call have been started in a loop.
- each asynchronous callback append a content to same index in result array..
- check condition is never verified as 'data' result array is always filled at same index, all values from callback erasing the previous one.

Why ?

Loop is synchronous and when callbacks from retrieving content are coming, variable i will always be set to its last possible value (from the loop).

**Another attempt with closure**

```javascript
function loadScript(scripts, callback) {

    var data = [];
    var l = scripts.length;

    for (var i=0;i<l;i++) {
        (function(i) {
          getScript(scripts[i], function(err, source) {
            data[i] = source;
            // below condition is verified too much time now
            if (data.length === l) {
              callback(data.join(''));
            }
          });
        })(i);
    }
}

var libs = ['jquery', 'backbone', 'lodash'];
loadScript(libs, function(data) {
  console.log('end callback : ' + data);
});

```

Fiddle: http://jsfiddle.net/darul75/6z6Lx4hy/

Ok that is fine but let's try with what we have seen before.

**Scoping with forEach**

```javascript
function loadScript(scripts, callback) {

    var data = [];
    var l = scripts.length;

    scripts.forEach(function(script, i) {
      getScript(scripts[i], function(err, source) {
        data[i] = source;
        // below condition is verified too many times again
        if (data.length === l) {
          callback(data.join(''));
        }
      });
    });
}

var libs = ['jquery', 'backbone', 'lodash'];
loadScript(libs, function(data) {
  console.log('end callback : ' + data);
});
```

Fiddle: http://jsfiddle.net/darul75/j23bey9b/

Ok, cool, but that does not work either.

Scoping is fine but structure has cheated us.

Takes this example

```javascript
var t = [];
t[2] = 1;
t[1] = 1;
t.length; // 3
```

So as you can see, we can often enter our last end callback condition even if array is not really of good size...

**Scoping with forEach alternative**

We could naively add a counter.

```javascript
function loadScript(scripts, callback) {

    var data = [];
    var l = scripts.length;
    var count=0;

    scripts.forEach(function(script, i) {
      getScript(scripts[i], function(err, source) {
        data[i] = source;
        count++;

        if (count === l) {
          callback(data.join(''));
        }
      });
    });
}

var libs = ['jquery', 'backbone', 'lodash'];
loadScript(libs, function(data) {
  console.log('end callback : ' + data);
});
```

Fiddle: http://jsfiddle.net/darul75/j0fuhgdj/

This one works fine but we had to reinvent the wheel a little :)

### CPS

For Continous Passing Style.

I did not even heard about it before even if using it always.

Prototype of this "pattern" is

```javascript
function myFunction(param, callback) {
  doSomethingAsync {
    //when done triggers by calling callback
    callback(err, data);
  }
}
```

So why not refactor again our previous on functional manner with help of [async](https://github.com/caolan/async) library.

```javascript
function loadScript(scripts, callback) {
  async.map(scripts, getScript, function (err, contents) {
    callback(contents.join(''));
  });
}

var libs = ['jquery', 'backbone', 'lodash'];
loadScript(libs, function(data) {
  console.log('end callback : ' + data);
});
```
Fiddle: http://jsfiddle.net/darul75/6z1tj03y/

This last solution is purely functional.

## Conclusion

I hope it will give you a better idea of what functional programming can be with javascript.

A bible to read [Mostly Adequate Guide](https://github.com/MostlyAdequate/mostly-adequate-guide)

Nice video presentation that helps me to build the examples [Functional with javascript](https://vimeo.com/53013378)

![Just for fun](/images/posts/cable-rope-loops.jpg)
