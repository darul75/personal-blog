// Constructor
function Person(name) {
  this.type = 'Person';
  this.name = name;
}

// Instance method
Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// Static method attached to class and not instances
Person.fn = function() {
  console.log('static');
};

var julien = new Person('julien');
var darul = new Person('darul');
julien.hello(); // hello julien
darul.hello(); // hello darul
A.fn();
a.fn();