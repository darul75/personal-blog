class Person {
  type = 'person';
  
  constructor(name) {
    this.name = name;
  }
  
  hello() {
    console.log('hello ' + this.name);
  }
  
  static fn = () => {
    console.log('static');
  };
  
}

var julien = new Person('julien');
var darul = new Person('darul');
julien.hello();
darul.hello();
Person.fn();
julien.fn();