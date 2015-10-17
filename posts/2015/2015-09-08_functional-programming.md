# Functional programming with Javascript

Here we will cover some basics you might apply in order to make a more readable and robust Javascript code.

Solution is to apply some functional programming recipes.

# functional

Javascript can be imperative but you can think of it with a functional approach.

Functions are like other objects, and can be passed by arguments, returned or partially applied (curry..). With this approach, we try to not express code as a suite of instructions but as transformations to apply to input data. We can create complex transformations by compositions.

Function have to be "pure", meaning they can not change their external environment et must always return the same result when we apply same arguments. Variables are immutable, you may not change it in a loop by instance. Function playing with external world are specific and can not be used to replace a pure function.

A side effect introduces a dependency between the global state of the system and the behaviour of a function. For example, let's step away from Haskell for a moment and think about an imperative programming language. Consider a function that reads and returns the value of a global variable. If some other code can modify that global variable, then the result of a particular application of our function depends on the current value of the global variable. The function has a side effect, even though it never modifies the variable itself. 17 comments

Side effects are essentially invisible inputs to, or outputs from, functions. In Haskell, the default is for functions to not have side effects: the result of a function depends only on the inputs that we explicitly provide. We call these functions pure; functions with side effects are impure.

Purity makes the job of understanding code easier. The behaviour of a pure function does not depend on the value of a global variable, or the contents of a database, or the state of a network connection. Pure code is inherently modular: every function is self-contained, and has a well-defined interface. 1 comment

A non-obvious consequence of purity being the default is that working with impure code becomes easier. Haskell encourages a style of programming in which we separate code that must have side effects from code that doesn't need them. In this style, impure code tends to be simple, with the “heavy lifting” performed in pure code. 2 comments

Much of the risk in software lies in talking to the outside world, be it coping with bad or missing data, or handling malicious attacks. Because Haskell's type system tells us exactly which parts of our code have side effects, we can be appropriately on our guard. Because our favoured coding style keeps impure code isolated and simple, our “attack surface” is small.

Les fonctions sont toutes pures : elles ne peuvent pas modifier l'environnement extérieur à la fonction, et doivent toujours renvoyer le même résultat si on leur donne les mêmes arguments. Les variables ne sont pas modifiables, ce qui fait qu'on ne peut pas programmer de manière impérative, avec des boucles dans lesquelles on modifie des variables. Cela n'empêche pas de faire des programmes utiles, mais force juste à les exprimer différemment. Les fonctions qui interagissent avec le monde extérieur ont un type spécial, ce qui fait qu'on ne peut pas les utiliser à la place d'une fonction pure.

Pure vs. I/O
As a way to help with understanding the differences between pure code and I/O, here's a comparison table. When we speak of pure code, we are talking about Haskell functions that always return the same result when given the same input and have no side effects. In Haskell, only the execution of I/O actions avoid these rules. 10 comments

Table 7.1. Pure vs. Impure

# First class function

variable declaration
assignment|

Functions are data, first class objects

# Pure	Impure
Always produces the same result when given the same parameters	May produce different results for the same parameters
Never has side effects	May have side effects
Never alters state	May alter the global state of the program, system, or world

# High order function

- return function
- takes function as argument


function makeAdder(first) {
  return function(second) {
    return first + second;
  }
}

example forEach(array, fn)

verbose less, focus on mechanic, increments, , mistakes... focus on result

looping, filtering

mapping items : transformation, focus on mapping mechanic, not on looping process

one liner : effective sometimes enough

Extract a property 

function prop(name) {
  return function(object) {
    return object[name];
  }
}

var getAttribute = prop("attribute");

tweets.map(getAttribute)

get your code expressive, compact code, small abstraction

reduce

# Async flow control

function(scripts) {
 var content = '';
 for (var i = 0; i < scripts.length; i++) {
  ajaxCall(scripts[i]);
 }
}

function getScript(name, cb) {
    var time = Math.random() * 1000;
    
    setTimeout(function() {cb('source for library '+name);}, time);
}

function loadScript() {
    var libraries = ["jquery", "backbone", "lodash"];
    var content = '';
    var loaded = 0;
    
    for (var i=0;i<libraries.length;i++) {
        getScript(libraries[i], function(library) {
            console.log(library);
            content += library;
            if (loaded === libraries.length-1) {
                console.log(content);
            }
            loaded++;
        });
    }
}

function getScriptWithIndex(name, idx, cb) {
    var time = Math.random() * 1000;
    
    setTimeout(function() {cb(name, idx);}, time);
}

function loadScriptWithIndex() {
    var libraries = ["jquery", "backbone", "lodash"];
    var loaded = 0;
    var content = [];
    
    for (var i=0;i<libraries.length;i++) {
        getScriptWithIndex(libraries[i], i, function(library, i) {
            console.log(i + ' ' + library);
            content[i] = library;
            if (loaded === libraries.length-1) {
                console.log(content);
            }
            loaded++;
        });
    }
}


