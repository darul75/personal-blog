An attempt to explain what is an Higher-Order Component, why it is useful, why it is simple.

You may think first at Higher Order Function and you are right, it comes from Functional Programming concept where I am not expert :) and is a great alternative to the use of Mixins in the world of React.

## Mixins

Before exploring what is an higher-order component (HOC), let's recap what are mixins.

Usage of mixins allows to extend a target object with some new properties or behaviours.

A popular mixin would be a logger :)

```javascript
// mixin
const Logger = {
  debug(msg) {
    console.log(msg);
  },
  error(err) {
    console.log(err);
  }
};

// and why not another useful one
const AnotherMixin = {
  do() {
  }
};
```

Then developer team writes a scheduler service and need to use our logger mixin service.

```javascript
class Scheduler {
  constructor(startDate) {
    if (startDate == null) {
      // logger call
      this.onError(new Error('startDate has to be defined'));
      return Object.create(null);
    }
    this.startDate = startDate;
  }

  start() {
    // logger call
    this.debug('start');
  }

  onError(err) {
    // logger call
    this.error(err);
  }
}
```

See how we apply mixin on our service.

```javascript
Object.assign(Scheduler.prototype, Logger);
Object.assign(Scheduler.prototype, AnotherMixin);

new Scheduler(new Date()).start();
new Scheduler(new Date()).start();
console.log(new Scheduler(new Date()));
new Scheduler().start();
```

JSFiddle is [here](http://www.es6fiddle.net/ij1ldc1u/)

Here I just give a trivial example, but you could take a look for more details here:

[ref1](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript)
[ref2](http://raganwald.com/2014/04/10/mixins-forwarding-delegation.html)
[ref3](http://raganwald.com/2015/06/17/functional-mixins.html)


## React mixin

React [mixins](https://facebook.github.io/react/docs/reusable-components.html#mixins) gave us a way to enhance a component by sharing some common functionnalities with a guaranty that all of the component lifecycle methods would be called.

But, by reading that kind of [article](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.5nifnaw58) that covers all aspects of mixins, you will understand why you should *avoid* using it today.

You may also notice that warnings exist on Facebook React pages about [mixin support](https://facebook.github.io/react/docs/reusable-components.html#no-mixins)...in future distributions.

## Higher-order component

Ok but what is an HOC ?

**"A higher-order component is just a function that takes an existing component and returns another component that wraps it."**

When you hear about HOC, think about **Composition**.

Idea behind is to encapsulate our component and give it functionality we want, like with mixin but by using composition instead.

## Code pattern

By looking at following [gist](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) by Sebastian Markbåge you may notice that what we need to do is just create a function that takes a component and return a component (wrapping input component), that is all.

```javascript
const HOC = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
  }
  // do whatever you may want
  render() {
    // pass new properties to wrapped component
    return <Component {...this.props} {...this.state} />
  }
};
```

Note that **returned component extends React.Component** and does not inherits from passed component.

## React Mixin Refactoring Example

Let's try to refactor Facebook [mixin](https://facebook.github.io/react/docs/reusable-components.html#mixins) example here with an High Order Component.

### Original mixin solution

```javascript
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});
```

JSFiddle for this mixin is [here](https://jsfiddle.net/darul75/1wzph748/)

### HOC solution

All logic will be set into an HOC and wrapped component will be reduced to presentation only.

High order component would store a state, trigger state changes by applying custom function on it before.

In facebook example, our component do some stuff and repeat it on 'regular' interval and this custom logic will be passed as argument to our HOC.

```javascript
// Component : the one to be wrapped
// state : initial state of our component
// intervalFn : arbitrary function modifying state

const HOC = (Component, state, intervalFn) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  componentDidMount() {
    this.setInterval(this.tick.bind(this), 1000);
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  tick() {
    this.setState(intervalFn(this.state));
  }

  render() {
    return <Component {...this.props} {...this.state} />
  }
};
```

Our tiny wrapped presentation component.

```javascript
class TickTock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p>
          React has been running for {this.props.seconds} seconds.
        </p>
    );
  }
}

TickTock.propTypes = {
  seconds: React.PropTypes.number.isRequired,
}
```

Now let's see how we can glue all this together.

First if you remember, our HOC factory function expect 3 arguments:

1) component to be wrapped "TickTock"

2) an arbitrary state object

```javascript
const state = {
  seconds: 0
};
```

3) an arbitraty function modifying this state object

```javascript
const intervalFn = (state) => {
  return {seconds: state.seconds + 1};
};
```

Final main result function could be

```javascript
const intervalFn = (state) => {
  return {seconds: state.seconds + 1};
};

const Wrapped = HOC(TickTock, { seconds: 0 }, intervalFn);
const Wrapped2 = HOC(TickTock, { seconds: 3 }, intervalFn);
const Wrapped3 = HOC(TickTock, { seconds: 6 }, intervalFn);

ReactDOM.render(
  <div>
    <Wrapped />
    <Wrapped2 />
    <Wrapped3 />
  </div>,
  document.getElementById('container')
);
```

JSFiddle for this demo is [here](https://jsfiddle.net/darul75/hwn8rn1r/)

## Conclusion

HOC is an alternative to mixins that only rely on component composition.

![Just for fun](/images/posts/higher.jpg)
