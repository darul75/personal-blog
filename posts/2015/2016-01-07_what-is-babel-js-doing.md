For those wondering what is awesome Babel [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) doing I propose to show it with an example (online transpiler can be found [here](http://babeljs.io/repl) for more testing).

## Why Babel

Browsers or javascript engine as NodeJS not all "capable" of managing the new ES6 javascript version.

**Thus Babel is in charge of compiling each new ES6 features and make it compliant with older version of JavaScript (ES5...).**

Babel parses your JS source code to transform it into a *legacy* javascript source code :)

## Class example

In this article I describe Babel's work with new [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) sugar syntax from ES6.

I wish it will help to figure out the kind of routines that Babel can produce.

### Old school

Before diving into ES6 jungle we were doing.

```javascript
// Constructor
function Person(name) {
  this.type = 'Person';
  this.name = name;
}

// Instance method
Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// Static method attached to Constructor and not instances
Person.fn = function() {
  console.log('static');
};
```

usage 

```javascript
var julien = new Person('julien');
var darul = new Person('darul');
julien.hello(); // 'hello julien'
darul.hello(); // 'hello darul'
Person.fn(); // 'static'

// and this one on error
julien.fn(); //Uncaught TypeError: julien.fn is not a function
```

[Code](https://github.com/darul75/personal-blog/blob/master/examples/2015/2016-01-07_what-is-babel-js-doing/es5.js)

JSFiddle to play [here](https://jsfiddle.net/darul75/7ezxz2v7/)

### New school

You may have heard about new ES6 [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) syntax applied to our previous example:

```javascript
class Person {

  type = 'person';
  
  constructor(name) {
    this.name = name;
  }
  
  hello() {
    console.log('hello ' + this.name);
  }
  
  static fn = () => {
    console.log('static');
  };
  
}
```

[Code](https://github.com/darul75/personal-blog/blob/master/examples/2015/2016-01-07_what-is-babel-js-doing/es6.js)

It is a matter of style but according to me it is more efficient, less verbose... :)

## Babel transformation

Then it could be interesting to see how Babel does transformation from ES6 to ES5.

But let's do it step by step.

## Step 1 : definition

```javascript
class Person {}
```

is transpiled by Babel into

```javascript
function _classCallCheck(instance, Constructor) {
  // check if we create a new Object
  if (!(instance instanceof Constructor)) {  
    throw new TypeError("Cannot call a class as a function"); 
  } 
}

var Person = function Person() {
  _classCallCheck(this, Person);
};
```

Ok good, but why like that ? why a call to *_classCallCheck* method... I would say (specification) enhancement, safety.

Class keyword is really a "syntactical sugar over JavaScript's existing prototype-based inheritance" and Class keyword will be translated as a function (constructor) allowing us to create new object instances.

Then, above code prevents you from calling generated *Person* function directly instead of creating a **new** object instance.

```javascript
// fine
const p = new Person(); 

// Uncaught TypeError: Cannot call a class as a function
Person();
```

## Step 2 : constructor

We could add a constructor with one parameter (and class property...)

```javascript
class Person() {

  type = 'person';
  
  constructor(name) {  
    this.name = name;
  }
}
```

Nothing very weird, our new Constructor function handles it pretty well.

```javascript
var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.type = 'person';
  this.name = name;
};
```

As you can see Babel deals great with Class keyword :) easy.

## Step 3 : prototype method

Add a prototype method named *hello()* and it gonna start to be more tricky.

### Full

```javascript
class Person {

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}
```

Will be transpiled to

```javascript
// SAME AS BEFORE HERE CONSTRUCTOR CHECK
function _classCallCheck.... 

// MAIN FUNCTION
var _createClass = (function () { 
  // APPLYING PROPERTIES ON TARGET OBJECT
  function defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) { 
      var descriptor = props[i]; 
      descriptor.enumerable = descriptor.enumerable || false; 
      descriptor.configurable = true; 
      if ('value' in descriptor) 
        descriptor.writable = true; 
      Object.defineProperty(target, descriptor.key, descriptor); 
    } 
  } 
  
  // ENHANCING OBJECT PROPS  
  return function (Constructor, protoProps, staticProps) { 
    if (protoProps) 
      defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) 
      defineProperties(Constructor, staticProps); 
    return Constructor; 
  }; 
})();

var Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'hello',
    value: function hello() {
      console.log('hello ' + this.name);
    }
  }]);

  return Person;
})();
```

Whoua that is a lot of stuff to digest, calm down.

### Light

When extracting relevant parts:

```javascript
var _createClass = (function () {   
  function defineProperties(target, props) { 
    // for each props create descriptor and assign it to target object    
  }  
  return defineProperties(Constructor.prototype, protoProps);    
})();

var Person = (function () {
  function Person(name) { // same as before... }

  _createClass(Person, [{
    key: 'hello',
    value: function hello() {
      console.log('hello ' + this.name);
    }
  }]);

  return Person;
})();
```

If you are not familiar with [defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) function, it is not too late :)

Now you can explicitly figure out that 

```javascript
hello() {
  console.log('hello ' + this.name);
}
```

has been translated to a call to 

```javascript
_createClass(
  Person, [{
  key: 'hello',
  value: function hello() {
    console.log('hello ' + this.name);
  }
}]);
```

*_createClass* function expects 2 or 3 parameters:

**Param 1** => the target object where to assign new properties.

**Param 2** => a list of properties to attach to object's prototype

**Param 3** => a list of properties to attach to Class function

By this way new properties are attached to object's prototype or its Class.

## Conclusion

I hope it will give you a better understanding on how Babel compiles your ES6 source code into ES5. 

I did not speak about syntax tree, AST etc...but just about resulting tranformation code.

![Just for fun](/images/posts/babel.jpg)

----------

Tags: *ES6* *Javascript* *Babel* *React*