loadScript();
loadScriptWithIndex();




browser is single threaded

fetch 3 scripts and combine them

# Partial function application

func("toString")

Will take a function, some params and return a new function wrapper

=> DSL 

Do not need to create functions every time you need it

# Composability

Which operations are we doing, write it first

map()
map()
map()


refactor it with names functions for each operation and then compose it

var fn1 = ..
var fn2 = ..
var fn3 = ..

composition from right to left

compose([fn1, fn2, fn3]);

fn1(fn2(fn3)))


# Polymorphism

Here, a is the type variable. We can read the signature as “takes a list, all of whose elements have some type a, and returns a value of the same type a”. 3 comments

[Tip]	Identifying a type variable
Type variables always start with a lowercase letter. You can always tell a type variable from a normal variable by context, because the languages of types and functions are separate: type variables live in type signatures, and regular variables live in normal expressions. No comments

It's common Haskell practice to keep the names of type variables very short. One letter is overwhelmingly common; longer names show up infrequently. Type signatures are usually brief; we gain more in readability by keeping names short than we would by making them descriptive. 14 comments

When a function has type variables in its signature, indicating that some of its arguments can be of any type, we call the function polymorphic. 4 comments

When we want to apply last to, say, a list of Char, the compiler substitutes Char for each a throughout the type signature, which gives us the type of last with an input of [Char] as [Char] -> Char. 5 comments

This kind of polymorphism is called parametric polymorphism. The choice of naming is easy to understand by analogy: just as a function can have parameters that we can later bind to real values, a Haskell type can have parameters that we can later bind to other types. No comments

[Tip]	A little nomenclature
If a type contains type parameters, we say that it is a parameterised type, or a polymorphic type. If a function or value's type contains type parameters, we call it polymorphic. 10 comments

When we see a parameterised type, we've already noted that the code doesn't care what the actual type is. However, we can make a stronger statement: it has no way to find out what the real type is, or to manipulate a value of that type. It can't create a value; neither can it inspect one. All it can do is treat it as a fully abstract “black box”. We'll cover one reason that this is important soon. 4 comments

Parametric polymorphism is the most visible kind of polymorphism that Haskell supports. Haskell's parametric polymorphism directly influenced the design of the generic facilities of the Java and C# languages. A parameterised type in Haskell is similar to a type variable in Java generics. C++ templates also bear a resemblance to parametric polymorphism. 15 comments

To make it clearer how Haskell's polymorphism differs from other languages, here are a few forms of polymorphism that are common in other languages, but not present in Haskell. No comments

In mainstream object oriented languages, subtype polymorphism is more widespread than parametric polymorphism. The subclassing mechanisms of C++ and Java give them subtype polymorphism. A base class defines a set of behaviours that its subclasses can modify and extend. Since Haskell isn't an object oriented language, it doesn't provide subtype polymorphism. 6 comments

Also common is coercion polymorphism, which allows a value of one type to be implicitly converted into a value of another type. Many languages provide some form of coercion polymorphism: one example is automatic conversion between integers and floating point numbers. Haskell deliberately avoids even this kind of simple automatic coercion. 3 comments

This is not the whole story of polymorphism in Haskell: we'll return to the subject in Chapter 6, Using Typeclasses. 2 comments


# The type of a function of more than one argument

So far, we haven't looked much at signatures for functions that take more than one argument. We've already used a few such functions; let's look at the signature of one, take. 2 comments

ghci> :type take
take :: Int -> [a] -> [a]
1 comment
It's pretty clear that there's something going on with an Int and some lists, but why are there two -> symbols in the signature? Haskell groups this chain of arrows from right to left; that is, -> is right-associative. If we introduce parentheses, we can make it clearer how this type signature is interpreted. 3 comments

-- file: ch02/Take.hs
take :: Int -> ([a] -> [a])
5 comments
From this, it looks like we ought to read the type signature as a function that takes one argument, an Int, and returns another function. That other function also takes one argument, a list, and returns a list of the same type as its result. 6 comments

# curry

prepare you recipe and apply it to ingredients.

"You can call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments."

https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch4.md

# composition

var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md

# Pointfree

# Containers

In this example, we are logically branching our control flow depending on the validity of the birth date, yet it reads as one linear motion from right to left rather than climbing through the curly braces of a conditional statement.

# Conventions

Variable naming in patterns
As you read functions that match on lists, you'll frequently find that the names of the variables inside a pattern resemble (x:xs) or (d:ds). This is a popular naming convention. The idea is that the name xs has an “s” on the end of its name as if it's the “plural” of x, because x contains the head of the list, and xs the remaining elements
