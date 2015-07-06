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

E - Element
K - Key
N - Number
T - Type
V - Value


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

Then Immutable embrace ES6 with Classes, Arrow Functions and Modules so it won't help you to read documentation if you do not know anything about it.

But I am nice, I give you some details :)

Arrow Function sample extracted from Immutable documentation:

```javascript
// ES6
foo.map(x => x * x);
// ES3
foo.map(function (x) { return x * x; });
```

Ok, but let's see this Immutable Map method:

```javascript
update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>
```

OMG, do not worry, diffibult part to read is the parameter in parenthesis.

```javascript
(updater: (value: Map<K, V>) => Map<K, V>)
```





You can also edit this article by pressing edit button.
