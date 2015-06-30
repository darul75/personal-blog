Module system in NodeJS is handle by Module.js file.

[Module](https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object)

module.exports is created by default by the Module system.

So what happened when we use require.

`require` function is attached to node global `object`, imagine window for browser.

https://nodejs.org/api/globals.html#globals_global

so when you type require, js engine retrieve global object and look for a require named function and find it :)

require function take a non empty string as parameter, or path or...we will see later.

```javascript
// Loads a module at the given file path. Returns that module's
// `exports` property.
Module.prototype.require = function(path) {
  assert(path, 'missing path');
  assert(util.isString(path), 'path must be a string');
  return Module._load(path, this);
};
```

first step is to look up for target source file of dependency, let's take an example:

./main.js
```javascript
var d = require('myModule');
```

./myModule.js
```javascript
module.export = 'I love JS';
```

Module we first try to locate file containing code for our module myModule.

A load function is called with 3 parameters
* request : here 'myModule'
* parent: current module, default one if in your main root file

```javascript
Module._load = function(request, parent, isMain) {
  // 1) resolve filename and look for absolute path of file
  var filename = Module._resolveFilename(request, parent);
  // 2) check in cache by id and return it if found
  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }
  // 3) check if native module and compile it and return it if needed, example require('fs');
    if (NativeModule.exists(filename)) {
      // do some compil stuff
    }
  }
  // 4) create new module with reference to parent Module
  var module = new Module(filename, parent);
  // 5) put it in cache
  Module._cache[filename] = module;
  // 6) the most interesting part, load module source code
  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }
  return module.exports;
}
```

Module._resolveFilename = function(request, parent) {
 // internal stuff to compute path
 return filename; // example here /mypath/myproject/lib/myModule.js
}

Module.prototype.load = function(filename) {
  debug('load ' + JSON.stringify(filename) +
        ' for module ' + JSON.stringify(this.id));

  assert(!this.loaded);
  this.filename = filename;
  this.paths = Module._nodeModulePaths(path.dirname(filename));
  
  "C:\JUL\DEV\github\personal-blog\node_modules"
1: "C:\JUL\DEV\github\node_modules"
2: "C:\JUL\DEV\node_modules"
3: "C:\JUL\node_modules"
4: "C:\node_modules"

  var extension = path.extname(filename) || '.js';
  // by default only .js, .json, .node
  if (!Module._extensions[extension]) extension = '.js';
  Module._extensions[extension](this, filename);
  this.loaded = true;
};

// Native extension for .js
Module._extensions['.js'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  module._compile(stripBOM(content), filename);
};

// Run the file contents in the correct scope or sandbox. Expose
// the correct helper variables (require, module, exports) to
// the file.
// Returns exception, if any.
Module.prototype._compile = function(content, filename) {
  // "module.exports = "It works from content.js.";"
  // filename C:\JUL\DEV\github\personal-blog\dep.js"
  // some stuff
  // ...
  // retrieve modules cache
  require.cache = Module._cache;
  // here come the tricky part
  // create wrapper function
  var wrapper = Module.wrap(content);
    "(function (exports, require, module, __filename, __dirname) { module.exports = "It works from content.js.";
  });"
  // anonymous function
  // here a call to native code with this code
  var compiledWrapper = runInThisContext(wrapper, { filename: filename });
  // now we have a real js function
  var args = [self.exports, require, self, filename, dirname];
  return compiledWrapper.apply(self.exports, args);
}
  
(function (exports, require, module, __filename, __dirname) { var webpack = require('webpack');

require('./dep');

/*webpack(
	{
	    entry: "./dep.js",
	    output: {
	        path: __dirname,
	        filename: "bundle.js"
	    }
	}, function() {
    	console.log('ok')
});*/

});

(function (exports, require, module, __filename, __dirname) { module.exports = "It works from content.js.";
});
