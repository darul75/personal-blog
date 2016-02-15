Mozilla documentation is the best but here I share some of new es6 sugar syntaxes features you may know or not :) To my opinion it really gives a less verbose and intuitive code if we all embrace es6.

I also share a small cover of very intuitive [Dan Abramov](https://github.com/gaearon) redux [tutorial](https://egghead.io/instructors/dan-abramov). When [Flux](https://facebook.github.io/flux/) appeared, I choosed [Alt](https://github.com/goatslacker/alt) implementation, many utils were into the box as store listening component, action listeners...it is really a great tool.

Then redux is born and so many were enthousiasts about it, I had to test it too.

## ES6

Here some of the best changes we need to know. Most of them you may know and me too but read it again is always useful, and a lot are missing there....

Best online javascript ES6 book according to me is [here](https://leanpub.com/understandinges6/read)

### Arrow function

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
```

{ } can be removed

```javascript
// because of just a single statement
const double = (value) => value << 1;
```

() can be removed

```javascript
// because of just a single parameter
const double = value => value << 1;
```

### Default parameter value

We often see that type of notation in our code.

```javascript
function double(value) {
	value = value || 1;
	return value << 1;
}
```

The Logical OR || operator will return its second operand if the first one is falsy.

Falsy values are: 0, null, undefined, the empty string (""), NaN, and of course false.

Indeed, if we coerce this kind of value to boolean with (!!) operator we got.

```javascript
!!0 === false
!!null === false
!!undefined === false
// ....
!!0 === !!null === !!undefined == !!'' === !!NaN === !!false
```

so previous example with es6 becomes

```javascript
const double = (value = 1) => {
	return value << 1;
};

console.log(double());  // 2
console.log(double(3)); // 6
```

### Rest parameter

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

### Spread operator

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

// let remove third index with an immutable approach,
// we want new array and not modifying existing one.

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

### Object assign

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

### Shorthand Properties and Methods

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

### Destructuring import

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

## React

### Recap

[ReactElement](https://facebook.github.io/react/docs/glossary.html#react-elements) ReactElement is not DOM element. It *describes* DOM element but it's not a native object at all. It's a regular JS object that happens to describe a DOM element.

[ReactComponent](https://facebook.github.io/react/docs/glossary.html#react-components) gives abilitity to create encapsulations with embedded state. They can be written as functions, or classes (React.Component).

### React component as a function

[Functional components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) is a technical distinction. You can put anything in a functional component, including behavior. It is up to you.

Facebook introduced it to facilitate creation of stateless component.

```javascript
const Text = ({name, onClick, children}) => <p onClick={onClick}>{children} {name}</p>;

const someProps = {
  name: julien,
  age: 36,
  onClick: () => {
    console.log('click');
  }
};

ReactDOM.render(document.body, <Text {...someProps}>Hello World</Text>);

//Hello world julien
```

As you can see, no declarative render() method here, you do not need it explicitly, React will render it for you.

Best practice is to avoid using Component classes and replace it with functional component instead when you can :)

### Containers and Presentation components

According to Dan

"
'Presentational' components is not a real term. It's just a convention I'm using. There's no such thing in React as a "presentational component"—it's just how I like to call components with no behavior. They *happen* to be convenient to describe using functional components, but these two terms are not equivalent at all.

A presentational component technically can be written as a class, and a container component can be written as a function. So be careful not to equate "presentational" with "functional" even though most components you see in my course are both.'

Container component are on top of you presentation only containers, your logic and behaviour is expressed there.

You may create them when you feel a presentation component has too much to do, extract it a container component to load your data and express behaviour.

Only a container component might need to be sticked to your flux store, meaning they will subscribe to your store updates and will be responsible to re render sub components when necessary.

Container component roles could be summarized by:

- read data from store
- subscribe to the store
- dispatch actions on the store

### Passing via Prop vs Passing via Context

After a bunch of refactoring, your component code would certainly need to pass down to the tree many properties, and it is quite annoying to see such property repeated. A solution exists to propagate a property with the use of a specific container and childContext method.

In redux tutorial, Dan is giving an example where a lot of your component need a reference to the store.

```javascript
const {createStore} = Redux;

const reducer = (state = [], action) => {};

const MyApp = ({store}) => {
  <div>
    <Component store={store} />
    <Component store={store} />
    <Component store={store} />
  </div>
}

ReactDom.render(
    <MyApp store={createStore(reducer)},
    document.getElementById('root')
)
```

That is quite annoying, why not delegate this a wrapper component with use of [context](https://facebook.github.io/react/docs/context.html):

```javascript
const {createStore} = Redux;

// responsible to put store in context
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    // just render whatever you pass to it
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const MyApp = ({store}) => {
  <Provider store={store}>
    <Component />
    <Component />
    <Component />
  </div>
}

ReactDom.render(
    <Provider store={createStore(reducer)}>
      <MyApp>
    </Provider>,
    document.getElementById('root')
)
```

Provider is available in ReactRedux library, do not reinvent the wheel.

```javascript
const { Provider } = ReactRedux;
// import { Provider } from 'react-redux';
....
```

### Advanced "pattern"

Redux exposes a reducer composition method and here I propose to recap how it works briefly.

In your application you may deal with reducers managing plain objects most of the time.

Also you may decide to split your logic into many reducers instead of only one, here comes composition.

```javascript
(state = {}, action) {
  return state;
}
```

*Example*

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
  // state.basket.pushPull()...
};

const current = (state = {}, action) => {
  console.log('current reducer');
  // state.current.SetUnsetItem()...
}

// idea is to create a "dual" reducer this way now
const reducer = {
  basket: basket,
  current: current
}

// later a call to reduce createStore
// createStore(reducer);
```

Ok but normaly a reducer is a function waiting for a state and action parameters...and you show me plain object, your are kidding me ?
problem is this reducer has really not the good signature, is not a function...but just a plain JS object.

Here is proposal Dan solution, create a function taking an object and generating a reducer function.

When called, it will

- iterate over object properties
- pass state object to each of reducer function via reduce passing state to each of reducer
- well done I would say, nice idea

See [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) API

```javascript
const reducerCombinator = (reducers) => {
  // we return a function
  return (state = {}, action) => {
    // that iterate over our object and apply reduce on it
    return Object.keys(reducers).reduce(
      // apply each object property function "basket()"/"current()"/....
      // that modify state
      // that will be passed as previousValue for the next reduce
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {}
    );
  };
};

```

Thank you Dan for helping me on rewriting some parts of this article.

ES Fiddle [here](http://www.es6fiddle.net/ii60qbhg/)

React Fiddle [here](https://jsfiddle.net/darul75/7j4ggkqh/)

----------

Tags: *ES6* *Javascript* *React*
