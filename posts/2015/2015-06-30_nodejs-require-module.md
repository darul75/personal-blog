## Module

Understand module component loading system is quite important in NodeJS, those who tried to play with it may know what I am talking about.

How it works, what is the difference between `export`, `module.exports`.

In this thread, we will take a deep look at how node core dependency management works.

Module system in NodeJS is handle by [Module.js](https://github.com/joyent/node/blob/master/lib/module.js) file.

Description of Module API is [here](https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object), but we use it very rarely.

Main purpose of Module is to handle your code dependencies by providing a runtime context.

## Constructor

```javascript
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
}
```

one `exports` object attribute is created by default.

Note that all your dependencies only shows this `exports` Module object attribute to their parent modules. Here just an extract from Module NodeJS source code:

```javascript
// digest your module code and then return exports attr
return module.exports;
```

Here some common scenarios when creating a module (note the dot .).

```javascript
exports.myFn = function() {

}
exports.myFn2 = function() {

}
```

This fills your module `exports` object attribute.

`return module.exports` directive will return something like:

```javascript
{
  myFn : function() {

  },
  myFn2 : function() {
  
  }
}
```

Side effect:

```javascript
exports = {
  fn: function() {

  },
  fn2: function() {
      
  }
}
```

you expect `return module.exports` returning the same object shown before but it won't, you have just created a new object and module.exports still point to an empty obj {}

If you want to be be sure, just can start your module with (note the dot .)

```javascript
var exports = module.exports = {};

exports.fn = function() {

};

exports.fn2 = function() {
      
};
```

But a more convenient way to avoid this inconvenience would be

```javascript
var myStuff = 'I love Nodejs';

// OR

var myStuff = function doStuff() {

};

// OR

var myStuff = {
  doStuff: function doStuff1() {
  
  },
  doStuff1: function doStuff1() {
  
  }

};

// OR ....

module.exports = myStuff;
```

But then, what happened when we use require ?

## Require

When using require, behind the scene a module context is created and your code runs in it.

`require` function is attached to node global `object`, imagine `window` object for a browser environment. So when you type `require('something')` js prototype pattern looks for it and finds require function.

```javascript
global.require = require;
global.exports = self.exports;
```
[Global object](https://nodejs.org/api/globals.html#globals_global)

To recap when you type require, js engine retrieves global object and look for a require named function and find it :)

### Function

`require` function take a non empty string as parameter, a name, a path.

```javascript
// Loads a module at the given file path. Returns that module's
// `exports` property.
Module.prototype.require = function(path) {
  assert(path, 'missing path');
  assert(util.isString(path), 'path must be a string');
  return Module._load(path, this);
};
```

### Example
Let's take an example.

./main.js
```javascript
var dep = require('./dependency');
```

./dependency.js
```javascript
module.exports = 'I love JS';
```

### Loader routines

Module we first try to locate the file containing your code 'dependency' module.

Load function is called with 3 parameters
* request : here 'dependency'
* parent: null if root module
* isMain: main root file

Here my comments about it:

```javascript
Module._load = function(request, parent, isMain) {
  // 1> resolve filename and look for absolute path of file
  var filename = Module._resolveFilename(request, parent);
  // 2> check in cache by id and return it if found
  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }
  // 3> check if native module and compile it and return it if needed, example require('fs');
  if (NativeModule.exists(filename)) {
    // do some compil stuff
  }
  // 4> create new module with reference to parent Module
  var module = new Module(filename, parent);
  // 5> put it in cache
  Module._cache[filename] = module;
  // 6> the MOST interesting part, load module source code
  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }
  
  // 7> send exports object
  return module.exports;
}
```

### Focus

Method to look for `dependency` source code.

```javascript
Module._resolveFilename = function(request, parent) {
 // internal stuff to compute path
 return filename; // example here /mypath/myproject/dependency.js
}
```

The load function.

```javascript
Module.prototype.load = function(filename) {
...
  this.filename = filename;
  this.paths = Module._nodeModulePaths(path.dirname(filename));
  // "/mypath/myproject/node_modules"
  // "/mypath/node_modules"
  // "/node_modules"

  var extension = path.extname(filename) || '.js';
  // 1> by default only .js, .json, .node types are handled by module loader
  if (!Module._extensions[extension]) extension = '.js';
  // 2> here js extensions is used to load dependency.js
  Module._extensions[extension](this, filename);
  this.loaded = true;
};
```

Then here we go, we have filename path.

```javascript
// Native extension for .js
Module._extensions['.js'] = function(module, filename) {
  // 1> load file content of 'dependency.js'
  var content = fs.readFileSync(filename, 'utf8');
  // 2> compile it
  module._compile(stripBOM(content), filename);
};
```

Compiler routine

```javascript
Module.prototype._compile = function(content, filename) {
  // here content is a my dependency.js file in a string :
  // "module.exports = 'I love JS';"
  // filename
  // /mypath/myproject/dependency.js
  // ...
  // some stuff
  // ...
  // retrieve modules cache
  require.cache = Module._cache;
  // here come the tricky part
  // ******** IMPORTANT *********
  // create a wrapper function as string
  var wrapper = Module.wrap(content);
  // it will gives the following anonymous function
  // NOTE: it is a simple STRING
  //
  // "(function (exports, require, module, __filename, __dirname) { 
  //  module.exports = 'I love JS';
  // });"
  //
  // That is how magic happens and module exports object is fill, by a simple anonymous function wrapper
  //
  // here a call to native code with this code, imagine eval() function.
  var compiledWrapper = runInThisContext(wrapper, { filename: filename });
  // now we have a real js function, let's call it
  var args = [self.exports, require, self, filename, dirname];
  // finishing by applying above wrapper function on current module previously compiled.
  return compiledWrapper.apply(self.exports, args);
}
```

### Conclusion

- a dependency imply a module object
- a loading processus looks for you code into file
- a require call checks first in cache, otherwise load into cache.
- a compilation phase involved an anonymous function that wraps your module code with 3 main params (exports,require,module). By executing this function, `exports` Module object attribute is fill.
- at the end of loading process it returns your module `exports` attribute.

### Result

Your compiled code looks like:

./main.js
```javascript
(function (exports, require, module, __filename, __dirname) {
  var dep = require('./dependency');
});
```

./dependency.js
```javascript
(function (exports, require, module, __filename, __dirname) { 
  module.exports = 'I love JS';
});
```

You can imagine the following

./main.js
```javascript
(function (exports, require, module, __filename, __dirname) {
  ./dependency.js
  var dep = (function (exports, require, module, __filename, __dirname) { 
    return module.exports = 'I love JS';
  });
});
```

If you want to look further, write a small test and debug it.
