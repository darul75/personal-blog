
Mixins are dead (or should be) and we could say that ES7 decorators (experimental) will provide a new way of changing object behaviours at runtime, as they give a new opportunity to modify classes or properties. Current [specification](https://github.com/wycats/javascript-decorators) is a good start to play with decorators, but I 'll try to share a little bit more with you about it.

## Using it

ES7 decorators syntax is trivial.

```javascript
@decoratorName(optionalParams)
class MyClass {

  @decoratorName(optionalParams)
  targetObjectMethodOrProperty
  
}
```

Note that decorators do not work on a single function outside a class definition:


```javascript
@celerity(40)
function move() {
}

// Error => Leading decorators must be attached to a class declaration
```

## Design

We will cover some examples later in this post but implementing a decorator is done by creating a simple function:

```javascript
// example on a method with a decorator named 'dec'
@dec
method() {}

// decorator definition
function dec(target, name, descriptor) {}
// or 
function dec(target, name) {}
// or
function dec(target) {}
```

As you can see, a decorator can take up to 3 arguments [and optionally returns a decorator descriptor to install on the target object]

**Parameters**

`target` : depending of your use it can be
  - current object Constructor
  - current object Prototype
  - directly current object when decorator is on an object literals
  
` name`: current property name or null when decorator is on Class

`descriptor` : current property descriptor or null when decorator is on Class

**Decorator as a factory**
You may need to pass parameters (*function, object, primitive type*) to your decorator and in this case it will become a factory:

```javascript
@dec
method() {}

// and your decorator function
function dec(tax /*...moreparams*/) {
  return function(target, name, descriptor) {
     target.price = target.price * tax;
    }
}
```

## But how decorators works ?

I will try to explain it :)

A decorator function is quite similar to native [Object.defineProperty()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) method.

A decorator can be "attached" to :

- Class Constructor function
- Class Properties : object, method, accessors

A decorator will precede the syntax that defines a property (or method).

```javascript
@classDecorator
class Clazz {
  
  @staticPropDecorator
  static prop = 5;

  @staticMethodDecorator    
  static fnStatic = function() {}
  
  @propDecorator
  prop = 5;

  @methodDecorator
  fn() {}
    
}
```

## Life before ES7 decorator

Here is an example of how we could implement job done by decorators before they occur in ES7.

Let's create a class that contains a single method.

```javascript
class C { 
  method(...params) {
    console.log(params);
  }
}
const c = new C();
c.method('a', 'b', 'c'); 
// ['a','b','c']
```

Exercice consist in applying (call a function) something *before* and *after* the call to 'method()' function.

To do that, we will use [defineProperty](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) and [getOwnPropertyDescriptor](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyDescriptor) functions.

First step consist it retrieving method property descriptor object and then transform it.

```javascript
// get descriptor of method() property
const methodDesc = Object.getOwnPropertyDescriptor(C.prototype, 'method');
// {
//   'writable':true,
//   'enumerable':true,
//   'configurable':true,
// value field is our function
//   'value': function method() {
//     console.log(params);
//   }
```

Now that we have property descriptor in hand, why not patch its value property ?

To do this , we create a function similar to that of a definition of decorators in ES7.

```javascript
function patchMethod(target, key, descriptor) {
  // store old method
  const oldMethod = descriptor.value;

  // replace by new one
  descriptor.value = function() {
    console.log('before');
    oldMethod.apply(this, arguments);
    console.log('after');
  }

  // reapply on property
  Object.defineProperty(target, key, descriptor);
}
```

Our main method will look like

```javascript
const methodDesc = Object.getOwnPropertyDescriptor(C.prototype, 'method');
// patch decorator
patchFunction(C.prototype, 'method', methodDesc );

const c = new C();
c.method('a', 'b', 'c');
// before
// ["a","b","c"]
// after
```

That was basically how decorator will work.

## Class and static properties

Before digging with Class Constructor decorators, let's recap how static keyword works in ES7 class ([experimental](http://babeljs.io/docs/plugins/transform-class-properties/), see BabelJS).

