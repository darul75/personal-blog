Migration to Babel 6 was ... not so easy and I just share few configuration details you may use in order to use last ES6 features.

## Presets and Plugins

Babel is now bundled with presets and plugins.

Each preset includes a set of plugins you may want to use.

Each plugin is dedicated to an ES6 feature (arrow function, class....) and defines a transformation process to be applied. 

You include either a set of plugins , or select them one by one.

## Npm installation

Babel document is intuitive about that and for instance if you want to install **[es2015](http://babeljs.io/docs/plugins/preset-es2015/)** preset, or a specific **[arrow-functions](http://babeljs.io/docs/plugins/transform-es2015-arrow-functions/)** plugin:

```bash
// preset example
npm install babel-preset-es2015
// plugin example
npm install babel-plugin-transform-es2015-arrow-functions
```

A complete dependency and package.json may look like

```javascript
{
  "devDependencies": {
    "babel-core": "^6.3.26",
    "babel-eslint": "^5.0.0-beta6",
    "babel-loader": "^6.2.0",
    "babel-plugin-transform-class-properties": "^6.4.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-plugin-transform-es2015-arrow-functions": "^6.3.13",
    "babel-plugin-transform-es2015-classes": "^6.3.15",
    "babel-plugin-transform-es2015-destructuring": "^6.3.15",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.3.16",
    "babel-plugin-transform-es2015-object-super": "^6.3.13",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-preset-stage-0": "^6.3.13",
    "babel-runtime": "^6.3.19"
}
```

Not usage of **[babel-loader](https://github.com/babel/babel-loader)** for Webpack and **[babel-eslint](https://github.com/babel/babel-eslint)** for nice linting.

It is also convenient to create a .babelrc file at root of you project:

```javascript
{
  "presets": ["react", "es2015", "stage-0"],
  "plugins": [
    "transform-es2015-arrow-functions",
    "transform-es2015-classes",
    "transform-es2015-destructuring",
    "transform-es2015-modules-commonjs",
    "transform-es2015-object-super",
    "transform-class-properties",
    "transform-decorators-legacy"
  ]
}
```

## Webpack usage

I have choosen to pass loader options as query string and here is my configuration.

But you can also find documentation about babel-loader [here](https://github.com/babel/babel-loader#options) or with more [details](https://github.com/webpack/loader-utils)

Extract of my webpack configuration

```javascript
module: {
    loaders: [{
      test: /\.js?$/, 
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties'], 
      exclude: /(node_modules|__tests__)/ 
  }
}
```

I faced problems with **decorators** current implementation and as you can see in the meantime I use this transformer implementation [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Conclusion

Babel 6 is really modular and looks fine :)

![Just for fun](/images/posts/babel.jpg)