Mozilla documentation is the best but here I share some of new es6 sugar syntaxes features you may know or not :)

To my opinion it really gives a less verbose and intuitive code if we all embrace es6.

I also share some tips from very nice Dan Abramov redux [tutorial](https://egghead.io/instructors/dan-abramov)

## Arrow function

```javascript
function double(value) {
	return value << 1;
}
```

becomes

```javascript
const double = (value) => {
	return value << 1;
}

// or because of just a single instruction
double = (value) => value << 1;
```

## Default parameter value

```javascript
function double(value) {
	value = value || 1;
	return value << 1;
}
```

becomes

```javascript
const double = (value = 1) => {
	return value << 1;
};

console.log(double());  // 2
console.log(double(3)); // 6
```

## Rest parameter

Arguments parameter object is an old story now, welcome to new world, not a real Array, slice conversion etc...forget it.

```javascript
const play = (...args) => {
  // !!! arguments has never been an array...
  //arguments.push('not possible');

  // this is possible now
  args.push(4); [1, 2, 3, 4]
  console.log(args);
};

play(1,2,3);
```

## Spread operator

Apply, call methods must be an old story for you too now, we live in 2015(6) hey !

```javascript
function myFunction(x, y, z) {
  var t = [x,y,z];
  console.log(t); // [0, 1, 2]
}
var args = [0, 1, 2];
myFunction(...args);
```

Or with array spread operator

```javascript
var ages = [18,19,20];

function myFunction(x, y, z) {
  var t = [x,y,z, ...ages];
  console.log(t); // [0, 1, 2, 18, 19, 20]
}
var args = [0, 1, 2];
myFunction(...args);
```

Another exemple of refactoring with the use of slice and concat methods.


```javascript
var list = [1, 2, 3, 4];

// let remove third index with an immutable approach, we want new array and not modifying existing one.

list = list.slice(0, 2).concat(list.slice(3));

console.log(list); // [1, 2, 4]
```

well, it is nice but es6 is your friend now.


```javascript
var list = [1, 2, 3, 4];

list = [...list.slice(0, 2), ...list.slice(3)];

console.log(list); // [1, 2, 4]
```

also note that with this spread operator, you can insert whatever you want inside the new array.

```javascript
list = ['before', ...list.slice(0, 2), 'middle', ...list.slice(3), 'after'];
```

## Object assign

Avoiding mutating object is one of the key to avoid side effect in your application. Idea behind is whatever you may change on an object, property, method...please after modifying it, not just return it but return a new object instead.

```javascript
const upperCaseName = (person) => {
  return {
    name : person.name.toUpperCase(),
    age : person.age,
    sex : 'F', //
  };
}
```

But as you can see it is painless and we may forget some fields too.

One solution is to use Object.assign() es6 method [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

```javascript
const upperCaseName = (person) => {
  return Object.assign({}, person, {
    name : person.name.toUpperCase()
  });
}
```

NOTE: it looks like you may use in future this spread solution too :)

```javascript
const upperCaseName = (person) => {
  return {
    ...person,
    name : person.name.toUpperCase()
  };
}
```

## Shorthand Properties and Methods

Before

```javascript
var person = function(name, age) {
  return {
    name: name,
    age: age,
    sayMyDetails: function() {
      console.log('my name is ' + this.name + ' and I am ' + this.age);
    }
  };
};

var p = person('julien', 36);
p.sayMyDetails(); // my name is julien
```

Yes, but very verbose, look at this way of doing instead

```javascript
const person = (name, age) => {
  return {
    name,
    age,
    sayMyDetails() {
      console.log('my name is ' + this.name + ' and I am ' + this.age);
    }
  };
};

const julien = person('julien', 36);
julien.sayMyDetails();

```

## Destructuring import

```javascript
var module = require('module');

const myFunc = module.myFunc;

// call my module function
....
myFunc();
```

becomes

```javascript
import {myFunc} from 'module';
....
myFunc();
```

## React component as a function

```javascript
const Text = ({name, children}) => <p>{children} {name}</p>;

const Julien = {name: julien, age: 36};

ReactDOM.render(document.body, <Text {...Julien}>Hello World</Text>);

//Hello world julien
```

Play with react here [also](https://jsfiddle.net/darul75/7j4ggkqh/)

## Advanced

Redux exposes a reducer composition method and here I propose to recap how it works briefly.

A reducer most of the time manage a state object represented by an array of objects.

```javascript
(state = [], action) {
  // - handle action type
  // - return new state
  return state;
}
```

But in many cases, you will need a more appropriate object for your application state.

Also you may decide to split your logic into many reducers instead of only one, here comes composition.

```javascript
(state = {}, action) {

  return state;
}
```

Example:

We want to manage a shopping basket state with 2 main data exposed in 2 fields 'basket' and 'current' :

```javascript
{
  'basket': [], // list of selected items
  'current': {} // current visited item
}
```

Redux actions would be:

- ADD_TO_BASKET / REMOVE_FROM_BASKET
- SET_CURRENT / UNSET_CURRENT

We may have 2 reducers methods and want to combine it into one reducer:

```javascript
const basket = (state = [], action) => {
  console.log('basket reducer');
};

const current = (state = {}, action) => {
  console.log('current reducer');
}

// idea is to create a reducer this way now
const reducer = {
  basket: basket,
  current: current
}
```

problem is this reducer has really not the good signature, is not a function...

here is a solution

```javascript
const reducerCombinator = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {}
    );
  };
};

```

And that is why you may need many reducers instead of only one.

Fiddle for this article [here](http://www.es6fiddle.net/ii60qbhg/)