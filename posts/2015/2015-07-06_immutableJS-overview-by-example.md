Immutable library can be useful but documentation is quite tricky to understand.

Let's view some examples together.

## API

Api documentation use a very generic template syntax.

## Documentation syntax

### Generic constructors

Constructors are in capitalized form with some optional type parameters.

```javascript
Map<K, V>(): Map<K, V> // create a new immutable map
Set<T>(): Set<T>
List<T>(): List<T>
Stack<T>(): Stack<T>
Set<T>(): Set<T>
```

Ok, it is quite simple, T (for Type) K (for Key) V (for Value) are generic type declaration which will be used by immutable implementation.

Following commonly notation, keep it mind the following type parameter names:

- E - Element
- K - Key
- N - Number
- T - Type
- V - Value

### Generic methods

Function signature follow this convention:

nameCamelCase(...parameters) : newCurrentImmutableObjToReturn

parameters are often named for more readability

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
OMG, do not worry, diffibult part to read is the parameter in parenthesis.

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
// add a value, note we play with immutable object, so keep in mind return and erase old one
myMap = myMap.set('myMapKey', value);

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

#### Iterable

Iterating over your collection of data, you might all know what Iterable and Iterator mean.

All collections in immutable are extending Iterable following common (key, value) pattern above

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
var myArrayIterator = Immutable.Iterable([1,2,3]);
console.log(myArrayIterator.first()); // 1
console.log(myArrayIterator.get(2)); // 3
```



Map<K, V>(iter: Iterable<any, Array<any>>): Map<K, V>

You can also edit this article by pressing edit button.
