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
