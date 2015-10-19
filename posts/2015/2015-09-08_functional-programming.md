# Functional programming with Javascript

Here we will cover some basics you might apply in order to make a more readable and robust Javascript code.

Solution is to apply some functional programming recipes.

I write this article after having read some good explanation about why functional programming is extremely effective.

You work in a team, you work with 1,2,3 developpers in your team, but what if we are 50, 100 more, code starts to be very dense, not clear, a lot of line of codes...we need to clarify it -> think functional.

# Intro

"Functions are like other objects, and can be passed by arguments, returned or partially applied (curry..). With this approach, we try to not express code as a suite of instructions but as transformations to apply to input data. We can create complex transformations by compositions.

Function have to be "pure", meaning they can not change their external environment and must always return the same result when we apply same arguments. Variables are immutable, you may not change it in a loop by instance. Function playing with external world are specific and can not be used to replace a pure function.

A side effect introduces a dependency between the global state of the system and the behaviour of a function. Consider a function that reads and returns the value of a global variable. If some other code can modify that global variable, then the result of a particular application of our function depends on the current value of the global variable. The function has a side effect, even though it never modifies the variable itself.

Purity makes the job of understanding code easier. The behaviour of a pure function does not depend on the value of a global variable, or the contents of a database, or the state of a network connection."

# First class function

In javascript function are called first class function, they can be assign to variable, they are data, first class objects.

```javascript
function hello(name) {
  console.log('hello' + name);
}
```

```javascript
var hello = function(name) {
  console.log('hello' + name);
}

var helloJulien = hello('julien');

helloJulien(); // hello julien
```

# High order function

You can resume it in 2 lines if a function match one of these 2 requirements:

- return function

```javascript
function pow(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  }
}

var powOf2 = pow(2);
var powOf3 = pow(3);

console.log(powOf2(2)); // 4
console.log(powOf2(4)); // 16
console.log(powOf3(2)); // 8
console.log(powOf3(4)); // 64
```

- takes function as argument

```javascript
var someNums = [1,2,3,4];
// builtin map javascript function is a good example of high order function
console.log(someNums.map(powOf2)); // [ 1, 4, 9, 16 ]
// builtin forEach 
var iteratee = function(elt) {
    console.log(powOf2(elt));
}
someNums.forEach(iteratee);
// 1
// 4
// 9
// 16
```

As you can see, we loop on an array but we do not really care about how to loop.

```javascript
for (var i=0; ....)
```

We focus on result and transformation we expect, not on mechanism behind (here looping), make things expressive is the goal.

# One liner example

In functional programming, I think we can achieve big things by putting small things together, and in this case one line of code can be enough and less verbose.

```javascript
var names = ['bob', 'john', 'keith'];

var namesUpper = names.map(function (name) { return name.toUpperCase(); } );

console.log(namesUpper); // ["BOB", "JOHN", "KEITH"]
```

# Pure function

Our goal is to apply the following rules:

- Always produces the same result when given the same parameters
- Never has side effects.
- Never alters state of the global state of the program, system, or world.

```javascript
// impure
var pattern = /hello/; // check wether contains 'hello'

var containsHello = function(name) {
  return name.search(pattern) >= 0;
};

// pure
var containsHello = function(name) {
  var pattern = /hello/; // check wether contains 'hello'
  return name.search(pattern) >= 0;
};
```

Why is it useful to write pure function :

- avoid side effects
- they are by definition cacheable : see memoization
- testable as we do not need to worry about external system world state
- parallelizable

# Imperative vs functional

## Example 1

This scenario consist of computing sum of squared numbers for a given list.

### Imperative

```javascript
var someNums = [1,2,3,4];
var result = 0;
for (var i = 0; i < someNums.length; i++) {
  var currentValue = someNums[i];
  result += currentValue * currentValue;
}
console.log(result); // 30
```

Ok but then even if it look nice, why not refactor it in more functional way.

### Functional

```javascript
// one line enough
var add = function(first, second) { return first + second; }

var reduceSumSquareFunction = function(prev, current) {
  return add(prev, powOf2(current); // powOf2 see before for code
};

// builtin reduce function
var result = someNums.reduce(reduceSumSquareFunction);

console.log(result); // 30
```

