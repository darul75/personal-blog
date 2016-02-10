
Mixins are dead (or should be) and we could say that ES7 decorators will provide a new way of enhancing object behaviours at runtime. Usage of decorators allows to modify classes or properties as you would see in current [specification](https://github.com/wycats/javascript-decorators). 

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

As you can see, decorator "takes the target, name, and decorator descriptor as arguments" 

[and optionally returns a decorator descriptor to install on the target object]

Because you are clever, you may need to add some parameters (function, object, primitive type) to your decorator and in this case it will become a factory:

```javascript
function decorator(tax, ...moreparams) {
	return function(target, name, descriptor) {
	   // target object current decorated one
	   // name 
	   target.price = target.price * tax;
    }
}
```

As you can see, decorator function parameters are really similar to the ones in [Object.defineProperty()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty) method. 

Decorators are indeed "attaching" new properties to Constructor function object or Prototype object that will be shared by your instances.

# Class and static properties in ES6

Before digging with Class decorators, let's recap how static keyword works in ES6 class.

One way of adding static property or method in javascript ES6 is given by affecting the class itself meaning on constructor rather than on prototype.

Class with static properties or method in **ES6**.

```javascript
class Circle {
  // attach to Circle constructor function prototype	
  static name = 'circle';

  // attach to Circle constructor function prototype
  static circumference = function(r) {    // attach to constructor C prototype   
   return 2 * Math.PI * r;
  }

  constructor() {
  // <= constructor function that will receive static props/methods
  }
}

const circle = new Circle();
circle.name; 				// won't work
circle.circumference(2.5); 	// won't work

Circle.name; 			   // circle
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

# Class prototype decorator

If you want to add properties on Prototype instead of Constructor (static), you only need to modify decorator.

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

# Accessor property decorator

syntactic getters and/or setters

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

```javascript
const upper = ''.toUpperCase;
const list = (s) => {return s.split(' ');};

class Person {
  
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
    
  @transform(upper)
  name() { 
    return `${this.first} ${this.last}`
  }
  
  @transform(list)
  names() { 
    return `${this.first} ${this.last}`
  }
}

function transform(fn) {
  return function(target, key, descriptor) {
    const oldValue = descriptor.value;
    
    descriptor.value = function() {
      const s = oldValue.call(this);
      console.log(fn);
      return fn.call(s);
    }
    
    
  }  
}

const t = new Person('julien', 'valery');

console.log(t.name());
console.log(t.names());

```

# Class property decorator

```javascript

class Container {
  
  static store = new Map();
  
  static resolve(clazz) {
    const store = Container.store;
    const depKeys = clazz.dependencies;
    
    const dependencies = depKeys.reduce(function(deps, key) {
      
     if (store.has(key)) {
        deps.push(store.get(key));
      }
      else {
        const dep = {key: key};
        store.set(key, dep);
        deps.push(dep);
      }
      
      return deps;
    }, []);
    
    return new clazz(...dependencies);
  }
}


@inject(['serviceOne', 'serviceTwo'])
class Component {
  constructor(serviceOne, serviceTwo) {
    console.log(serviceOne);
    console.log(serviceTwo);
  }
}

@inject(['serviceOne', 'serviceTwo'])
class ComponentTwo {
  constructor(serviceOne) {
    console.log(serviceOne);
  }
}

function inject(dependencies) {
  return function(target, key, descriptor) {
    target.dependencies = dependencies;
  }
}

Container.resolve(Component);
Container.resolve(ComponentTwo);
```


# Reference

http://www.2ality.com/2015/02/es6-classes-final.html
http://blog.developsuperpowers.com/eli5-ecmascript-7-decorators/
https://github.com/wycats/javascript-decorators
http://stackoverflow.com/questions/13486457/javascript-class-property-vs-class-prototype-property-to-emulate-static-propert
http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
https://github.com/zewa666/angular_es6
https://github.com/andrewmunsell/needlepoint