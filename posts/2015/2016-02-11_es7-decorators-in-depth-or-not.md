
Mixins are dead (or should be) and we could say that ES7 decorators will provide a new way of enhancing object behaviours at runtime. Usage of decorators allows us to modify classes or properties and you can read more about it in current [specification](https://github.com/wycats/javascript-decorators).

## Using it

ES7 decorators syntax is quite simple.

```javascript
@decoratorName(optionalParams)
class MyClass {

  @decoratorName(optionalParams)
  targetObjectMethodOrProperty
  
}
```

They won't work on a single function outside a class definition:


```javascript
@celerity(40)
function move() {
}

// Error => Leading decorators must be attached to a class declaration
```

## Design

We will cover some examples later in this post but implementing a decorator is done by creating a simple function:

```javascript
function decorator(target, name, descriptor) {}
// or 
function decorator(target, name) {}
// or
function decorator(target) {}
```

As you can see, decorator takes maximum 3 arguments [and optionally returns a decorator descriptor to install on the target object]

**Parameters**

`target` : depending of you use it can be
  - current object Constructor
  - current object Prototype
  - directly current object when decorator is on an object literals
  
` name`: current property name or null when decorator is on Class

`descriptor` : current property descriptor or null when decorator is on Class

**Decorator as a factory**
You may need to pass parameters (function, object, primitive type) to your decorator and in this case it will become a factory:

```javascript
function decorator(tax, ...moreparams) {
  return function(target, name, descriptor) {
     target.price = target.price * tax;
    }
}
```

# But how decorators works ?

I will try to explain it :)

Decorator function parameters are really similar to the ones in [Object.defineProperty()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) method.

A decorator can be "attached" to :

- Class Constructor function
- Class Properties : object, method, accessors

A decorator will precede the syntax that defines a property.

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

Here is an example how it could work without decorators.

Class definition
```javascript
class C {
  
  prop: "value"
  
  fn(...params) {
    console.log(params);
  }
}
const c = new C();
c.fn('a', 'b', 'c'); // ['a','b','c']
```

Ok now imagine we want to declatively inject something before and after 'fn' method call.

To do that, we will use [defineProperty](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) and [getOwnPropertyDescriptor](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyDescriptor) functions.

Idea is to replace 'fn' property method at runtim by
- storing reference to this function
- replacing by a new function doing before/after job
- not forget call stored function

To to that you can use property descriptor object
```javascript
const fnDesc = Object.getOwnPropertyDescriptor(C.prototype, 'fn');
```

Now that we have property descriptor in hand, why not patch its value property:
```javascript
function patchFunction(target, key, descriptor) {
  const oldFn = descriptor.value;

  descriptor.value = function() {
    console.log('before');
    oldFn.apply(this, arguments);
    console.log('after');
  }

  Object.defineProperty(target, key, descriptor);
}
```

function patchProp(target, key, descriptor) {
  descriptor.writable = true;

  Object.defineProperty(target, key, descriptor);
}

patchFunction(C.prototype, 'fn', fnDesc);
patchProp(C.prototype, 'prop', patchProp);


const c = new C();
c.fn('a', 'b', 'c');
c.prop = 'dd';

```

That is basically how decorator will work.

# Class and static properties in ES6

Before digging with Class Constructor decorators, let's recap how static keyword works in ES6 class.

One way of adding static property or method in javascript ES6 is given by affecting the class itself meaning on constructor rather than on prototype.

Class with static properties or method in **ES6** is

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

# Decorator on Class Constructor 

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
//
console.log(c.getCircumference()); 
// 15.707963267948966
console.log(c.area());
// won't work
```

Attached to Constructor function (static way) in this case and not instance Prototype.

# Decorator on Class Prototype 

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

# Decorator on accessor property 

You may want to attache a decorator to an accessor and free to you to do what you want then

```javascript
class Test {
  
    @prefix("my name is: ")
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

const t = new Test();
t.name = 'julien';
```

# Decorator on Class property

```javascript
const prefix = s => 'my fullname would be ' + s;
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
```


# Dependency injection example

```javascript
class Container {
  
  static dependencies = new Map();
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

function singleton(target, key, descriptor) {
  target.singleton = true;
}

function inject(dependencies) {
  // on prop
//  https://github.com/zewa666/angular_es6/blob/master/src/config/decorators.js#L33

  return function(target, key, descriptor) {
    target.dependencies = dependencies;
  }
}

const c1 = Container.resolve(Component);
const c2 = Container.resolve(ComponentTwo);
c1.render();
c2.render();
```


# Reference

http://www.2ality.com/2015/02/es6-classes-final.html
http://stackoverflow.com/questions/13486457/javascript-class-property-vs-class-prototype-property-to-emulate-static-propert

https://github.com/wycats/javascript-decorators
https://github.com/jonathandturner/brainstorming/blob/master/README.md#c6-ambient-decorators
http://blog.developsuperpowers.com/eli5-ecmascript-7-decorators/
http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
https://github.com/zewa666/angular_es6
https://github.com/andrewmunsell/needlepoint
https://gist.github.com/jeffmo/054df782c05639da2adb
http://code.fitness/post/2015/12/babel-es7-decorators-are-back.html

https://blog.hadrien.eu/
https://blog.hadrien.eu/2015/06/05/decorateurs-es7/
https://github.com/andreypopp/autobind-decorator/blob/master/src/index.js#L15
https://github.com/jayphelps/core-decorators.js/blob/master/src/lazy-initialize.js