## Example 2

Another example with data.

```javascript
var planets = [{name: 'mercure', radius: 2440},
{name: 'venus', radius: 6052},
{name: 'earth', radius: 6378},
{name: 'mars', radius: 3397},
{name: 'jupiter', radius: 71492},
{name: 'saturn', radius: 58232},
{name: 'uranus', radius: 25362},
{name: 'neptune', radius: 24622 }]
```

Imagine we want to extract all couple name/radius, wrap it into some html paragraph elements also wrapped in a div html element.

```html
<div>
  <p>Venus radius is 6052</p>
  <p>Earth radius is 6378</p>
  <p>Mars radius is 3397</p>
  <p>Jupiter radius is 71492</p>
  ...
</div>
```

* Steps *

- build div html element
- iterate over data elements and for each
  - extract name
  - capitalize name
  - extract radius
  - build paragraph html element
  - append it to div html element

### Imperative

```javascript
var div = document.createElement('div');
for (var i = 0; i < planets.length; i++) {
  // extract props
  var name = planets[i].name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  var radius = planets[i].radius;
  
  // create html
  var p = document.createElement('p');
  p.innerHTML = name + ' radius is: ' + radius;
  div.appendChild(p);
}
console.log(div);
```

### Functional

Your swiss knife is made of arbitrary custom functions you create or by using some library existing functions, from lodash, ramda or other great functional frameworks.

Let's create some utilities function.

```javascript
// 1) Function to extract any props from an object
var prop = function(name) {
  return function(object) {
    return object[name];
  }
}

// 2) Function to capitalize a string
var cap = function(s) {
  return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

// 3) A DSL factory to build html components.
var HtmlFactory = function() {
  this.elt = {};
  return {
    create : function(tagName) {
      this.elt = document.createElement(tagName);
      return this;
    },
    addChild : function(child) {
      this.elt.appendChild(child);
      return this;
    },
    setProp : function(prop, value) {
      this.elt[prop] = value;
      return this;
    },
    getElement : function() {
      return this.elt;
    }
  };
}
```

It can looks as a lot of code compared to imperative version, but later you will not write it again and again, but just call it when necessary.

Let's see how your main code could look.

```javascript
// 1) prepare functions to extract name and radius
var getName = prop('name');
var getRadius = prop('radius');

// 2) prepare function to build a paragraph inner text
var buildText = function(elt) {
  return cap(getName(elt)) + ' radius is: ' + getRadius(elt);
}

// 3) prepare function to build a  paragraph
var buildParagraphElt = function(value) {
  return new HtmlFactory().create('p').setProp('innerHTML', value).getElement();
};

// finally do the job

// build main div element
var divElt = new HtmlFactory().create('div');
// map over items and build paragraphs html elts
var createParagraphsElts = planets.map(buildText).map(buildParagraphElt);
// finally append it to div
createParagraphsElts.forEach(divElt.addChild, divElt);

console.log(divElt.getElement()); // job is done
```

Ok that is fine but we made 2 loops by calling map/map....it is fine for few elements but not the best idea we got.

# Composition

Add an util function to our swiss knife.

```javascript
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  }
}
```

Let's rewrite our previous code.

```javascript
var divElt = new HtmlFactory().create('div');

var buildParagraph = compose(buildParagraphElt, buildText);
// map over items and build paragraphs html elts
var createParagraphsElts = planets.map(buildParagraph);
// finally append it to div
createParagraphsElts.forEach(divElt.addChild, divElt);

console.log(divElt.getElement()); // job is done
```

# Partial function application

Also called currying, we have seen it before, you call a function with fewer arguments expected and it returns you a function that take the remaining arguments.

Do not need to create functions every time you need it, get your code expressive, compact code, small abstraction.

```javascript
// create a simple curry function
function add(base) {
  return function(num) {
    return base + num;
  }
}

var add2 = add(2);
// check
console.log(add2(8)); // 10 ok we are right
```








