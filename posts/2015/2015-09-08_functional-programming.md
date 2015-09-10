# Functional programming with Javascript

Here we will cover some basics you might apply in order to make a more readable and robust Javascript code.

Solution is to apply some functional programming recipes.

# functional

Javascript can be imperative but you can think of it with a functional approach.

Functions are like other objects, and can be passed by arguments, returned or partially applied (curry..). With this approach, we try to not express code as a suite of instructions but as transformations to apply to input data. We can create complex transformations by compositions.

Function have to be "pure", meaning they can not change their external environment et must always return the same result when we apply same arguments. Variables are immutable, you may not change it in a loop by instance. Function playing with external world are specific and can not be used to replace a pure function.

Les fonctions sont toutes pures : elles ne peuvent pas modifier l'environnement extérieur à la fonction, et doivent toujours renvoyer le même résultat si on leur donne les mêmes arguments. Les variables ne sont pas modifiables, ce qui fait qu'on ne peut pas programmer de manière impérative, avec des boucles dans lesquelles on modifie des variables. Cela n'empêche pas de faire des programmes utiles, mais force juste à les exprimer différemment. Les fonctions qui interagissent avec le monde extérieur ont un type spécial, ce qui fait qu'on ne peut pas les utiliser à la place d'une fonction pure.

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
