
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
	attr1: 1,
	attr2: 2
};
var clone = original; // :)

// we have a very nice clone now, let's play
// with it because we are confident.

clone.attr1 = 'it is really simple';

console.log(clone.attr1); // ok fine
console.log(original.attr1); // oh no !
```

Ok that was simple and stupid but I am quite sure we all made it one time.

You have just created a reference to original object, sorry I repeat myself.

## How to clone Object

Many libraries like UnderscoreJS, JQuery, and now Lodash do that very well and to avoid reinvent the wheel *simply use it*.

Here I will just decorticate lodash clone method to see how it works from inside.

### Lodash clone function

```javascript
function cloneObject(value, deep, customizer, key, object, stackA, stackB) {

}
```

Now just focus on 2 first params, value and deep.

- value is your value to be cloned first, but this method can be called recursively on each of your nested object/array attributes.
- deep will invoke a more robust copy traversing all your attributes and so one for each nexted object/array/function.

By default, with no depth parameter (we often read about 'shallow' copy), only your primitive values on first level will be well copied, all your other objects or array nested inside it with just become references to original.

### Lodash clone with no deep

```javascript
var _ = require('lodash');

var obj = {
    attr: 42
};

var clone = _.clone(obj);

clone.attr = '21';

obj.attr === 42; // still true
```

but

```javascript
var _ = require('lodash');

var obj = {
    attr: 42
    attr2: {
    	value: 42
	}
};

var clone = _.clone(obj);

clone.attr2.value = '21';

obj.attr2.value === 42; // not true anymore
```

Symplified by me, I have escaped the case of arrays, here is an extract of lodash code.

```javascript
function cloneObject(value, deep, customizer, key, object, stackA, stackB) {
	var result;
  var isDeep = deep; // false in this case

  // case value is just a primitive, return it
  if (!isObject(value)) {
    return value;
  }

  if (/* NOT A PRIMITIVE */) {
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

Let see both methods initCloneObject() which creates new instances and baseAssign().

```javascript
function initCloneObject(object) {
  var Ctor = object.constructor;
  // look for your initial object constructor,
  // or by default Object constructor
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  return new Ctor;
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
    object[key] = source[key];
  }
  return object;
}
```

### Lodash clone with deep

TODO : finish later :) tired now

## Conclusion

TODO

You can also edit this article by pressing edit button.

![Just for fun](/images/posts/man-person-people-emotions.jpg)
