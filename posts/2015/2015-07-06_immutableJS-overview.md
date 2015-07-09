Immutable library can be useful but documentation is quite tricky to understand. I have just played a little with this library and wanted to share with you some examples.

Written with [TypeScript](http://www.typescriptlang.org/) I guess it is why documentation is quite difficult to read first.

## API

Documentation use a very generic template syntax.

### Generic constructors

```javascript
Map<K, V>(): Map<K, V> // create a new immutable map
Set<T>(): Set<T>
List<T>(): List<T>
Stack<T>(): Stack<T>
Set<T>(): Set<T>
```

Ok, it is quite simple, T (for Type) K (for Key) V (for Value) are generic type declaration which will be used by immutable implementation.

Following commonly notation, keep it mind the following type parameter names:

- K - Key
- V - Value
- T - Type
- number - Number
- ... maybe more

### Generic methods

Function signature follow this convention:

```javascript
nameCamelCase(...parameters) : newCurrentImmutableObjToReturn
```

What I just want to say is that you work on immutable data, so always use your *returned value*, otherwise...

parameters in documentation are often named for more readability

```javascript
set(key: K, value: V): Map<K, V>
// will be call this way
// myMap.set('a', 'I am A');
// myMap.set('b', 'I am B');
```

### ES6
Then Immutable embrace ES6 with Classes, Arrow Functions and Modules so it won't help you to read documentation if you do not know anything about it.

But I am nice, I give you some details :)

#### Arrow Function

Arrow Function sample extracted from Immutable documentation:

```javascript
// ES6
foo.map(x => x * x);
// ES3
foo.map(function (x) { return x * x; });
```

Ok, but let's see an exemple on an Immutable Map.update() object method :

```javascript
update(key: K, updater: (value: V) => V): Map<K, V>
```
OMG, do not worry, difficult part to read is the parameter in parenthesis.

```javascript
(key: K, updater: (value: V) => V): Map<K, V>
```

*Reminder*
```javascript
(value: V) => V
```
is equivalent to
```javascript
function(value) {
  // do something with value
  return value;
}
```

As explained before `key`,`updater` keywords are just there for readability, you do not write it when coding.

Firt param is your map key, second one use an Arrow Function, see it in action:

```javascript
var value = {
 name: 'julien',
 aka: 'darul75'
};

// create a new map
var myMap = Immutable.Map({});
// add a value, note we play with immutable object, so keep in mind
// to always return and erase old one
// Example:
// myMap = myMap.set('myMapKey', value);

// we gonna update 'aka' attribute value from 'darul75' to 'darul'
var newMyMap = myMap.update('myMapKey', (myMapValue) => {
  myMapValue.aka = 'darul';
  // if map value is also Immutable map it will be
  // myMapValue = myMapValue.set('aka', 'darul');
  return myMapValue;
});

console.log(newMyMap.get('myMapKey'));
// Object {name: "julien", aka: "darul"}
```

### Iterable

Iterating over your collection of data, you might all know what Iterable and Iterator mean.

All collections in Immutable are extending Iterable following common (key, value) pattern.

```javascript
Iterable<K, V>
```
#### Example with native Immutable Map

```javascript
var value = {
 name: 'julien',
 aka: 'darul75'
};
var myMap = Immutable.Map({});
myMap = myMap.set('myMapKey', value);
var myArrayIterator = Immutable.Iterable(myMap);
// not needed by default as Map implement it by debault
console.log(myArrayIterator.first());
// Object {name: "julien", aka: "darul"}
console.log(myArrayIterator.get('myMapKey'));
// Object {name: "julien", aka: "darul"}
```

#### Example with native javascript Array []

Purpose of this example is to get an Iterable obj from a native javascript array.

Then play with all methods available on [it](http://facebook.github.io/immutable-js/docs/#/IndexedIterable)

```javascript
// constructor from documentation
// take an array
Iterable<T>(array: Array<T>): IndexedIterable<T>
// return and IndexIterable obj
```

in practice
```javascript
var myArray = [1,2,3];
console.log(Immutable.Iterable.isIterable(myArray)); // false
var myArrayIterator = Immutable.Iterable(myArray);
console.log(Immutable.Iterable.isIterable(myArrayIterator)); // true
console.log(myArrayIterator.first()); // 1
console.log(myArrayIterator.get(2)); // 3
```

Behind it looks like [Seq](http://facebook.github.io/immutable-js/docs/#/Seq) is used.


### KeyPath

What is it ?

A keypath seach for you data according to a path represented by a sum of keys.

"Returns the value found by following a path of keys or indices through nested Iterables."

Signature
```javascript
getIn(searchKeyPath: Array<any>, notSetValue?: any): any
```

Example
```javascript
var value = {
 name: 'julien',
 aka: 'darul75',
 address: {
  city: 'paris',
  country: 'france'
 }
};
var myMap = Immutable.Map({});
myMap = myMap.set('myMapKey', Immutable.fromJS(value)); // convert plain object to an Immutable Map
console.log(myMap.getIn(['address', 'city']));
// 'paris'
```

Many functions can be used as setIn(), deleteIn(), updateIn(), mergeIn()....

You can also edit this article by pressing edit button.
