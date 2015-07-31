var a = {
    name: 'darul',
    children: []
};

var cacheChildren = [];

function displayChildren() {
    if (a.children === cacheChildren) {
     console.log('no changes');
     return;
    }

 // doRender

 // doUpdateCache
 cacheChildren = a.children;
 console.log('cache updated');
}

console.log('********** START *********');
console.log('REFERENCE');

a.children.push("baby");
displayChildren();
displayChildren();
a.children.push("titi");
displayChildren();

console.log('COPY ?');

function displayChildren2() {
    if (a.children === cacheChildren) {
     console.log('no changes');
     return;
    }

 // doRender

 // doUpdateCache
 cacheChildren = a.children.slice();
 console.log('cache updated');
}

a.children = [];
cacheChildren = [];

a.children.push("baby");
displayChildren2();
displayChildren2();
a.children.push("titi");
displayChildren2();

console.log('COPY WITH EQUALS');

function arrayEqual(a, b) {
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function displayChildren3() {
    if (arrayEqual(a.children, cacheChildren)) {
     console.log('no changes');
     return;
    }

 // doRender

 // doUpdateCache
 cacheChildren = a.children.slice();
 console.log('cache updated');
}

a.children = [];
cacheChildren = [];

a.children.push("baby");
displayChildren3();
displayChildren3();
a.children.push("titi");
displayChildren3();
displayChildren3();

console.log('COPY WITH EQUALS NO DETECTION');
a.children = [];
cacheChildren = [];

a.children.push({name:'baby'});
displayChildren3();
displayChildren3();
a.children[0].name = 'darul';
displayChildren3();
displayChildren3();

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

function doCloneObj(value) {

}

function baseAssign(object, source) {
  if (source == null) {
    return object;
  }
  object || (object = {});
  var props = Object.keys(source);

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

// baseClone.js

function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

function initCloneObject(object) {
  var Ctor = object.constructor;
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  return new Ctor;
}

function toObject(value) {
  return isObject(value) ? value : Object(value);
}

function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = Object.keys(object),
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

function cloneObject(value, deep, customizer, key, object, stackA, stackB) {
  var result;
  var isDeep = deep;
  // TODO deep
  if (!isObject(value)) {
    return value;
  }
  //var isArr = isArray(value);
  var isArr = false;
  if (isArr) {

  }
  else {
    var tag = objToString.call(value),
        isFunc = tag == funcTag;

    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = initCloneObject(isFunc ? {} : value);
    }
    if (!isDeep) {
      return baseAssign(result, value);
    }
  }

  // Check for circular references and return corresponding clone.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length];
    }
  }
  // Add the source value to the stack of traversed objects and associate it with its clone.
  stackA.push(value);
  stackB.push(result);

  // Recursively populate clone (susceptible to call stack limits).

  // (isArr ? arrayEach : createBaseFor)(value, function(subValue, key) {
  var fn = createBaseFor();
  fn(value, function(subValue, key) {
    result[key] = cloneObject(subValue, isDeep, customizer, key, value, stackA, stackB);
  });

  return result;
}

var a = 1;
var o = {
  id:'o',
  sub: {
    name: 'darul75'
  }
};

b = cloneObject(a);
var clone = cloneObject(o, true);
console.log(clone);