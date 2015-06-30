## Module

Understand Module behaviour is quite important with NodeJS, those who tried to play with it know what I am speaking about.

How it works, what is the difference between `export`, `module.exports`.

In this thread, we will take a deep look at how it is working node core dependency management.

Module system in NodeJS is handle by [Module.js](https://github.com/joyent/node/blob/master/lib/module.js) file.

Description of Module API is here, but we use it very rarely.

[Module](https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object)

Main purpose of Module is to handle dependencies.

## Constructor

```javascript
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
}
module.exports = Module;
```

So what happened when we use require ?

## Require

When using require, behind the scene a module context is created and your code runs in it.

`require` function is attached to node global `object`, imagine `window` object for a browser environment. So when you type `require('something')` js prototype pattern look for it and find require function.

```javascript
global.require = require;
global.exports = self.exports;
```
[Global object](https://nodejs.org/api/globals.html#globals_global)

so when you type require, js engine retrieve global object and look for a require named function and find it :)

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
var d = require('./dependency');
```

./dependency.js
```javascript
module.exports = 'I love JS';
```

### Loader routines

Module we first try to locate file containing code for our module myModule.

A load function is called with 3 parameters
* request : here 'myModule'
* parent: null if root module
* isMain: main root file

A load function does all this stuff for us.

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

Where is my dependency, in above example `dependency`

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
  // here content is a my module.js file in a string :
  // "module.exports = "It works from content.js.";"
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
  //
  // "(function (exports, require, module, __filename, __dirname) { 
  //  module.exports = "It works from content.js."; 
  // });"
  //
  // here a call to native code with this code, imagine eval() function.
  var compiledWrapper = runInThisContext(wrapper, { filename: filename });
  // now we have a real js function
  var args = [self.exports, require, self, filename, dirname];
  return compiledWrapper.apply(self.exports, args);
}
```

### Result

Your executed code looks like:

./main.js
```javascript
(function (exports, require, module, __filename, __dirname) {
  var dep = require('./dependency');
});
```

./dependency.js
```javascript
(function (exports, require, module, __filename, __dirname) { 
  module.exports = "It works from content.js.";
});
```
