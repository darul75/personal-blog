// http://stackoverflow.com/questions/10265832/determine-npm-modules-used-from-a-running-node-js-application

//var npm = require('npm');

/*npm.load(function(err, npm) {
    npm.commands.ls([], true, function(err, data, lite) {
        console.log(data); //or lite for simplified output
    });
});*/

function dataBuilder(t) {
  return {
    name: t[2],
    path: t[4],
    fns : []
  };
}

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var resourcePath = this.resourcePath;

  console.log('--------resource --------')
  console.log(resourcePath);
  if (/node_modules/.test(resourcePath)) {
    return this.callback(null, source, map);
  }

  var prependTxt,
      appendTxt,
      separator = '\n\n';

  var requirePattern = /(var\s*)(\w+)* = require\(("|\')([\w+|\.|\/]*)("|\')(\)\;)/g;
  //var functionCallPattern = /(nameFunction[(\w\,\s)]+)/;
  var src = source.replace(/\r?\n|\r/g, ' ');
  var requiresData = [];
  var requires;
  var fns;

  while (requires = requirePattern.exec(src), requires != null) {
    var data = dataBuilder(requires);
    if (['path', 'express', 'http'].indexOf(data.name) >= 0) {
      continue;
    }
    var reg = "(" + data.name + "\\.[(\"\'\\w\,\\s)]+)";
    var nameFunction = new RegExp(reg, 'g');
    while (fns = nameFunction.exec(src), fns != null) {
      data.fns.push(fns[0]);
    }

    requiresData.push(data);
  }

  console.log(requiresData);

  var depsString = '[';

  requiresData.forEach(function(elt, idx) {
    depsString += '"' + elt.path + '"';
    if (idx < requiresData.length-1) {
      depsString += ','
    }
  });

  depsString += ']';

  var hotCall = '';

  requiresData.forEach(function(elt) {
    hotCall += elt.name + ' = require("' + elt.path + '");\n';
    elt.fns.forEach(function(elt2) {
      hotCall += elt2 + ';\n';
    });
  });

   prependText = [
    '/* TEST */',
    'if (module.hot) {\n\t',
      '\tmodule.hot.dispose(function(data){\n\t',
          'data.msg = "hot hot";\n\t',
      '});\n\t',
      // accept itself
      /*'if (module.parent == null) {\n\t',
        '\tmodule.hot.accept(function(e){\n\t',
          hotCall,
        '});\n\t',
      '} else {\n\t',*/
        'module.hot.accept('+ depsString +', function() {\n\t',
          'console.log(module.hot.data);\n\t',
          hotCall,
        '});\n',
      /*'}\n',*/
    '}'
  ].join(' ');

  appendText = [
    '/* TEST */',
  ].join(' ');

  var newContent = [
      prependText,
      source,
      appendText
    ].join(separator);

  console.log(newContent);

  return newContent;
  //return this.callback(null, newContent);
}
