Mixins are dead... not really but we could say that and ES7 decorators will replace it. A new way of enhancing object could be with the use of decorators and I will give some examples in this post. 

# Specification

Specification is available [here].

# Class decorators

It could be nice to extend our classes to give them new capabilities, let's see how it works.

## static

One way of adding property or method is given by affecting the class itself meaning the constructor rather than the prototype.


```javascript
class Circle { 
  static PI = Math.PI; 			  // attach to constructor C prototype

  static circumference = function(radius) {    // attach to constructor C prototype   
   return 2 * Circle.PI * radius;
  }

  constructor() {}
}

const c = new Circle();
c.PI; 					// won't work
c.circumference(2.5); 	// won't work

Circle.PI; 					//
Circle.circumference(2.5); // 15.707963267948966

```

Remember that static prop/methods are bound to the class constructor function and not the prototype object of the instance.

And as you could expect, circumference() method won't get access to instance fields, properties or methods of an instance of this class Circle.

First way will affect the class itself meaining the constructor rather than the prototype.

# Reference

http://www.2ality.com/2015/02/es6-classes-final.html
http://blog.developsuperpowers.com/eli5-ecmascript-7-decorators/

// Here's the decorator in action.
// It is basically an expression that
// returns a function. You apply it
// to your code by prefixing it with an
// @-character and putting it right ON TOP OF
// the thing you want to decorate:

@addCost(200)
class Cellphone {
  
  static test = 'test';

  constructor() {
    this.model = "Samsung"
    this.storage = 16
  }
}

// This is a simple factory function that
// returns the decorator we want. If you
// decorate a class, the decorator itself
// takes one argument; the class itself.
function addCost(sum) {
  return function decorator(theThingWereDecorating) {
    theThingWereDecorating.cost = sum
  }
}

var phone = new Cellphone()

console.log(Cellphone.test) // prints 200
console.log(Cellphone.cost) // prints 200