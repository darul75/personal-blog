
In an ideal world, to clone an object we should simply invoke a native method named clone() and go drink a coffee, but no, we can't. In order to undertand common manners to clone() object in javascript, we will need to review some basics, a recap is always welcome, isn't it ?

I will explain you what is going on when dealing with javascript value, object, references...and all that in one article, OMG.

## Primitives are immutable

Javascript defines six types of primitives:

 - Boolean
 - Null
 - Undefined
 - Number
 - String
 - Symbol (new in ECMAScript 6)

Which all are *Immutable* values, therefore most known side effect is when you pass it to some function, these are passed by value.

```javascript
var s1 = "abc";
s1[0] = 'z';
console.log(s1); // still 'abc'

var number = 42;
var clone = number;

clone = 22;
console.log(number); // still '42'

function doInc(num) {
	num += 1;
	// num === 43 yes but 'num' here is just a copy by value..
}

doInc(number);
console.log(number); // still '42'
```

Well, so if you want to clone a primitive does it work like a charm ?

```javascript
var original = 'base';
var clone = original;
// keep it mind here you haven't made a copy but just
// created a reference to the same data.

console.log(clone === copy); // true

clone = 'another';
// here you change the reference but original still
// reference same string immutable data 'base'.

console.log(original === clone); // false

```
Ok then you have already seen many examples like that.. let's see further.

## Objects

"In computer science, an object is a value in memory which is possibly referenced by an identifier." Mozilla.

Take this example where we will try to copy a simple object with some primitive attributes.

```javascript
var original = {
	prop: 'myProp'
};

// let's clone it, sorry for this...
var clone = original; // :)

// we have a very nice clone now, let's play
// with it because we are confident.
clone.prop = 'it is so simple to clone object';

console.log(clone.prop); // ok fine
console.log(original.prop); // oh no !
```

Ok that was simple and stupid but I am quite sure we all made it one time.

You have just created a reference to original object, sorry I repeat myself.

## Shallow vs Deep copy

Here just a piece of code with side effect you should be aware of from a shallow copy.

**Only primitives**

```javascript
var _ = require('lodash');

var obj = {
    prop: 42
};

var clone = _.clone(obj);
// assign new property value
clone.prop = 21;

// some checks
clone.prop === 21; // TRUE sure
// and
obj.prop === 42; // STILL true
```

**Object**

```javascript
var _ = require('lodash');

var obj = {
    prop: {
      number: 42
  }
};

var clone = _.clone(obj);
// assign new value on 'number' property
clone.prop.number = 21;

// check on original cloned object
obj.prop.number !== 42; // yes indeed
obj.prop.number === 21; // yes indeed

// 'prop' property in 'clone object' is just a reference
// to prop object from 'original object'
```

## How to clone Object

Many libraries like UnderscoreJS, JQuery, and now **Lodash** do that very well therefore to **avoid reinvent the wheel** simply use it.

Here I propose we decorticate **Lodash** clone() method to see how it works.

### Lodash clone function

The signature that may first look little bit weird, many parameters...

```javascript
function cloneObject(value, deep, customizer, key, object, stackA, stackB) {

}
```

Focus on 2 first params, value and deep.

- value is your value to be cloned first, but this method can/will be called recursively on each of your nested object/array attributes.
- deep option will invoke a more robust copy traversing all your attributes and so one for each nested object/array/function.

By default, with no depth parameter ('shallow' copy), only your primitive values on first level will be well cloned, all other objects/array nested inside it will become references to original.

### Lodash clone with no deep

Symplified by me, I have escaped the case of arrays, here is an extract of lodash code.

```javascript
function cloneObject(value, deep, customizer, key, object, stackA, stackB) {
	var result;
  var isDeep = deep; // false in this case

  // case value is just a primitive, return it
  if (!isObject(value)) {
    return value;
  }

  if (/* NOT A PRIMITIVE => OBJECT */) {
	  result = initCloneObject(value);
	}

  // here we are in case of a shallow copy, so
  // we do not look for nested object, just first level.
	if (!isDeep) {
	  return baseAssign(result, value);
	}

  return result;
}
```

Let see both methods

- initCloneObject() creates new instances
- baseAssign() copy each object properties.

```javascript
function initCloneObject(object) {
  var Ctor = object.constructor;
  // look for your initial object constructor,
  // or by default Object constructor
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  return new Ctor; // create instance
}
```

It returns a new instance and to finish the job, we need to copy original object attributes.

```javascript
function baseAssign(object, source) {
  if (source == null) {
    return object;
  }
  object || (object = {});
  var props = Object.keys(source); // enumerable attributes

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key]; // assign it to new object
  }
  return object;
}
```

### Lodash clone with deep

Ok, now let's go deeper and see how lodash handles the case you do not want only a shadow copy but a deep one, by traversing all your nested object properties.

```javascript
function cloneObject(value, deep, customizer, key, object, stackA, stackB) {
  var result;
  var isDeep = deep; // true in this case

  // case value is just a primitive, return it
  if (!isObject(value)) {
    return value;
  }

  if (/* NOT A PRIMITIVE => OBJECT */) {
    result = initCloneObject(value);
  }

  // condition not verified
  if (!isDeep) {
    return baseAssign(result, value);
  }

  // GO ON IN DEPTH !!
  // HERE WE ARE

  // - 1> this method iterate over current object properties
  // - 2> use a callback to call current cloneObject method recursevely
  var fn = createBaseFor();

  fn(value, function(subValue, key) {
    // start recursion for each properties of current object
    // and go on until no more in hierarchy
    // - 3> assign result to current object property
    result[key] = cloneObject(subValue, isDeep, customizer, key, value, stackA, stackB);
  });

  return result;
}
```

Here is the content of createBaseFor() method.

Note the use of an anonymous function, just to cache fromRight optional param.

'iteratee' param is the callback we see before:

```javascript
function(subValue, key) {
  // we create a new property on result object named 'key'
  // we calculate his clone and assign it
  result[key] = cloneObject(subValue, isDeep, customizer, key, value, stackA, stackB);
}
```

Here this useful method:

```javascript
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = Object.keys(object), // iterate over our object properties
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
```

## Conclusion

I hope it gives you idea at how clone() method has to work.

Array, Function properties are not illustrated but process is similar.

Note that Lodash handles circular dependency as well during clone process.

Based on that, you can guess how equal() Lodash method works.

You can also edit this article by pressing edit button.

![Just for fun](/images/posts/man-person-people-emotions.jpg)
