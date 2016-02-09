
Mixins are dead or should be and we could say that ES7 decorators will provide a new way of enhancing object behaviours at runtime.

# Specification

Specification is available [here](https://github.com/wycats/javascript-decorators).

Note that they can be use to **modify and annotate class or properties only**.

## Using it

ES7 decorator syntax is quite simple and follow standard convention like this

```javascript
@decoratorName(optionalParams)
class MyClass {

  @decoratorName(optionalParams)
  targetObjectMethodOrProperty
  
}
```

They won't work on a single function (outside a class definition):


```javascript
@celerity(40)
function move() {
}

// Error => Leading decorators must be attached to a class declaration
```

## Design

We will cover some examples later in this post but creation of decorator is done by creating a simple function:

```javascript
function decorator(target, name, descriptor) {}
// or 
function decorator(target, name) {}
// or
function decorator(target) {}
```

As you can see, decorator "takes the target, name, and decorator descriptor as arguments" 

[and optionally returns a decorator descriptor to install on the target object]

Because you are clever, you may need to add some paremeters to your decorator and in this case it will become a factory:

```javascript
function decorator(tax) {
	return function(target, name, descriptor) {
	   // do something with parameter
	   target.price = target.price * tax;
    }
}
```

As you can see, decorator function parameters are really similar to the ones in [Object.defineProperty()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) method because decorators are "just attaching" new properties to Constructor function or Prototype object.

# Class and static properties in ES6

Before digging with class decorators, let's recap how static keyword works in ES6 class.

One way of adding static property or method in javascript ES6 is given by affecting the class itself meaning on constructor rather than on prototype.

Class with static properties or method in **ES6**.

```javascript
class Circle {
  // attach to Circle constructor function prototype	
  static PI = Math.PI;

  // attach to Circle constructor function prototype
  static circumference = function(r) {    // attach to constructor C prototype   
   return 2 * Circle.PI * r;
  }

  constructor() {
  // <= constructor function that will receive static props/methods
  }
}

const circle = new Circle();
circle.PI; 					// won't work
circle.circumference(2.5); 	// won't work

Circle.PI; 				   // 3.141592653589793
Circle.circumference(2.5); // 15.707963267948966
```

Indeed, static prop/methods are bound to the class Constructor function and not to the prototype object of the instance.

And as you could expect, circumference() method won't get access to instance fields, properties or methods of an instance of this class Circle.

Same version in **ES5** would be

```javascript
function Circle() {
}

Circle.PI = Math.PI;

Circle.circumference = function(r) {
 return 2 * Circle.PI * r;
};

var c = new Circle();
```

First way will affect the class itself meaining the constructor rather than the prototype.

# Class static decorator

As seen in previous paragraph with static properties, we could express the same result with a global decorator on class that will **enhance class constructor** with some properties or methods.

```javascript
@circleUtilities
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return Circle.circumference(this.radius);
  }
}
```

and decorator would be

```javascript
function circleUtilities(target, key, descriptor) {
  Object.assign(target, {
    PI : Math.PI,
	circumference: function(r) {
	 return 2 * Circle.PI * r;
    },
    area: function(r) {
	 return Circle.PI * Math.pow(r,2);
    }
  });
}

console.log(Circle.PI); 			    
// 3.141592653589793
console.log(Circle.circumference(2.5)); 
// 15.707963267948966

const c = new Circle(2.5);
console.log(c.getCircumference());
// 15.707963267948966
```

Attached to Constructor (static way) in this case and not instance Prototype.

# Class prototype decorator

If you want to add properties on Prototype instead of Constructor (static), you only need to modify decorator.

```javascript
function circleUtilities(target, key, descriptor) {
  Object.assign(target.prototype, {
    PI : Math.PI,
	circumference: function(r) {
	 return 2 * Circle.PI * r;
    },
    area: function(r) {
	 return Circle.PI * Math.pow(r,2);
    }
  });
}

console.log(Circle.PI); 			 // 3.141592653589793
console.log(Circle.circumference(2.5)); // 15.707963267948966
```

# Class property decorator

By constrast to class decorator, it will enhance object instance prototype.



They won't affect object instance prototype but only class object constructor as seen before.

@isTestable(true)
class MyClass { }

function isTestable(value) {
   return function decorator(target) {
      target.isTestable = value;
   }
}

# Reference

http://www.2ality.com/2015/02/es6-classes-final.html
http://blog.developsuperpowers.com/eli5-ecmascript-7-decorators/
https://github.com/wycats/javascript-decorators