One way of adding static property or method in javascript ES6 is given by affecting the class itself meaning on constructor rather than on prototype.

Class with [static properties](https://github.com/jeffmo/es-class-fields-and-static-properties) example:

```javascript
class Circle {
  // attach to Circle constructor function prototype  
  static name = 'circle';

  // attach to Circle constructor function prototype
  static circumference = function(r) {
   return 2 * Math.PI * r;
  }

  constructor() {
  // <= constructor function that will receive static props/methods
  }
}

const circle = new Circle();
circle.name;        // won't work
circle.circumference(2.5);  // won't work

Circle.name;         // circle
Circle.circumference(2.5); // 15.707963267948966
```

Static properties or methods are bound to the class Constructor function and not to the Constructor prototype object.

And as you could expect, circumference() method won't get access to instance fields, properties or methods of an instance of this class Circle.

Same version in **ES5** would be

```javascript
function Circle() {}

Circle.name = 'circle';

Circle.circumference = function(radius) {
 return 2 * Math.PI * radius;
};
```

First way will affect the class itself meaining the constructor rather than the prototype .

## Decorator on Class Constructor 

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
    displayName: 'circle',
    circumference: function(r) {
      return 2 * Math.PI * r;
    },
    area: function(r) {
      return Math.PI * Math.pow(r,2);
    }
  });
}

// Constructor method/prop
console.log(Circle.displayName);          
// 'circle'
console.log(Circle.circumference(2.5)); 
// 15.707963267948966

// Prototype method/prop
const c = new Circle(2.5);
console.log(c.radius); 
// 2.5
console.log(c.getCircumference()); 
// 15.707963267948966
console.log(c.area());
// won't work
```

Attached to Constructor function (static way) in this case and not instance Prototype.

## Decorator on Class Prototype 

If you want to add properties on Prototype instead of Constructor (static), you only need to modify decorator to work with prototype instead of constructor function.

```javascript
function circleUtilities(target, key, descriptor) {
  Object.assign(target.prototype, {
   circumference: function() {
    return 2 * Math.PI * this.radius;
     },
     area() {
    return Math.PI * Math.pow(this.radius,2);
     }
  });
}

const c = new Circle(2.5);
console.log(c.circumference());
```

## Decorator on accessor property

You may want to attach a decorator to an accessor and free to you to do what you want then

```javascript
class C {
  
    @prefix('my name is: ')
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
}

function prefix(string) {
  return function(target, key, descriptor) {
    let getter = descriptor.get;
    
    descriptor.get = function() {
      return string + getter.call(this);
    }
  }  
}

const c = new C();
c.name = 'julien';

console.log(c.name);
// my name is: julien
```

## Another decorator on method property

Here another sample with a decorator that take a function as parameter.

```javascript
const prefix = s => 'my fullname is ' + s;
const suffix = s => s + ' is my fullname';

class Person {
  
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
    
  name() { 
    return `${this.first} ${this.last}`;
  }
    
  @transformString(prefix)
  namePrefixed() { 
    return this.name();
  }
  
  @transformString(suffix)
  nameSuffixed() { 
    return this.name();
  }
}

function transformString(fn) {
  return function(target, key, descriptor) {
    const oldValue = descriptor.value;
    
    descriptor.value = function() {
      const s = oldValue.call(this);
      return fn(s);
    }
    
  }  
}

const t = new Person('julien', 'valery');

console.log(t.namePrefixed());
console.log(t.nameSuffixed());
// my fullname is julien valery
// julien valery is my fullname
```

## Dependency injection example

Decorator is really a good option to create declarative code that solve dependency injection a well known pattern.

In a nutshell, you let a container to manage component instances and just declare component dependencies to be injected in constructor (or method) at runtime.

## Usage
Goal of this example is to allow that kind of syntax with a **@inject** decorator

```javascript
@inject([DependencyOne, DependencyTwo...])
class Component {

  constructor(serviceOne, serviceTwo) {
  this.serviceOne = serviceOne;
    this.serviceTwo= serviceTwo;
  }

  method() {
    this.serviceOne....
  }
```

We could then add a **@singleton** decorator that will be handle by container to resolve your dependency only one time.

```javascript
@singleton
class DependencyOne{
  fetchSomeData(cb) {
    cb({data: 'ServiceTwo'});
  }
}
```

## Full code

Here is what Container code may look like

```javascript
class Container {
  
  static singletons = new Map();
  
  static registerSingleton(clazz) {
    if (Container.singletons.has(clazz)) {
      return Container.singletons.get(clazz);
    }
    
    const instance = Container.resolve(clazz);
    
    Container.singletons.set(clazz, instance);
    
    return instance;
  }
  
  static resolve(clazz) {
    const store = Container.store;
    
    const depKeys = clazz.dependencies;
    
    let dependencies = [];
    
    if (depKeys) {    
       dependencies = depKeys.reduce(function(deps, depClazz) {
         
         if (depClazz.singleton) {
           deps.push(Container.registerSingleton(depClazz));
         }
         else {
           deps.push(new depClazz());
         }
      
        return deps;
        
      }, []);
    }
    
    return new clazz(...dependencies);
  }
  
}
```

Then your main code 

```javascript
@singleton
class ServiceOne {
  fetchSomeData(cb) {
    cb({data: 'ServiceOne'});
  }
}

@singleton
class ServiceTwo {
  fetchSomeData(cb) {
    cb({data: 'ServiceTwo'});
  }
}

@inject([ServiceOne])
class Component {
  constructor(service) {
    this.service = service;
  }
  
  render() {
    console.log('rendering component one');
    this.service.fetchSomeData(function(data) {
      console.log(data);
    });
  }
}

@inject([ServiceOne, ServiceTwo])
class ComponentTwo {
  constructor(s1, s2) {
    this.serviceOne = s1;
    this.serviceTwo = s2;
  }
  
  render() {
    console.log('rendering component two');
    this.serviceOne.fetchSomeData(function(data) {
      console.log(data);
    });
    this.serviceTwo.fetchSomeData(function(data) {
      console.log(data);
    });
  }
}

// @singleton decorator
function singleton(target, key, descriptor) {
  target.singleton = true;
}

// @inject decorator
function inject(dependencies) {

  return function(target, key, descriptor) {
    target.dependencies = dependencies;
  }
}

const c1 = Container.resolve(Component);
const c2 = Container.resolve(ComponentTwo);
c1.render();
c2.render();
// rendering component one
// {"data":"ServiceOne"}
// rendering component two
// {"data":"ServiceOne"}
// {"data":"ServiceTwo"}
```

## Conclusion

This post is long but I hope it will give you a new overview and ideas of what can be done with awesome ES7 decorators.

Below a lot of links you may read too.

## References

[es6-classes-final](http://www.2ality.com/2015/02/es6-classes-final.html)

[static in js](http://stackoverflow.com/questions/13486457/javascript-class-property-vs-class-prototype-property-to-emulate-static-propert)

[Wycats specification](https://github.com/wycats/javascript-decorators) [more](https://github.com/jonathandturner/brainstorming/blob/master/README.md#c6-ambient-decorators)

[Dependency injection framework with ES7 decorators](https://github.com/andrewmunsell/needlepoint)

[Class extension](http://code.fitness/post/2015/12/babel-es7-decorators-are-back.html)

[Angular with decorators](https://github.com/zewa666/angular_es6) [French](https://blog.hadrien.eu/2015/06/05/decorateurs-es7/)

[Popular React autobind decorator](https://github.com/andreypopp/autobind-decorator/blob/master/src/index.js#L15)

[Common js useful decorators](https://github.com/jayphelps/core-decorators.js)

[Short example](http://blog.developsuperpowers.com/eli5-ecmascript-7-decorators/)

----------

Tags: *ES6* *ES7* *Javascript* *Angular*
