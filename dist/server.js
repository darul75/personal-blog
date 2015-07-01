module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// NODE
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _http = __webpack_require__(5);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _path = __webpack_require__(3);
	
	var _path2 = _interopRequireDefault(_path);
	
	// EXPRESS
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serveFavicon = __webpack_require__(2);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	// Profile dev or production
	var profile = process.env.DEV ? 'dev' : 'prod',
	    publicPath = profile === 'dev' ? 'build' : 'dist';
	
	var app = (0, _express2['default'])();
	
	app.set('port', process.env.PORT || 3000);
	app.use(_express2['default']['static'](publicPath));
	app.use((0, _serveFavicon2['default'])(_path2['default'].join(__dirname, '../app/images/favicon.ico')));
	
	//
	// Register middlewares
	// --------------------
	
	// renderer
	var renderer = __webpack_require__(6);
	// apis
	var apiRoutes = __webpack_require__(55);
	
	//
	// Configure middlewares
	// --------------------
	renderer.init(profile);
	
	//
	// Activate middlewares
	// --------------------
	app.use(apiRoutes);
	app.use(renderer.render);
	
	_http2['default'].createServer(app).listen(app.get('port'), function () {
	  console.log('Express server listening on port ' + app.get('port'));
	});
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  // accept update of dependency
	  module.hot.accept(['./routes/api', './routes/renderer'], function () {
	    apiRoutes = require('./routes/api');
	    app.use(apiRoutes);
	    renderer = require('./routes/renderer');
	    renderer.init('dev');
	  });
	}

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var renderer = __webpack_require__(7);
	
	var profile = 'dev';
	
	var routesRenderer = {
	  init: function init(type) {
	    profile = type;
	    renderer.init(type);
	  },
	  render: function render(req, res, next) {
	    renderer.render(req, res, next);
	  }
	};
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  module.hot.accept(['../utils/renderer'], function () {
	    renderer = require('../utils/renderer');
	    renderer.init(profile);
	  });
	}
	
	exports['default'] = routesRenderer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// NODE
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _fs = __webpack_require__(12);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	// EXTERNALS
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _iso = __webpack_require__(11);
	
	var _iso2 = _interopRequireDefault(_iso);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	// CORE
	
	var _appRoutes = __webpack_require__(14);
	
	var _appRoutes2 = _interopRequireDefault(_appRoutes);
	
	var _appAlt = __webpack_require__(19);
	
	var _appAlt2 = _interopRequireDefault(_appAlt);
	
	var html = '';
	
	var renderer = {
	  init: function init(type) {
	    html = type === 'dev' ? _fs2['default'].readFileSync('./assets/index-dev.html', { encoding: 'utf8' }) : _fs2['default'].readFileSync('./dist/index-prod.html', { encoding: 'utf8' });
	  },
	  render: function render(req, res, next) {
	    var markup = '',
	        iso = new _iso2['default']();
	
	    var oneItemBootstraped = {
	      'AppStore': {
	        'dataByRestApi': {},
	        'data': {
	          'iaqpor7p': {
	            'id': 'iaqpor7p',
	            'complete': false,
	            'text': 'fsfsdf'
	          }
	        }
	      }
	    };
	
	    /* This is where the magic happens, we take the locals data we have already
	    fetched and seed our stores with data.
	    Next we use react-router to run the URL that is provided in routes.jsx
	    Finally we use iso in order to render this content so it picks back up
	    on the client side and bootstraps the stores.
	    init server renderer
	    */
	    _appAlt2['default'].bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));
	
	    try {
	      _reactRouter2['default'].run(_appRoutes2['default'], req.path, function (Handler, state) {
	        // alt flux flush
	        var content = _react2['default'].renderToString(_react2['default'].createElement(Handler));
	        iso.add(content, _appAlt2['default'].flush());
	
	        res.contentType = 'text/html; charset=utf8';
	        var notFound = _lodash2['default'].find(state.routes, { isNotFound: true });
	
	        if (notFound !== undefined) {
	          res.status(404);
	        }
	
	        // RENDERING back to client
	        var markupContent = iso.render();
	        // DOM <head> instrumentation
	        var head = _reactHelmet2['default'].rewind();
	        markup = html.replace('META', head.meta).replace('TITLE', head.title).replace('LINK', head.link).replace('CONTENT', markupContent);
	        // SEND response
	        res.send(markup);
	      });
	    } catch (e) {
	      return next(e);
	    }
	  }
	};
	
	exports['default'] = renderer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("iso");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	/*eslint-disable no-unused-vars*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*eslint-enable no-unused-vars*/
	
	var _reactRouter = __webpack_require__(13);
	
	// COMPONENT
	
	var _componentsAppApp = __webpack_require__(15);
	
	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);
	
	var _componentsContactSectionContact = __webpack_require__(44);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(45);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(54);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsPostPostItem = __webpack_require__(46);
	
	var _componentsPostPostItem2 = _interopRequireDefault(_componentsPostPostItem);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'app', path: '/', handler: _componentsAppApp2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/home', handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'contact', path: '/contact', handler: _componentsContactSectionContact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'post', path: '/post/:postId', handler: _componentsPostPostItem2['default'] }),
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _componentsNotFoundSectionNotFoundSection2['default'] })
	);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	// COMPONENT
	
	var _HeaderHeader = __webpack_require__(16);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	var _FooterFooter = __webpack_require__(37);
	
	var _FooterFooter2 = _interopRequireDefault(_FooterFooter);
	
	var _DocumentHtmlHeaderTags = __webpack_require__(40);
	
	var _DocumentHtmlHeaderTags2 = _interopRequireDefault(_DocumentHtmlHeaderTags);
	
	if (process.env.BROWSER) {
	  //require('../../../node_modules/github-markdown-css/github-markdown.css');
	  __webpack_require__(41);
	  __webpack_require__(43);
	}
	
	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(App, _React$Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_DocumentHtmlHeaderTags2['default'], null),
	        _react2['default'].createElement(_HeaderHeader2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'main-content' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        ),
	        _react2['default'].createElement(_FooterFooter2['default'], null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	
	App.prototype.displayName = 'App';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	// COMPONENT
	
	var _HeaderMenu = __webpack_require__(17);
	
	var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);
	
	if (process.env.BROWSER) {
	  __webpack_require__(34);
	}
	
	var logo = __webpack_require__(36);
	
	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Header, _React$Component);
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	
	      var logoStyle = {
	        backgroundImage: 'url(' + logo + ')'
	      };
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'header' },
	        _react2['default'].createElement(_HeaderMenu2['default'], null),
	        _react2['default'].createElement(
	          'header',
	          { id: 'user' },
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'app' },
	            _react2['default'].createElement('figure', { id: 'user-logo', style: logoStyle })
	          ),
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'JULIEN VALERY'
	          ),
	          _react2['default'].createElement(
	            'h3',
	            null,
	            'darul75'
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { id: 'user-links' },
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'a',
	                { className: 'buttonize tiny', href: 'https://twitter.com/darul75', target: '_blank' },
	                '@darul75'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'a',
	                { className: 'buttonize tiny', href: 'mailto:darul75@gmail.com?subject=blog' },
	                'say hi'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	
	Header.prototype.displayName = 'Header';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	// FLUX
	
	var _storesAppStore = __webpack_require__(18);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _altUtilsConnectToStores = __webpack_require__(28);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	if (process.env.BROWSER) {
	  __webpack_require__(30);
	}
	
	var headerMenu = (function (_React$Component) {
	  function HeaderMenu() {
	    _classCallCheck(this, HeaderMenu);
	
	    _get(Object.getPrototypeOf(HeaderMenu.prototype), 'constructor', this).call(this);
	    this.state = { show: false };
	  }
	
	  _inherits(HeaderMenu, _React$Component);
	
	  _createClass(HeaderMenu, [{
	    key: 'render',
	    value: function render() {
	      var menuBtnClass = !this.state.show ? 'c-hamburger c-hamburger--rot' : 'c-hamburger c-hamburger--rot c-hamburger--htx is-active';
	      var menuClass = !this.state.show ? '' : 'overlord_active';
	      var posts = HeaderMenu.getPropsFromStores().posts;
	      var postLinks = [];
	      for (var key in posts) {
	        var post = posts[key];
	        var postPermalink = '/post/' + post.permalink;
	        postLinks.push(_react2['default'].createElement(
	          'li',
	          { key: key },
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: postPermalink },
	            post.title
	          )
	        ));
	      }
	
	      return _react2['default'].createElement(
	        'nav',
	        { id: 'overlord', className: menuClass, onMouseLeave: this._onMouseLeave.bind(this) },
	        _react2['default'].createElement(
	          'button',
	          { className: menuBtnClass, onClick: this._onClick.bind(this) },
	          _react2['default'].createElement(
	            'span',
	            null,
	            'toggle menu'
	          )
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { id: 'dropdown', className: 'onblog' },
	          postLinks
	        )
	      );
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      this.setState({ show: !this.state.show });
	    }
	  }, {
	    key: '_onMouseLeave',
	    value: function _onMouseLeave() {
	      this.setState({ show: false });
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [_storesAppStore2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        posts: _storesAppStore2['default'].getState().posts
	      };
	    }
	  }]);
	
	  return HeaderMenu;
	})(_react2['default'].Component);
	
	headerMenu.prototype.displayName = 'HeaderMenu';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(headerMenu);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HeaderMenu.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// FLUX
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _actionsAppActions = __webpack_require__(22);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(19);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(21);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var appStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (function () {
	  function AppStore() {
	    _classCallCheck(this, AppStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.posts = [];
	    this.packagejson = __webpack_require__(23);
	    this.config = __webpack_require__(24);
	    this.init();
	  }
	
	  _createClass(AppStore, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      // http://webpack.github.io/docs/context.html
	      var markupFilesReq = __webpack_require__(25);
	      var markupFilesKeys = markupFilesReq.keys();
	
	      var extractMeta = function extractMeta(elt) {
	        var meta = {};
	        var dateMatches = elt.match(/(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/);
	        if (dateMatches) {
	          meta.date = dateMatches[0];
	        }
	
	        meta.filename = elt.substring(2, elt.length);
	        meta.permalink = elt.substring(2, elt.indexOf('.md')).toLowerCase();
	        meta.title = elt.substring(elt.indexOf('_') + 1, elt.indexOf('.md')).replace(/\-/g, ' ');
	
	        return meta;
	      };
	
	      markupFilesKeys.forEach(function (elt) {
	        var html = markupFilesReq(elt);
	        var metas = extractMeta(elt);
	        var post = {
	          body: html,
	          date: metas.date,
	          filename: metas.filename,
	          permalink: metas.permalink,
	          title: metas.title
	        };
	        _this.posts.push(post);
	      });
	
	      this.posts.reverse();
	    }
	  }]);
	
	  return AppStore;
	})(), 'AppStore');
	
	module.exports = appStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(20);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// create alt instance
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function makeHot(alt, Store) {
	  var name = arguments[2] === undefined ? Store.displayName : arguments[2];
	  return (function () {
	    if (false) {
	      module.hot.dispose(function () {
	        delete alt.stores[name];
	      });
	    }
	
	    return alt.createStore(Store, name);
	  })();
	}
	
	exports["default"] = makeHot;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(19);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions();
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
		"name": "personal-blog",
		"description": "",
		"version": "0.0.1",
		"homepage": "https://github.com/darul75/personal-blog",
		"repository": {
			"type": "git",
			"url": "https://github.com/darul75/personal-blog.git"
		},
		"scripts": {
			"dev": "webpack --config conf/webpack-dev.js | webpack-dev-server --port 8080 --config conf/webpack-dev.js --hot --history-api-fallback --progress --colors --inline --content-base ./build",
			"dev-server-client": "./node_modules/.bin/webpack --progress --watch --config conf/webpack-dev-server.js | ./node_modules/.bin/webpack-dev-server --port 8081 --config conf/webpack-dev-server.js --hot --history-api-fallback --progress --colors --inline --content-base ./build",
			"dev-server": "node build/server.js",
			"dev-server-debug": "node-debug --debug-brk build/server.js --debug --source-maps",
			"build": "webpack --config conf/webpack-prod.js --progress --profile --colors",
			"start": "node dist/server.js",
			"test": "./node_modules/.bin/mocha app/**/*-test.js --colors --compilers js:babel/register --recursive"
		},
		"devDependencies": {
			"babel-core": "^5.1.11",
			"babel-eslint": "^3.1.1",
			"babel-loader": "^5.1.4",
			"babel-runtime": "^5.1.11",
			"clean-webpack-plugin": "^0.1.2",
			"css-loader": "^0.10.1",
			"eslint": "^0.20.0",
			"eslint-loader": "^0.11.2",
			"eslint-plugin-react": "^2.2.0",
			"extract-text-webpack-plugin": "^0.6.0",
			"file-loader": "^0.8.1",
			"html-loader": "^0.3.0",
			"html-webpack-plugin": "^1.2.0",
			"jsdom": "^2.0.0",
			"json-loader": "^0.5.2",
			"jsx-loader": "^0.13.2",
			"markdown-loader": "^0.1.3",
			"mocha": "^2.1.0",
			"node-sass": "^3.1.2",
			"react-hot-loader": "^1.2.7",
			"sass-loader": "1.0.2",
			"style-loader": "^0.10.2",
			"url-loader": "^0.5.5",
			"webpack": "^1.9.10",
			"webpack-dev-server": "^1.8.2"
		},
		"dependencies": {
			"alt": "^0.16.10",
			"babel": "^5.1.11",
			"classnames": "^2.1.1",
			"express": "^4.12.3",
			"iso": "^4.1.0",
			"lodash": "^3.9.3",
			"marked": "^0.3.3",
			"node-fetch": "^1.2.1",
			"object-assign": "^2.0.0",
			"prismjs": "0.0.1",
			"react": "^0.13.2",
			"react-helmet": "^1.1.0",
			"serve-favicon": "^2.2.1",
			"react-router": "^0.13.2",
			"whatwg-fetch": "^0.8.1"
		},
		"keywords": [
			"react",
			"flux",
			"isomorphic",
			"webpack",
			"kit",
			"express",
			"node",
			"blog"
		],
		"license": "MIT"
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
		"helmet": {
			"title": "Darul blog",
			"meta": [
				{
					"name": "description",
					"content": "Julien Valéry blog: fullstack stuffs, NodeJS, AngularJS, React, MongoDB... about me or what else."
				},
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				}
			],
			"link": [
				{
					"rel": "shortcut icon",
					"href": "/favicon.ico",
					"type": "image/x-icon"
				},
				{
					"rel": "icon",
					"href": "/favicon.ico",
					"type": "image/x-icon"
				},
				{
					"href": "http://fonts.googleapis.com/css?family=Raleway",
					"rel": "stylesheet",
					"type": "text/css"
				}
			]
		}
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./2015-06-28_my-blog.md": 26,
		"./2015-06-30_nodejs-require-module.md": 27
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 25;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"welcome\">Welcome</h2>\n<p>Hi, my name is Julien, I live in Paris, France and code for a while with a passion for web technologies but also data, visualization...</p>\n<p>On this blog, I will try to share with you my interest and some examples, tutorials or stories.</p>\n<pre><code class=\"line-numbers language-javascript\">alert(&#39;hello world&#39;);\n</code></pre>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"module\">Module</h2>\n<p>Understand module component loading system is quite important in NodeJS, those who tried to play with it may know what I am talking about.</p>\n<p>How it works, what is the difference between <code>export</code>, <code>module.exports</code>.</p>\n<p>In this thread, we will take a deep look at how node core dependency management works.</p>\n<p>Module system in NodeJS is handle by <a href=\"https://github.com/joyent/node/blob/master/lib/module.js\">Module.js</a> file.</p>\n<p>Description of Module API is <a href=\"https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object\">here</a>, but we use it very rarely.</p>\n<p>Main purpose of Module is to handle your code dependencies by providing a runtime context.</p>\n<h2 id=\"constructor\">Constructor</h2>\n<pre><code class=\"line-numbers language-javascript\">function Module(id, parent) {\n  this.id = id;\n  this.exports = {};\n  this.parent = parent;\n}\n</code></pre>\n<p>one <code>exports</code> object attribute is created by default.</p>\n<p>Note that all your dependencies only shows this <code>exports</code> Module object attribute to their parent modules. Here just an extract from Module NodeJS source code:</p>\n<pre><code class=\"line-numbers language-javascript\">// digest your module code and then return exports attr\nreturn module.exports;\n</code></pre>\n<p>Here some common scenarios when creating a module (note the dot .).</p>\n<pre><code class=\"line-numbers language-javascript\">exports.myFn = function() {\n\n}\nexports.myFn2 = function() {\n\n}\n</code></pre>\n<p>This fills your module <code>exports</code> object attribute.</p>\n<p><code>return module.exports</code> directive will return something like:</p>\n<pre><code class=\"line-numbers language-javascript\">{\n  myFn : function() {\n\n  },\n  myFn2 : function() {\n\n  }\n}\n</code></pre>\n<p>Side effect:</p>\n<pre><code class=\"line-numbers language-javascript\">exports = {\n  fn: function() {\n\n  },\n  fn2: function() {\n\n  }\n}\n</code></pre>\n<p>you expect <code>return module.exports</code> returning the same object shown before but it won&#39;t, you have just created a new object and module.exports still point to an empty obj {}</p>\n<p>If you want to be be sure, just can start your module with (note the dot .)</p>\n<pre><code class=\"line-numbers language-javascript\">var exports = module.exports = {};\n\nexports.fn = function() {\n\n};\n\nexports.fn2 = function() {\n\n};\n</code></pre>\n<p>But a more convenient way to avoid this inconvenience would be</p>\n<pre><code class=\"line-numbers language-javascript\">var myStuff = &#39;I love Nodejs&#39;;\n\n// OR\n\nvar myStuff = function doStuff() {\n\n};\n\n// OR\n\nvar myStuff = {\n  doStuff: function doStuff1() {\n\n  },\n  doStuff1: function doStuff1() {\n\n  }\n\n};\n\n// OR ....\n\nmodule.exports = myStuff;\n</code></pre>\n<p>But then, what happened when we use require ?</p>\n<h2 id=\"require\">Require</h2>\n<p>When using require, behind the scene a module context is created and your code runs in it.</p>\n<p><code>require</code> function is attached to node global <code>object</code>, imagine <code>window</code> object for a browser environment. So when you type <code>require(&#39;something&#39;)</code> js prototype pattern looks for it and finds require function.</p>\n<pre><code class=\"line-numbers language-javascript\">global.require = require;\nglobal.exports = self.exports;\n</code></pre>\n<p><a href=\"https://nodejs.org/api/globals.html#globals_global\">Global object</a></p>\n<p>To recap when you type require, js engine retrieves global object and look for a require named function and find it :)</p>\n<h3 id=\"function\">Function</h3>\n<p><code>require</code> function take a non empty string as parameter, a name, a path.</p>\n<pre><code class=\"line-numbers language-javascript\">// Loads a module at the given file path. Returns that module&#39;s\n// `exports` property.\nModule.prototype.require = function(path) {\n  assert(path, &#39;missing path&#39;);\n  assert(util.isString(path), &#39;path must be a string&#39;);\n  return Module._load(path, this);\n};\n</code></pre>\n<h3 id=\"example\">Example</h3>\n<p>Let&#39;s take an example.</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">var dep = require(&#39;./dependency&#39;);\n</code></pre>\n<p>./dependency.js</p>\n<pre><code class=\"line-numbers language-javascript\">module.exports = &#39;I love JS&#39;;\n</code></pre>\n<h3 id=\"loader-routines\">Loader routines</h3>\n<p>Module we first try to locate the file containing your code &#39;dependency&#39; module.</p>\n<p>Load function is called with 3 parameters</p>\n<ul>\n<li>request : here &#39;dependency&#39;</li>\n<li>parent: null if root module</li>\n<li>isMain: main root file</li>\n</ul>\n<p>Here my comments about it:</p>\n<pre><code class=\"line-numbers language-javascript\">Module._load = function(request, parent, isMain) {\n  // 1&gt; resolve filename and look for absolute path of file\n  var filename = Module._resolveFilename(request, parent);\n  // 2&gt; check in cache by id and return it if found\n  var cachedModule = Module._cache[filename];\n  if (cachedModule) {\n    return cachedModule.exports;\n  }\n  // 3&gt; check if native module and compile it and return it if needed, example require(&#39;fs&#39;);\n  if (NativeModule.exists(filename)) {\n    // do some compil stuff\n  }\n  // 4&gt; create new module with reference to parent Module\n  var module = new Module(filename, parent);\n  // 5&gt; put it in cache\n  Module._cache[filename] = module;\n  // 6&gt; the MOST interesting part, load module source code\n  try {\n    module.load(filename);\n    hadException = false;\n  } finally {\n    if (hadException) {\n      delete Module._cache[filename];\n    }\n  }\n\n  // 7&gt; send exports object\n  return module.exports;\n}\n</code></pre>\n<h3 id=\"focus\">Focus</h3>\n<p>Method to look for <code>dependency</code> source code.</p>\n<pre><code class=\"line-numbers language-javascript\">Module._resolveFilename = function(request, parent) {\n // internal stuff to compute path\n return filename; // example here /mypath/myproject/dependency.js\n}\n</code></pre>\n<p>The load function.</p>\n<pre><code class=\"line-numbers language-javascript\">Module.prototype.load = function(filename) {\n...\n  this.filename = filename;\n  this.paths = Module._nodeModulePaths(path.dirname(filename));\n  // &quot;/mypath/myproject/node_modules&quot;\n  // &quot;/mypath/node_modules&quot;\n  // &quot;/node_modules&quot;\n\n  var extension = path.extname(filename) || &#39;.js&#39;;\n  // 1&gt; by default only .js, .json, .node types are handled by module loader\n  if (!Module._extensions[extension]) extension = &#39;.js&#39;;\n  // 2&gt; here js extensions is used to load dependency.js\n  Module._extensions[extension](this, filename);\n  this.loaded = true;\n};\n</code></pre>\n<p>Then here we go, we have filename path.</p>\n<pre><code class=\"line-numbers language-javascript\">// Native extension for .js\nModule._extensions[&#39;.js&#39;] = function(module, filename) {\n  // 1&gt; load file content of &#39;dependency.js&#39;\n  var content = fs.readFileSync(filename, &#39;utf8&#39;);\n  // 2&gt; compile it\n  module._compile(stripBOM(content), filename);\n};\n</code></pre>\n<p>Compiler routine</p>\n<pre><code class=\"line-numbers language-javascript\">Module.prototype._compile = function(content, filename) {\n  // here content is a my dependency.js file in a string :\n  // &quot;module.exports = &#39;I love JS&#39;;&quot;\n  // filename\n  // /mypath/myproject/dependency.js\n  // ...\n  // some stuff\n  // ...\n  // retrieve modules cache\n  require.cache = Module._cache;\n  // here come the tricky part\n  // ******** IMPORTANT *********\n  // create a wrapper function as string\n  var wrapper = Module.wrap(content);\n  // it will gives the following anonymous function\n  // NOTE: it is a simple STRING\n  //\n  // &quot;(function (exports, require, module, __filename, __dirname) { \n  //  module.exports = &#39;I love JS&#39;;\n  // });&quot;\n  //\n  // That is how magic happens and module exports object is fill, by a simple anonymous function wrapper\n  //\n  // here a call to native code with this code, imagine eval() function.\n  var compiledWrapper = runInThisContext(wrapper, { filename: filename });\n  // now we have a real js function, let&#39;s call it\n  var args = [self.exports, require, self, filename, dirname];\n  // finishing by applying above wrapper function on current module previously compiled.\n  return compiledWrapper.apply(self.exports, args);\n}\n</code></pre>\n<h3 id=\"conclusion\">Conclusion</h3>\n<ul>\n<li>a dependency imply a module object</li>\n<li>a loading processus looks for you code into file</li>\n<li>a require call checks first in cache, otherwise load into cache.</li>\n<li>a compilation phase involved an anonymous function that wraps your module code with 3 main params (exports,require,module). By executing this function, <code>exports</code> Module object attribute is fill.</li>\n<li>at the end of loading process it returns your module <code>exports</code> attribute.</li>\n</ul>\n<h3 id=\"result\">Result</h3>\n<p>Your compiled code looks like:</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) {\n  var dep = require(&#39;./dependency&#39;);\n});\n</code></pre>\n<p>./dependency.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) { \n  module.exports = &#39;I love JS&#39;;\n});\n</code></pre>\n<p>You can imagine the following</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) {\n  ./dependency.js\n  var dep = (function (exports, require, module, __filename, __dirname) { \n    return module.exports = &#39;I love JS&#39;;\n  });\n});\n</code></pre>\n<p>If you want to look further, write a small test and debug it.</p>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 'Higher Order Component' that controls the props of a wrapped
	 * component via stores.
	 *
	 * Expects the Component to have two static methods:
	 *   - getStores(): Should return an array of stores.
	 *   - getPropsFromStores(props): Should return the props from the stores.
	 *
	 * Example using old React.createClass() style:
	 *
	 *    const MyComponent = React.createClass({
	 *      statics: {
	 *        getStores(props) {
	 *          return [myStore]
	 *        },
	 *        getPropsFromStores(props) {
	 *          return myStore.getState()
	 *        }
	 *      },
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    })
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 *
	 * Example using ES6 Class:
	 *
	 *    class MyComponent extends React.Component {
	 *      static getStores(props) {
	 *        return [myStore]
	 *      }
	 *      static getPropsFromStores(props) {
	 *        return myStore.getState()
	 *      }
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    }
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 * A great explanation of the merits of higher order components can be found at
	 * http://bit.ly/1abPkrP
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functions = __webpack_require__(29);
	
	function connectToStores(Component) {
	  // Check for required static methods.
	  if (!(0, _functions.isFunction)(Component.getStores)) {
	    throw new Error('connectToStores() expects the wrapped component to have a static getStores() method');
	  }
	  if (!(0, _functions.isFunction)(Component.getPropsFromStores)) {
	    throw new Error('connectToStores() expects the wrapped component to have a static getPropsFromStores() method');
	  }
	
	  // Wrapper Component.
	  var StoreConnection = _react2['default'].createClass({
	    displayName: 'StoreConnection',
	
	    getInitialState: function getInitialState() {
	      return Component.getPropsFromStores(this.props, this.context);
	    },
	
	    componentDidMount: function componentDidMount() {
	      var _this = this;
	
	      var stores = Component.getStores(this.props, this.context);
	      stores.forEach(function (store) {
	        store.listen(_this.onChange);
	      });
	      if (Component.componentDidConnect) {
	        Component.componentDidConnect(this.props, this.context);
	      }
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	      var _this2 = this;
	
	      var stores = Component.getStores(this.props, this.context);
	      stores.forEach(function (store) {
	        store.unlisten(_this2.onChange);
	      });
	    },
	
	    onChange: function onChange() {
	      this.setState(Component.getPropsFromStores(this.props, this.context));
	    },
	
	    render: function render() {
	      return _react2['default'].createElement(Component, (0, _functions.assign)({}, this.props, this.state));
	    }
	  });
	
	  return StoreConnection;
	}
	
	exports['default'] = connectToStores;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.eachObject = eachObject;
	exports.assign = assign;
	var isFunction = function isFunction(x) {
	  return typeof x === 'function';
	};
	
	exports.isFunction = isFunction;
	
	function eachObject(f, o) {
	  o.forEach(function (from) {
	    Object.keys(Object(from)).forEach(function (key) {
	      f(key, from[key]);
	    });
	  });
	}
	
	function assign(target) {
	  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    source[_key - 1] = arguments[_key];
	  }
	
	  eachObject(function (key, value) {
	    return target[key] = value;
	  }, source);
	  return target;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HeaderMenu.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HeaderMenu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "/* -----------------------------------------------------------------------------\n\n  HAMBURGER ICONS COMPONENT\n\n----------------------------------------------------------------------------- */\n/**\n * Toggle Switch Globals\n *\n * All switches should take on the class `c-hamburger` as well as their\n * variant that will give them unique properties. This class is an overview\n * class that acts as a reset for all versions of the icon.\n */\n.c-hamburger {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n  display: block;\n  z-index: 50;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  font-size: 0;\n  text-indent: -9999px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  transition: background 0.3s; }\n\n.c-hamburger.edition {\n  border-radius: 25%; }\n\n.c-hamburger:focus {\n  outline: none; }\n\n.c-hamburger span {\n  display: block;\n  position: absolute;\n  top: 13px;\n  left: 5px;\n  right: 5px;\n  height: 2px;\n  background: white; }\n\n.c-hamburger span::before,\n.c-hamburger span::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #fff;\n  content: \"\"; }\n\n.c-hamburger span::before {\n  top: -5px; }\n\n.c-hamburger span::after {\n  bottom: -5px; }\n\n/**\n * Style 1\n *\n * Rotating hamburger icon (rot), that simply rotates 90 degrees when activated.\n * Nothing too fancy, simple transition.\n */\n.c-hamburger--rot {\n  background-color: #474E3C;\n  z-index: 101; }\n\n.c-hamburger--rot span {\n  transition: transform 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--rot.is-active {\n  background-color: #131410; }\n\n.c-hamburger--rot.is-active span {\n  transform: rotate(90deg); }\n\n/**\n * Style 2\n *\n * Hamburger to \"x\" (htx). Takes on a hamburger shape, bars slide\n * down to center and transform into an \"x\".\n */\n.c-hamburger--htx {\n  background-color: #7DC0DE; }\n\n.c-hamburger--htx span {\n  transition: background 0s 0.3s; }\n\n.c-hamburger--htx span::before,\n.c-hamburger--htx span::after {\n  transition-duration: 0.3s, 0.3s;\n  transition-delay: 0.3s, 0s; }\n\n.c-hamburger--htx span::before {\n  transition-property: top, transform; }\n\n.c-hamburger--htx span::after {\n  transition-property: bottom, transform; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htx.is-active {\n  background-color: #cccccc; }\n\n.c-hamburger--htx.is-active span {\n  background: none; }\n\n.c-hamburger--htx.is-active span::before {\n  top: 0;\n  transform: rotate(45deg); }\n\n.c-hamburger--htx.is-active span::after {\n  bottom: 0;\n  transform: rotate(-45deg); }\n\n.c-hamburger--htx.is-active span::before,\n.c-hamburger--htx.is-active span::after {\n  transition-delay: 0s, 0.3s; }\n\n/**\n * Style 3\n *\n * Hamburger to left-arrow (htla). Hamburger menu transforms to a left-pointing\n * arrow. Usually indicates an off canvas menu sliding in from left that\n * will be close on re-click of the icon.\n */\n.c-hamburger--htla {\n  background-color: #32dc64; }\n\n.c-hamburger--htla span {\n  transition: transform 0.3s; }\n\n.c-hamburger--htla span::before {\n  transform-origin: top right;\n  transition: transform 0.3s, width 0.3s, top 0.3s; }\n\n.c-hamburger--htla span::after {\n  transform-origin: bottom right;\n  transition: transform 0.3s, width 0.3s, bottom 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htla.is-active {\n  background-color: #18903b; }\n\n.c-hamburger--htla.is-active span {\n  transform: rotate(180deg); }\n\n.c-hamburger--htla.is-active span::before,\n.c-hamburger--htla.is-active span::after {\n  width: 50%; }\n\n.c-hamburger--htla.is-active span::before {\n  top: 0;\n  transform: translateX(11px) translateY(1px) rotate(45deg); }\n\n.c-hamburger--htla.is-active span::after {\n  bottom: 0;\n  transform: translateX(11px) translateY(-1px) rotate(-45deg); }\n\n/**\n * Style 4\n *\n * Hamburger to right-arrow (htra). Hamburger menu transforms to a\n * right-pointing arrow. Usually indicates an off canvas menu sliding in from\n * right that will be close on re-click of the icon.\n */\n.c-hamburger--htra {\n  background-color: #ff9650; }\n\n.c-hamburger--htra span {\n  transition: transform 0.3s; }\n\n.c-hamburger--htra span::before {\n  transform-origin: top left;\n  transition: transform 0.3s, width 0.3s, top 0.3s; }\n\n.c-hamburger--htra span::after {\n  transform-origin: bottom left;\n  transition: transform 0.3s, width 0.3s, bottom 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htra.is-active {\n  background-color: #e95d00; }\n\n.c-hamburger--htra.is-active span {\n  transform: rotate(180deg); }\n\n.c-hamburger--htra.is-active span::before,\n.c-hamburger--htra.is-active span::after {\n  width: 50%; }\n\n.c-hamburger--htra.is-active span::before {\n  top: 0;\n  transform: translateX(-2px) translateY(1px) rotate(-45deg); }\n\n.c-hamburger--htra.is-active span::after {\n  bottom: 0;\n  transform: translateX(-2px) translateY(-1px) rotate(45deg); }\n\nnav#overlord ul#dropdown {\n  transform: translate3d(350px, 0, 0);\n  -moz-transform: translate3d(350px, 0, 0);\n  -webkit-transform: translate3d(350px, 0, 0);\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  text-align: right;\n  display: none;\n  list-style-type: none;\n  background-color: #001220;\n  border-left: 2px solid #EBB649;\n  padding-right: 30px;\n  padding-top: 70px;\n  padding-left: 10px;\n  z-index: 100;\n  margin-right: 0px;\n  max-width: 300px;\n  display: block;\n  transition-property: all;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1);\n  -webkit-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  -moz-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  -o-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055); }\n\nnav#overlord ul#dropdown li a {\n  font-size: 20px;\n  line-height: 35px;\n  font-weight: 300;\n  color: #F2EFEF;\n  display: block;\n  padding-left: 30px;\n  transition-property: all;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82); }\n\nnav#overlord ul#dropdown li a.logoize:hover {\n  color: #F2EFEF;\n  font-weight: 900; }\n\nnav#overlord ul#dropdown li.spacer {\n  margin-top: 25px; }\n\nnav#overlord ul#dropdown li a:hover {\n  color: #AAA6A6;\n  font-weight: 500; }\n\nnav#overlord.overlord_active ul#dropdown {\n  display: block;\n  margin-right: 0px;\n  transform: translate3d(0px, 0, 0);\n  -moz-transform: translate3d(0px, 0, 0);\n  -webkit-transform: translate3d(0px, 0, 0); }\n\nnav#overlord ul#dropdown.onblog li a {\n  font-size: 16px;\n  color: #F2EFEF;\n  font-weight: 500;\n  text-transform: capitalize; }\n\nnav#overlord ul#dropdown.onblog li a:hover {\n  color: #AAA6A6; }\n\nnav#overlord ul#dropdown li.dropdown_message {\n  max-width: 170px; }\n\nnav#overlord ul#dropdown li.dropdown_message a {\n  line-height: 24px;\n  font-size: 20px;\n  color: #000;\n  padding-left: 10px;\n  padding-bottom: 10px;\n  font-weight: 300; }\n\nnav#overlord ul#dropdown li.dropdown_message a:hover {\n  font-weight: 300; }\n\nnav#overlord ul#dropdown li.dropdown_message a:hover span {\n  font-weight: 900; }\n\nnav#overlord ul#dropdown li.dropdown_message a span {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 17px;\n  font-family: 'freight-sans-pro',sans-serif; }\n", ""]);

/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	// 
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(var i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Header.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.header {\n  width: 100%;\n  margin: auto;\n  text-align: center; }\n\nheader {\n  text-align: center;\n  border-bottom: 2px solid #f4f4f4; }\n\nli a {\n  font-size: 0.8rem;\n  text-decoration: none;\n  color: #888; }\n\ndiv.header #user {\n  position: relative;\n  display: block;\n  margin-top: 140px;\n  border-bottom: 0px solid #f0f0f0;\n  text-align: center; }\n\ndiv.header #user h2 {\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 38px;\n  color: #474E3C;\n  font-weight: 900;\n  font-family: 'freight-sans-pro', sans-serif;\n  padding: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 500px;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  margin-top: 10px; }\n\ndiv.header #user h3 {\n  margin: 0;\n  font-size: 20px;\n  line-height: 26px;\n  color: #59624D;\n  font-weight: 300;\n  max-width: 450px;\n  margin: 0 auto;\n  margin-bottom: 55px;\n  margin-top: 5px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\ndiv.header #user-logo {\n  width: 110px;\n  height: 110px;\n  background-size: 110px 110px;\n  display: block;\n  border: 2px solid #9BA450;\n  border-radius: 100%;\n  margin: 0 auto;\n  transition-property: all;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -webkit-font-smoothing: antialiased; }\n\nul#user-links {\n  clear: both;\n  display: block; }\n\nul#user-links li {\n  display: inline-block;\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-bottom: 10px; }\n", ""]);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3ETKW-p.jpg"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	if (process.env.BROWSER) {
	  __webpack_require__(38);
	}
	
	var Footer = (function (_React$Component) {
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Footer, _React$Component);
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'footer' },
	        _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=star&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' }),
	        _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=fork&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' })
	      );
	    }
	  }]);
	
	  return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	
	Footer.prototype.displayName = 'Footer';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Footer.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Footer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.footer {\n  width: 100%;\n  margin: 50px 0;\n  padding: 10px;\n  text-align: center;\n  text-align: center;\n  border-top: 2px solid #f4f4f4; }\n", ""]);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	// TODO: do it in store maybe
	var metas = __webpack_require__(24).helmet;
	
	var HtmlHeaderTags = (function (_React$Component) {
	  function HtmlHeaderTags() {
	    _classCallCheck(this, HtmlHeaderTags);
	
	    _get(Object.getPrototypeOf(HtmlHeaderTags.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(HtmlHeaderTags, _React$Component);
	
	  _createClass(HtmlHeaderTags, [{
	    key: 'render',
	    value: function render() {
	      // DOM <head> instrumentation
	      var titleTemplate = '%s | Julien Valéry';
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactHelmet2['default'], { title: metas.title, meta: metas.meta, link: metas.link, titleTemplate: titleTemplate })
	      );
	    }
	  }]);
	
	  return HtmlHeaderTags;
	})(_react2['default'].Component);
	
	exports['default'] = HtmlHeaderTags;
	
	HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HtmlHeaderTags.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_App.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_App.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "body {\n  margin: auto;\n  font: 100% \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px;\n  text-transform: capitalize;\n  color: #0C1723; }\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\n\nh1 a:hover {\n  color: #DF4A7F; }\n\nul {\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0; }\n  ul li {\n    color: #1677AA;\n    font-weight: bold; }\n\np {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #4D4D4D;\n  font-weight: 400; }\n\nbutton.buttonize, a.buttonize {\n  display: inline-block;\n  padding-left: 50px;\n  padding-right: 50px;\n  border-radius: 30px;\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 45px;\n  background-color: transparent;\n  color: #767676;\n  border: 1px solid #e4e4e4;\n  outline: none;\n  transition-property: all;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -webkit-font-smoothing: antialiased; }\n\nbutton.buttonize.small, a.buttonize.small {\n  font-size: 15px;\n  line-height: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 400; }\n\nbutton.buttonize.tiny, a.buttonize.tiny {\n  font-size: 12px;\n  line-height: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 400; }\n\nbutton.buttonize:hover, a.buttonize:hover {\n  background-color: #000;\n  color: #fff;\n  border: 1px solid #000;\n  font-weight: 400; }\n\na, a:visited {\n  color: #333;\n  text-decoration: none;\n  outline: 0; }\n\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  transition-property: all;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -webkit-font-smoothing: antialiased; }\n\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  transition-property: all;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -webkit-font-smoothing: antialiased; }\n\nul#user-links li a:hover, a.buttonize:hover, button.buttonize:hover {\n  background-color: #DF4A7F;\n  border-color: #DF4A7F; }\n\nhr {\n  width: auto;\n  max-width: 100%;\n  height: 1px;\n  background-color: #f0f0f0;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: block;\n  clear: both;\n  border: 0px;\n  clear: both;\n  border-radius: 5px;\n  color: #f4f3f3; }\n\n/* Small Devices, Tablets from https://scotch.io/quick-tips/default-sizes-for-twitter-bootstraps-media-queries */\n@media only screen and (min-width: 768px) {\n  body {\n    width: 750px; } }\n\n/* Medium Devices, Desktops */\n@media only screen and (min-width: 992px) {\n  body {\n    width: 750px; } }\n\n/* Large Devices, Wide Screens */\n@media only screen and (min-width: 1200px) {\n  body {\n    width: 750px; } }\n", ""]);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Contact = (function (_React$Component) {
	  function Contact() {
	    _classCallCheck(this, Contact);
	
	    _get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Contact, _React$Component);
	
	  _createClass(Contact, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'CONTACT PAGE'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'test the 404 page ',
	          _react2['default'].createElement(
	            'a',
	            { href: '/middleofnowhere' },
	            'here'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Contact;
	})(_react2['default'].Component);
	
	exports['default'] = Contact;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Contact.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	// FLUX
	
	var _storesAppStore = __webpack_require__(18);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _altUtilsConnectToStores = __webpack_require__(28);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	// COMPONENT
	
	var _PostPostItem = __webpack_require__(46);
	
	var _PostPostItem2 = _interopRequireDefault(_PostPostItem);
	
	if (process.env.BROWSER) {
	  __webpack_require__(52);
	}
	
	var homeSection = (function (_React$Component) {
	  function HomeSection() {
	    _classCallCheck(this, HomeSection);
	
	    _get(Object.getPrototypeOf(HomeSection.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(HomeSection, _React$Component);
	
	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      // retrieve data from store
	      var posts = HomeSection.getPropsFromStores().posts;
	      var postItems = [];
	      for (var key in posts) {
	        var keyHr = 'hr' + key;
	        postItems.push(_react2['default'].createElement('hr', { key: keyHr }));
	        postItems.push(_react2['default'].createElement(_PostPostItem2['default'], { key: key, post: posts[key] }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'wrapper' },
	          postItems
	        )
	      );
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [_storesAppStore2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        posts: _storesAppStore2['default'].getState().posts
	      };
	    }
	  }]);
	
	  return HomeSection;
	})(_react2['default'].Component);
	
	homeSection.prototype.displayName = 'HomeSection';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(homeSection);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	// FLUX
	
	var _storesAppStore = __webpack_require__(18);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _altUtilsConnectToStores = __webpack_require__(28);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	var prism = __webpack_require__(47);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(48);
	  __webpack_require__(50);
	}
	
	var postItem = (function (_React$Component) {
	  function PostItem(props) {
	    _classCallCheck(this, PostItem);
	
	    _get(Object.getPrototypeOf(PostItem.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      post: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(PostItem, _React$Component);
	
	  _createClass(PostItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;
	
	      setTimeout(function () {
	        prism.highlightAll(function () {});
	
	        if (_this.props.params) {
	          (function () {
	            /*eslint-disable */
	            var disqus_shortname = 'darul';
	            (function () {
	              var dsq = document.createElement('script');dsq.type = 'text/javascript';dsq.async = true;
	              dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	            })();
	            /*eslint-enable */
	          })();
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      setTimeout(function () {
	        prism.highlightAll(function () {});
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var post = this.props.post,
	          disqusMarkup = '',
	          markdownClass = 'markdown-body highlight preview',
	          moreButton = '',
	          backButton = '',
	          time = '',
	          editUrl = '',
	          helmetMarkup = '',
	          editButtonMarkup = '';
	
	      if (post) {
	        moreButton = _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'buttonize small', to: '/post/' + post.permalink },
	          'Continue reading →'
	        );
	      }
	
	      if (this.props.params) {
	        (function () {
	          markdownClass = 'markdown-body highlight';
	          // from store
	          var posts = PostItem.getPropsFromStores().posts;
	          var postId = _this2.props.params.postId;
	          var title = PostItem.getPropsFromStores().config.helmet.title;
	          // find by permalink
	          post = _lodash2['default'].find(posts, function (item) {
	            return item.permalink === postId;
	          });
	
	          time = _react2['default'].createElement(
	            'time',
	            { dateTime: post.date.toString() },
	            post.date
	          );
	          var homepage = PostItem.getPropsFromStores().packagejson.homepage;
	          editUrl = homepage + '/edit/master/posts/2015/' + post.filename;
	          editButtonMarkup = _react2['default'].createElement(
	            'a',
	            { href: editUrl, target: '_blank', title: 'edit me' },
	            _react2['default'].createElement(
	              'button',
	              { className: 'c-hamburger edition', href: editUrl, target: '_blank' },
	              _react2['default'].createElement(
	                'span',
	                null,
	                'edition'
	              )
	            )
	          );
	          var templateTitle = '%s | ' + post.title;
	          var postTitle = title + ' | ' + post.title;
	          helmetMarkup = _react2['default'].createElement(_reactHelmet2['default'], { title: title, titleTemplate: templateTitle, meta: [{ 'name': 'description', 'content': postTitle }, { 'property': 'og:type', 'content': 'article' }] });
	
	          disqusMarkup = _react2['default'].createElement('div', { id: 'disqus_thread' });
	          backButton = _react2['default'].createElement(
	            _reactRouter.Link,
	            { className: 'buttonize small', to: '/' },
	            'Home'
	          );
	
	          //previewClass = '';
	
	          // if (!post) {
	          //   todo redirect
	          // }
	        })();
	      }
	      // param
	      var postPermalink = '/post/' + post.permalink;
	      var articleContainerClass = 'post ';
	
	      return _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'article',
	          { className: articleContainerClass },
	          _react2['default'].createElement(
	            'div',
	            { className: 'markdown-body' },
	            time
	          ),
	          editButtonMarkup,
	          _react2['default'].createElement(
	            'h1',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: postPermalink },
	              post.title
	            )
	          ),
	          _react2['default'].createElement('div', { className: markdownClass, dangerouslySetInnerHTML: { __html: post.body } }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'buttons' },
	            moreButton,
	            backButton
	          ),
	          helmetMarkup,
	          disqusMarkup
	        )
	      );
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [_storesAppStore2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        config: _storesAppStore2['default'].getState().config,
	        posts: _storesAppStore2['default'].getState().posts,
	        packagejson: _storesAppStore2['default'].getState().packagejson
	      };
	    }
	  }]);
	
	  return PostItem;
	})(_react2['default'].Component);
	
	postItem.prototype.displayName = 'PostItem';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(postItem);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PostItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("prismjs");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_PostItem.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_PostItem.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "article {\n  padding-left: 20px;\n  position: relative; }\n\narticle.post h1 {\n  font-size: 40px;\n  line-height: 35px;\n  margin-bottom: 15px;\n  margin-top: 0px; }\n\narticle.post p {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  -webkit-font-smoothing: antialiased;\n  text-align: justify; }\n\narticle .markdown-body a {\n  border-bottom: 2px solid #e1e1e1; }\n\narticle .markdown-body a:hover {\n  border-color: #FF0042; }\n\narticle h1, article h2, article h3, article h4, article h5, article h6, article ol, article ul, article table, article blockquote, article .markdown-body, .buttons {\n  padding-right: 20px;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  max-width: 700px; }\n\n.preview {\n  overflow: hidden;\n  max-height: 430px; }\n\ndiv.markdown-body p:first-child::first-letter {\n  float: left;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 50px;\n  margin: 5px 8px -9px 0;\n  color: #DF4A7F; }\n\ncode:not([class]) {\n  background-color: #FEF6BF; }\n", ""]);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./prism.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./prism.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+git+go&plugins=line-numbers */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', monospace;\n\tdirection: ltr;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 0.5em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre.line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre.line-numbers > code {\n\tposition: relative;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", ""]);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HomeSection.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HomeSection.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NotFoundSection = (function (_React$Component) {
	  function NotFoundSection() {
	    _classCallCheck(this, NotFoundSection);
	
	    _get(Object.getPrototypeOf(NotFoundSection.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(NotFoundSection, _React$Component);
	
	  _createClass(NotFoundSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'PAGE NOT FOUND'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'yes indeed'
	        )
	      );
	    }
	  }]);
	
	  return NotFoundSection;
	})(_react2['default'].Component);
	
	exports['default'] = NotFoundSection;
	
	NotFoundSection.prototype.displayName = 'NotFoundSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFoundSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	/*eslint-disable new-cap*/
	var router = _express2['default'].Router();
	/*eslint-enable new-cap*/
	
	var api = __webpack_require__(56);
	
	router.use('/api/*', function (req, res, next) {
	  api.todo(req, res, next);
	});
	
	exports['default'] = router;
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  module.hot.accept(['../api/api'], function () {
	    api = require('../api/api');
	  });
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var api = {
	  todo: function todo(req, res, next) {
	    try {
	      res.setHeader('Content-Type', 'application/json');
	
	      // simple api fetch example, no own DB here so external call is made.
	
	      // https://api.github.com/users/github
	      /* fetch('https://api.github.com/users/github')
	       .then((response) => {
	         return response.json();
	       }).then((json) => {
	         res.status(200).send(json);
	       });
	       */
	      res.status(200).send({ test: 'test' });
	    } catch (err) {
	      next(err);
	    }
	  },
	  othertodo: function othertodo() {}
	};
	
	exports['default'] = api;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/personal-blog/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ2NWNiMzg2YjViOWM3NzhkOWIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJNZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9tYWtlSG90LmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcuanNvbiIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1IF5cXC5cXC8uKlxcLm1kJCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMjhfbXktYmxvZy5tZCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMzBfbm9kZWpzLXJlcXVpcmUtbW9kdWxlLm1kIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXJNZW51LnNjc3M/MDQ1MiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlck1lbnUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzPzBkMzMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3BpY3R1cmUuanBnIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bvc3QvX1Bvc3RJdGVtLnNjc3M/MDk0MyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Qb3N0L19Qb3N0SXRlbS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3M/NzA3MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzPzQwMGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBpL2FwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7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OztvQ0NsQnRDLENBQVM7Ozs7O0FBRzdCLEtBQUksTUFBTSxHQUFHLHFCQUFRLE1BQU0sRUFBRSxDQUFDOzs7QUFHOUIsS0FBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxFQUFZLENBQUMsQ0FBQzs7QUFFaEMsT0FBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSztBQUN2QyxNQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDOztzQkFFWSxNQUFNOzs7OztBQUtyQixLQUFHLEtBQVUsRUFBRTtBQUNiLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBTTtBQUN0QyxRQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJELEtBQUksR0FBRyxHQUFHO0FBQ1IsT0FBSSxFQUFFLGNBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDeEIsU0FBSTtBQUNGLFVBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQVlsRCxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO01BQ3RDLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixXQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDWDtJQUNGO0FBQ0QsWUFBUyxFQUFFLHFCQUFNLEVBRWhCO0VBQ0YsQ0FBQzs7c0JBRWEsR0FBRyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5NDY1Y2IzODZiNWI5Yzc3OGQ5YlxuICoqLyIsIi8vIE5PREVcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEVYUFJFU1NcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XG5cbi8vIFByb2ZpbGUgZGV2IG9yIHByb2R1Y3Rpb25cbmxldCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuREVWID8gJ2RldicgOiAncHJvZCcsXG5cdHB1YmxpY1BhdGggPSBwcm9maWxlID09PSAnZGV2JyA/ICdidWlsZCcgOiAnZGlzdCc7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC5zZXQoJ3BvcnQnLCBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwdWJsaWNQYXRoKSk7XG5hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28nKSkpO1xuXG4vL1xuLy8gUmVnaXN0ZXIgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHJlbmRlcmVyXG5sZXQgcmVuZGVyZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yZW5kZXJlcicpO1xuLy8gYXBpc1xubGV0IGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xuXG4vL1xuLy8gQ29uZmlndXJlIG1pZGRsZXdhcmVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxucmVuZGVyZXIuaW5pdChwcm9maWxlKTtcblxuLy9cbi8vIEFjdGl2YXRlIG1pZGRsZXdhcmVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnVzZShhcGlSb3V0ZXMpO1xuYXBwLnVzZShyZW5kZXJlci5yZW5kZXIpO1xuXG5odHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBhcHAuZ2V0KCdwb3J0JykpO1xufSk7XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gYWNjZXB0IHVwZGF0ZSBvZiBkZXBlbmRlbmN5XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi9yb3V0ZXMvYXBpJywgJy4vcm91dGVzL3JlbmRlcmVyJ10sICgpID0+IHtcbiAgICBhcGlSb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hcGknKTtcbiAgICBhcHAudXNlKGFwaVJvdXRlcyk7XG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yZW5kZXJlcicpO1xuICAgIHJlbmRlcmVyLmluaXQoJ2RldicpO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3NlcnZlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh0dHBcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XG5cbmxldCBwcm9maWxlID0gJ2Rldic7XG5cbnZhciByb3V0ZXNSZW5kZXJlciA9IHtcbiAgaW5pdDogKHR5cGUpID0+IHtcbiAgICBwcm9maWxlID0gdHlwZTtcbiAgICByZW5kZXJlci5pbml0KHR5cGUpO1xuICB9LFxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlbmRlcmVyLnJlbmRlcihyZXEsIHJlcywgbmV4dCk7XG4gIH1cbn07XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi91dGlscy9yZW5kZXJlciddLCAoKSA9PiB7XG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xuICAgIHJlbmRlcmVyLmluaXQocHJvZmlsZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qc1xuICoqLyIsIi8vIE5PREVcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbi8vIEVYVEVSTkFMU1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBJc28gZnJvbSAnaXNvJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8vIENPUkVcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vYXBwL3JvdXRlcyc7XG5pbXBvcnQgYWx0IGZyb20gJy4uLy4uL2FwcC9hbHQnO1xuXG5sZXQgaHRtbCA9ICcnO1xuXG52YXIgcmVuZGVyZXIgPSB7XG4gIGluaXQ6ICh0eXBlKSA9PiB7XG4gICAgaHRtbCA9IHR5cGUgPT09ICdkZXYnID9cbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9hc3NldHMvaW5kZXgtZGV2Lmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pXG4gICAgICA6XG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vZGlzdC9pbmRleC1wcm9kLmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pO1xuICB9LFxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGxldCBtYXJrdXAgPSAnJyxcbiAgICAgIGlzbyA9IG5ldyBJc28oKTtcblxuICAgIGNvbnN0IG9uZUl0ZW1Cb290c3RyYXBlZCA9IHtcbiAgICAgICdBcHBTdG9yZSc6IHtcbiAgICAgICAgJ2RhdGFCeVJlc3RBcGknOiB7fSxcbiAgICAgICAgJ2RhdGEnOiB7XG4gICAgICAgICAgJ2lhcXBvcjdwJzoge1xuICAgICAgICAgICAgJ2lkJzogJ2lhcXBvcjdwJyxcbiAgICAgICAgICAgICdjb21wbGV0ZSc6IGZhbHNlLFxuICAgICAgICAgICAgJ3RleHQnOiAnZnNmc2RmJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLCB3ZSB0YWtlIHRoZSBsb2NhbHMgZGF0YSB3ZSBoYXZlIGFscmVhZHlcbiAgICBmZXRjaGVkIGFuZCBzZWVkIG91ciBzdG9yZXMgd2l0aCBkYXRhLlxuICAgIE5leHQgd2UgdXNlIHJlYWN0LXJvdXRlciB0byBydW4gdGhlIFVSTCB0aGF0IGlzIHByb3ZpZGVkIGluIHJvdXRlcy5qc3hcbiAgICBGaW5hbGx5IHdlIHVzZSBpc28gaW4gb3JkZXIgdG8gcmVuZGVyIHRoaXMgY29udGVudCBzbyBpdCBwaWNrcyBiYWNrIHVwXG4gICAgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBib290c3RyYXBzIHRoZSBzdG9yZXMuXG4gICAgaW5pdCBzZXJ2ZXIgcmVuZGVyZXJcbiAgICAqL1xuICAgIGFsdC5ib290c3RyYXAoSlNPTi5zdHJpbmdpZnkocmVzLmxvY2Fscy5kYXRhIHx8IG9uZUl0ZW1Cb290c3RyYXBlZCkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XG5cdFx0XHRcdC8vIGFsdCBmbHV4IGZsdXNoXG4gICAgICAgIGxldCBjb250ZW50ID0gUmVhY3QucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyKSk7XG4gICAgICAgIGlzby5hZGQoY29udGVudCwgYWx0LmZsdXNoKCkpO1xuXG4gICAgICAgIHJlcy5jb250ZW50VHlwZSA9ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmOCc7XG4gICAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XG5cbiAgICAgICAgaWYgKG5vdEZvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICAgIH1cblxuXHRcdC8vIFJFTkRFUklORyBiYWNrIHRvIGNsaWVudFxuICAgICAgICBsZXQgbWFya3VwQ29udGVudCA9IGlzby5yZW5kZXIoKTtcbiAgICAgICAgLy8gRE9NIDxoZWFkPiBpbnN0cnVtZW50YXRpb25cbiAgICAgICAgbGV0IGhlYWQgPSBIZWxtZXQucmV3aW5kKCk7XG4gICAgICAgIG1hcmt1cCA9IGh0bWwucmVwbGFjZSgnTUVUQScsIGhlYWQubWV0YSkucmVwbGFjZSgnVElUTEUnLCBoZWFkLnRpdGxlKS5yZXBsYWNlKCdMSU5LJywgaGVhZC5saW5rKS5yZXBsYWNlKCdDT05URU5UJywgbWFya3VwQ29udGVudCk7XG4gICAgICAgIC8vIFNFTkQgcmVzcG9uc2VcbiAgICAgICAgcmVzLnNlbmQobWFya3VwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3V0aWxzL3JlbmRlcmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLyplc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IHtSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIDxSb3V0ZSBuYW1lPSdhcHAnIHBhdGg9Jy8nIGhhbmRsZXI9e0FwcGxpY2F0aW9ufT5cclxuICAgIDxSb3V0ZSBuYW1lPSdob21lJyBwYXRoPScvaG9tZScgaGFuZGxlcj17SG9tZVNlY3Rpb259Lz5cclxuICAgIDxSb3V0ZSBuYW1lPSdjb250YWN0JyBwYXRoPVwiL2NvbnRhY3RcIiBoYW5kbGVyPXtDb250YWN0fS8+XHJcbiAgICA8Um91dGUgbmFtZT0ncG9zdCcgcGF0aD1cIi9wb3N0Lzpwb3N0SWRcIiBoYW5kbGVyPXtQb3N0SXRlbX0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9yb3V0ZXMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gQ09NUE9ORU5UXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIdG1sSGVhZGVyVGFncyBmcm9tICcuLi9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncyc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIC8vcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dpdGh1Yi1tYXJrZG93bi1jc3MvZ2l0aHViLW1hcmtkb3duLmNzcycpO1xuICByZXF1aXJlKCcuL19BcHAuc2NzcycpO1xuICByZXF1aXJlKCdmaWxlP25hbWU9ZmF2aWNvbi5pY28hLi4vLi4vaW1hZ2VzL2Zhdmljb24uaWNvJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIdG1sSGVhZGVyVGFncyAvPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWNvbnRlbnQnPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdBcHAnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvQXBwLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBIZWFkZXJNZW51IGZyb20gJy4vSGVhZGVyTWVudSc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX0hlYWRlci5zY3NzJyk7XG59XG5cbmxldCBsb2dvID0gcmVxdWlyZSgnLi9pbWFnZXMvcGljdHVyZS5qcGcnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBsb2dvU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGxvZ28gKyAnKSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8SGVhZGVyTWVudSAvPlxuXHRcdFx0XHQ8aGVhZGVyIGlkPSd1c2VyJz5cbiAgICAgICAgICA8TGluayB0bz0nYXBwJz5cbiAgICAgICAgICAgIDxmaWd1cmUgaWQ9J3VzZXItbG9nbycgc3R5bGU9e2xvZ29TdHlsZX0+PC9maWd1cmU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxoMj5KVUxJRU4gVkFMRVJZPC9oMj5cbiAgICAgICAgICA8aDM+ZGFydWw3NTwvaDM+XG5cdFx0XHRcdFx0PHVsIGlkPSd1c2VyLWxpbmtzJz5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J1dHRvbml6ZSB0aW55JyBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2RhcnVsNzUnIHRhcmdldD0nX2JsYW5rJz5AZGFydWw3NTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nYnV0dG9uaXplIHRpbnknIGhyZWY9XCJtYWlsdG86ZGFydWw3NUBnbWFpbC5jb20/c3ViamVjdD1ibG9nXCI+c2F5IGhpPC9hPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgY29ubmVjdFRvU3RvcmVzIGZyb20gJ2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMnO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL19IZWFkZXJNZW51LnNjc3MnKTtcbn1cblxubGV0IGhlYWRlck1lbnUgPSBjbGFzcyBIZWFkZXJNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge3Nob3c6IGZhbHNlfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWVudUJ0bkNsYXNzID0gIXRoaXMuc3RhdGUuc2hvdyA/ICdjLWhhbWJ1cmdlciBjLWhhbWJ1cmdlci0tcm90JyA6ICdjLWhhbWJ1cmdlciBjLWhhbWJ1cmdlci0tcm90IGMtaGFtYnVyZ2VyLS1odHggaXMtYWN0aXZlJztcbiAgICBsZXQgbWVudUNsYXNzID0gIXRoaXMuc3RhdGUuc2hvdyA/ICcnIDogJ292ZXJsb3JkX2FjdGl2ZSc7XG4gICAgbGV0IHBvc3RzID0gSGVhZGVyTWVudS5nZXRQcm9wc0Zyb21TdG9yZXMoKS5wb3N0cztcbiAgICBsZXQgcG9zdExpbmtzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIHBvc3RzKSB7XG4gICAgICBsZXQgcG9zdCA9IHBvc3RzW2tleV07XG4gICAgICBsZXQgcG9zdFBlcm1hbGluayA9ICcvcG9zdC8nICsgcG9zdC5wZXJtYWxpbms7XG4gICAgICBwb3N0TGlua3MucHVzaCg8bGkga2V5PXtrZXl9PjxMaW5rIHRvPXtwb3N0UGVybWFsaW5rfT57cG9zdC50aXRsZX08L0xpbms+PC9saT4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGlkPSdvdmVybG9yZCcgY2xhc3NOYW1lPXttZW51Q2xhc3N9IG9uTW91c2VMZWF2ZT17dGhpcy5fb25Nb3VzZUxlYXZlLmJpbmQodGhpcyl9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bWVudUJ0bkNsYXNzfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxzcGFuPnRvZ2dsZSBtZW51PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHVsIGlkPSdkcm9wZG93bicgY2xhc3NOYW1lPSdvbmJsb2cnPlxuICAgICAgICAgIHtwb3N0TGlua3N9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogIXRoaXMuc3RhdGUuc2hvd30pO1xuICB9XG5cbiAgX29uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JlcygpIHtcbiAgICByZXR1cm4gW0FwcFN0b3JlXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc3RzOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBvc3RzXG4gICAgfTtcbiAgfVxufTtcblxuaGVhZGVyTWVudS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyTWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3JlcyhoZWFkZXJNZW51KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlck1lbnUuanNcbiAqKi8iLCIvLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG4vLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcblxubGV0IGFwcFN0b3JlID0gbWFrZUhvdChhbHQsIGNsYXNzIEFwcFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcbiAgICB0aGlzLnBvc3RzID0gW107XG4gICAgdGhpcy5wYWNrYWdlanNvbiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHRoaXMuY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIGh0dHA6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2NvbnRleHQuaHRtbFxuICAgIGxldCBtYXJrdXBGaWxlc1JlcSA9IHJlcXVpcmUuY29udGV4dCgnLi4vLi4vcG9zdHMvMjAxNScsIHRydWUsIC9eXFwuXFwvLipcXC5tZCQvKTtcbiAgICBsZXQgbWFya3VwRmlsZXNLZXlzID0gbWFya3VwRmlsZXNSZXEua2V5cygpO1xuXG4gICAgY29uc3QgZXh0cmFjdE1ldGEgPSBmdW5jdGlvbihlbHQpIHtcbiAgICAgIGxldCBtZXRhID0ge307XG4gICAgICB2YXIgZGF0ZU1hdGNoZXMgPSBlbHQubWF0Y2goLygxOXwyMClcXGRcXGRbLSAvLl0oMFsxLTldfDFbMDEyXSlbLSAvLl0oMFsxLTldfFsxMl1bMC05XXwzWzAxXSkvKTtcbiAgICAgIGlmIChkYXRlTWF0Y2hlcykge1xuICAgICAgICBtZXRhLmRhdGUgPSBkYXRlTWF0Y2hlc1swXTtcbiAgICAgIH1cblxuICAgICAgbWV0YS5maWxlbmFtZSA9IGVsdC5zdWJzdHJpbmcoMiwgZWx0Lmxlbmd0aCk7XG4gICAgICBtZXRhLnBlcm1hbGluayA9IGVsdC5zdWJzdHJpbmcoMiwgZWx0LmluZGV4T2YoJy5tZCcpKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbWV0YS50aXRsZSA9IGVsdC5zdWJzdHJpbmcoZWx0LmluZGV4T2YoJ18nKSArIDEsIGVsdC5pbmRleE9mKCcubWQnKSkucmVwbGFjZSgvXFwtL2csICcgJyk7XG5cbiAgICAgIHJldHVybiBtZXRhO1xuICAgIH07XG5cbiAgICBtYXJrdXBGaWxlc0tleXMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBsZXQgaHRtbCA9IG1hcmt1cEZpbGVzUmVxKGVsdCk7XG4gICAgICBsZXQgbWV0YXMgPSBleHRyYWN0TWV0YShlbHQpO1xuICAgICAgbGV0IHBvc3QgPSB7XG4gICAgICAgIGJvZHk6IGh0bWwsXG4gICAgICAgIGRhdGU6IG1ldGFzLmRhdGUsXG4gICAgICAgIGZpbGVuYW1lOiBtZXRhcy5maWxlbmFtZSxcbiAgICAgICAgcGVybWFsaW5rOiBtZXRhcy5wZXJtYWxpbmssXG4gICAgICAgIHRpdGxlOiBtZXRhcy50aXRsZVxuICAgICAgfTtcbiAgICAgIHRoaXMucG9zdHMucHVzaChwb3N0KTtcbiAgICB9KTtcblxuICAgIHRoaXMucG9zdHMucmV2ZXJzZSgpO1xuICB9XG59LCAnQXBwU3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IEFsdCBmcm9tICdhbHQnO1xyXG5cclxuLy8gY3JlYXRlIGFsdCBpbnN0YW5jZVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FsdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYWx0XCJcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBtYWtlSG90KGFsdCwgU3RvcmUpIHtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFN0b3JlLmRpc3BsYXlOYW1lIDogYXJndW1lbnRzWzJdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIGFsdC5zdG9yZXNbbmFtZV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWx0LmNyZWF0ZVN0b3JlKFN0b3JlLCBuYW1lKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtYWtlSG90O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvbWFrZUhvdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEFwcEFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwicGVyc29uYWwtYmxvZ1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG5cdFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFydWw3NS9wZXJzb25hbC1ibG9nXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFydWw3NS9wZXJzb25hbC1ibG9nLmdpdFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJkZXZcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGNvbmYvd2VicGFjay1kZXYuanMgfCB3ZWJwYWNrLWRldi1zZXJ2ZXIgLS1wb3J0IDgwODAgLS1jb25maWcgY29uZi93ZWJwYWNrLWRldi5qcyAtLWhvdCAtLWhpc3RvcnktYXBpLWZhbGxiYWNrIC0tcHJvZ3Jlc3MgLS1jb2xvcnMgLS1pbmxpbmUgLS1jb250ZW50LWJhc2UgLi9idWlsZFwiLFxuXHRcdFwiZGV2LXNlcnZlci1jbGllbnRcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL3dlYnBhY2sgLS1wcm9ncmVzcyAtLXdhdGNoIC0tY29uZmlnIGNvbmYvd2VicGFjay1kZXYtc2VydmVyLmpzIHwgLi9ub2RlX21vZHVsZXMvLmJpbi93ZWJwYWNrLWRldi1zZXJ2ZXIgLS1wb3J0IDgwODEgLS1jb25maWcgY29uZi93ZWJwYWNrLWRldi1zZXJ2ZXIuanMgLS1ob3QgLS1oaXN0b3J5LWFwaS1mYWxsYmFjayAtLXByb2dyZXNzIC0tY29sb3JzIC0taW5saW5lIC0tY29udGVudC1iYXNlIC4vYnVpbGRcIixcblx0XHRcImRldi1zZXJ2ZXJcIjogXCJub2RlIGJ1aWxkL3NlcnZlci5qc1wiLFxuXHRcdFwiZGV2LXNlcnZlci1kZWJ1Z1wiOiBcIm5vZGUtZGVidWcgLS1kZWJ1Zy1icmsgYnVpbGQvc2VydmVyLmpzIC0tZGVidWcgLS1zb3VyY2UtbWFwc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGNvbmYvd2VicGFjay1wcm9kLmpzIC0tcHJvZ3Jlc3MgLS1wcm9maWxlIC0tY29sb3JzXCIsXG5cdFx0XCJzdGFydFwiOiBcIm5vZGUgZGlzdC9zZXJ2ZXIuanNcIixcblx0XHRcInRlc3RcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL21vY2hhIGFwcC8qKi8qLXRlc3QuanMgLS1jb2xvcnMgLS1jb21waWxlcnMganM6YmFiZWwvcmVnaXN0ZXIgLS1yZWN1cnNpdmVcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJiYWJlbC1jb3JlXCI6IFwiXjUuMS4xMVwiLFxuXHRcdFwiYmFiZWwtZXNsaW50XCI6IFwiXjMuMS4xXCIsXG5cdFx0XCJiYWJlbC1sb2FkZXJcIjogXCJeNS4xLjRcIixcblx0XHRcImJhYmVsLXJ1bnRpbWVcIjogXCJeNS4xLjExXCIsXG5cdFx0XCJjbGVhbi13ZWJwYWNrLXBsdWdpblwiOiBcIl4wLjEuMlwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjEwLjFcIixcblx0XHRcImVzbGludFwiOiBcIl4wLjIwLjBcIixcblx0XHRcImVzbGludC1sb2FkZXJcIjogXCJeMC4xMS4yXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjIuMi4wXCIsXG5cdFx0XCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIjogXCJeMC42LjBcIixcblx0XHRcImZpbGUtbG9hZGVyXCI6IFwiXjAuOC4xXCIsXG5cdFx0XCJodG1sLWxvYWRlclwiOiBcIl4wLjMuMFwiLFxuXHRcdFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiOiBcIl4xLjIuMFwiLFxuXHRcdFwianNkb21cIjogXCJeMi4wLjBcIixcblx0XHRcImpzb24tbG9hZGVyXCI6IFwiXjAuNS4yXCIsXG5cdFx0XCJqc3gtbG9hZGVyXCI6IFwiXjAuMTMuMlwiLFxuXHRcdFwibWFya2Rvd24tbG9hZGVyXCI6IFwiXjAuMS4zXCIsXG5cdFx0XCJtb2NoYVwiOiBcIl4yLjEuMFwiLFxuXHRcdFwibm9kZS1zYXNzXCI6IFwiXjMuMS4yXCIsXG5cdFx0XCJyZWFjdC1ob3QtbG9hZGVyXCI6IFwiXjEuMi43XCIsXG5cdFx0XCJzYXNzLWxvYWRlclwiOiBcIjEuMC4yXCIsXG5cdFx0XCJzdHlsZS1sb2FkZXJcIjogXCJeMC4xMC4yXCIsXG5cdFx0XCJ1cmwtbG9hZGVyXCI6IFwiXjAuNS41XCIsXG5cdFx0XCJ3ZWJwYWNrXCI6IFwiXjEuOS4xMFwiLFxuXHRcdFwid2VicGFjay1kZXYtc2VydmVyXCI6IFwiXjEuOC4yXCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYWx0XCI6IFwiXjAuMTYuMTBcIixcblx0XHRcImJhYmVsXCI6IFwiXjUuMS4xMVwiLFxuXHRcdFwiY2xhc3NuYW1lc1wiOiBcIl4yLjEuMVwiLFxuXHRcdFwiZXhwcmVzc1wiOiBcIl40LjEyLjNcIixcblx0XHRcImlzb1wiOiBcIl40LjEuMFwiLFxuXHRcdFwibG9kYXNoXCI6IFwiXjMuOS4zXCIsXG5cdFx0XCJtYXJrZWRcIjogXCJeMC4zLjNcIixcblx0XHRcIm5vZGUtZmV0Y2hcIjogXCJeMS4yLjFcIixcblx0XHRcIm9iamVjdC1hc3NpZ25cIjogXCJeMi4wLjBcIixcblx0XHRcInByaXNtanNcIjogXCIwLjAuMVwiLFxuXHRcdFwicmVhY3RcIjogXCJeMC4xMy4yXCIsXG5cdFx0XCJyZWFjdC1oZWxtZXRcIjogXCJeMS4xLjBcIixcblx0XHRcInNlcnZlLWZhdmljb25cIjogXCJeMi4yLjFcIixcblx0XHRcInJlYWN0LXJvdXRlclwiOiBcIl4wLjEzLjJcIixcblx0XHRcIndoYXR3Zy1mZXRjaFwiOiBcIl4wLjguMVwiXG5cdH0sXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwicmVhY3RcIixcblx0XHRcImZsdXhcIixcblx0XHRcImlzb21vcnBoaWNcIixcblx0XHRcIndlYnBhY2tcIixcblx0XHRcImtpdFwiLFxuXHRcdFwiZXhwcmVzc1wiLFxuXHRcdFwibm9kZVwiLFxuXHRcdFwiYmxvZ1wiXG5cdF0sXG5cdFwibGljZW5zZVwiOiBcIk1JVFwiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3BhY2thZ2UuanNvblxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxtZXRcIjoge1xuXHRcdFwidGl0bGVcIjogXCJEYXJ1bCBibG9nXCIsXG5cdFx0XCJtZXRhXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwiSnVsaWVuIFZhbMOpcnkgYmxvZzogZnVsbHN0YWNrIHN0dWZmcywgTm9kZUpTLCBBbmd1bGFySlMsIFJlYWN0LCBNb25nb0RCLi4uIGFib3V0IG1lIG9yIHdoYXQgZWxzZS5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwidmlld3BvcnRcIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJsaW5rXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJzaG9ydGN1dCBpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJocmVmXCI6IFwiaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheVwiLFxuXHRcdFx0XHRcInJlbFwiOiBcInN0eWxlc2hlZXRcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dC9jc3NcIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvY29uZmlnLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuLzIwMTUtMDYtMjhfbXktYmxvZy5tZFwiOiAyNixcblx0XCIuLzIwMTUtMDYtMzBfbm9kZWpzLXJlcXVpcmUtbW9kdWxlLm1kXCI6IDI3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI1O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Bvc3RzLzIwMTUgXlxcLlxcLy4qXFwubWQkXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcIndlbGNvbWVcXFwiPldlbGNvbWU8L2gyPlxcbjxwPkhpLCBteSBuYW1lIGlzIEp1bGllbiwgSSBsaXZlIGluIFBhcmlzLCBGcmFuY2UgYW5kIGNvZGUgZm9yIGEgd2hpbGUgd2l0aCBhIHBhc3Npb24gZm9yIHdlYiB0ZWNobm9sb2dpZXMgYnV0IGFsc28gZGF0YSwgdmlzdWFsaXphdGlvbi4uLjwvcD5cXG48cD5PbiB0aGlzIGJsb2csIEkgd2lsbCB0cnkgdG8gc2hhcmUgd2l0aCB5b3UgbXkgaW50ZXJlc3QgYW5kIHNvbWUgZXhhbXBsZXMsIHR1dG9yaWFscyBvciBzdG9yaWVzLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+YWxlcnQoJiMzOTtoZWxsbyB3b3JsZCYjMzk7KTtcXG48L2NvZGU+PC9wcmU+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Bvc3RzLzIwMTUvMjAxNS0wNi0yOF9teS1ibG9nLm1kXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcIm1vZHVsZVxcXCI+TW9kdWxlPC9oMj5cXG48cD5VbmRlcnN0YW5kIG1vZHVsZSBjb21wb25lbnQgbG9hZGluZyBzeXN0ZW0gaXMgcXVpdGUgaW1wb3J0YW50IGluIE5vZGVKUywgdGhvc2Ugd2hvIHRyaWVkIHRvIHBsYXkgd2l0aCBpdCBtYXkga25vdyB3aGF0IEkgYW0gdGFsa2luZyBhYm91dC48L3A+XFxuPHA+SG93IGl0IHdvcmtzLCB3aGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+ZXhwb3J0PC9jb2RlPiwgPGNvZGU+bW9kdWxlLmV4cG9ydHM8L2NvZGU+LjwvcD5cXG48cD5JbiB0aGlzIHRocmVhZCwgd2Ugd2lsbCB0YWtlIGEgZGVlcCBsb29rIGF0IGhvdyBub2RlIGNvcmUgZGVwZW5kZW5jeSBtYW5hZ2VtZW50IHdvcmtzLjwvcD5cXG48cD5Nb2R1bGUgc3lzdGVtIGluIE5vZGVKUyBpcyBoYW5kbGUgYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2Jsb2IvbWFzdGVyL2xpYi9tb2R1bGUuanNcXFwiPk1vZHVsZS5qczwvYT4gZmlsZS48L3A+XFxuPHA+RGVzY3JpcHRpb24gb2YgTW9kdWxlIEFQSSBpcyA8YSBocmVmPVxcXCJodHRwczovL25vZGVqcy5vcmcvZG9jcy9sYXRlc3QvYXBpL21vZHVsZXMuaHRtbCNtb2R1bGVzX3RoZV9tb2R1bGVfb2JqZWN0XFxcIj5oZXJlPC9hPiwgYnV0IHdlIHVzZSBpdCB2ZXJ5IHJhcmVseS48L3A+XFxuPHA+TWFpbiBwdXJwb3NlIG9mIE1vZHVsZSBpcyB0byBoYW5kbGUgeW91ciBjb2RlIGRlcGVuZGVuY2llcyBieSBwcm92aWRpbmcgYSBydW50aW1lIGNvbnRleHQuPC9wPlxcbjxoMiBpZD1cXFwiY29uc3RydWN0b3JcXFwiPkNvbnN0cnVjdG9yPC9oMj5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+ZnVuY3Rpb24gTW9kdWxlKGlkLCBwYXJlbnQpIHtcXG4gIHRoaXMuaWQgPSBpZDtcXG4gIHRoaXMuZXhwb3J0cyA9IHt9O1xcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XFxufVxcbjwvY29kZT48L3ByZT5cXG48cD5vbmUgPGNvZGU+ZXhwb3J0czwvY29kZT4gb2JqZWN0IGF0dHJpYnV0ZSBpcyBjcmVhdGVkIGJ5IGRlZmF1bHQuPC9wPlxcbjxwPk5vdGUgdGhhdCBhbGwgeW91ciBkZXBlbmRlbmNpZXMgb25seSBzaG93cyB0aGlzIDxjb2RlPmV4cG9ydHM8L2NvZGU+IE1vZHVsZSBvYmplY3QgYXR0cmlidXRlIHRvIHRoZWlyIHBhcmVudCBtb2R1bGVzLiBIZXJlIGp1c3QgYW4gZXh0cmFjdCBmcm9tIE1vZHVsZSBOb2RlSlMgc291cmNlIGNvZGU6PC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4vLyBkaWdlc3QgeW91ciBtb2R1bGUgY29kZSBhbmQgdGhlbiByZXR1cm4gZXhwb3J0cyBhdHRyXFxucmV0dXJuIG1vZHVsZS5leHBvcnRzO1xcbjwvY29kZT48L3ByZT5cXG48cD5IZXJlIHNvbWUgY29tbW9uIHNjZW5hcmlvcyB3aGVuIGNyZWF0aW5nIGEgbW9kdWxlIChub3RlIHRoZSBkb3QgLikuPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5leHBvcnRzLm15Rm4gPSBmdW5jdGlvbigpIHtcXG5cXG59XFxuZXhwb3J0cy5teUZuMiA9IGZ1bmN0aW9uKCkge1xcblxcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+VGhpcyBmaWxscyB5b3VyIG1vZHVsZSA8Y29kZT5leHBvcnRzPC9jb2RlPiBvYmplY3QgYXR0cmlidXRlLjwvcD5cXG48cD48Y29kZT5yZXR1cm4gbW9kdWxlLmV4cG9ydHM8L2NvZGU+IGRpcmVjdGl2ZSB3aWxsIHJldHVybiBzb21ldGhpbmcgbGlrZTo8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPntcXG4gIG15Rm4gOiBmdW5jdGlvbigpIHtcXG5cXG4gIH0sXFxuICBteUZuMiA6IGZ1bmN0aW9uKCkge1xcblxcbiAgfVxcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+U2lkZSBlZmZlY3Q6PC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5leHBvcnRzID0ge1xcbiAgZm46IGZ1bmN0aW9uKCkge1xcblxcbiAgfSxcXG4gIGZuMjogZnVuY3Rpb24oKSB7XFxuXFxuICB9XFxufVxcbjwvY29kZT48L3ByZT5cXG48cD55b3UgZXhwZWN0IDxjb2RlPnJldHVybiBtb2R1bGUuZXhwb3J0czwvY29kZT4gcmV0dXJuaW5nIHRoZSBzYW1lIG9iamVjdCBzaG93biBiZWZvcmUgYnV0IGl0IHdvbiYjMzk7dCwgeW91IGhhdmUganVzdCBjcmVhdGVkIGEgbmV3IG9iamVjdCBhbmQgbW9kdWxlLmV4cG9ydHMgc3RpbGwgcG9pbnQgdG8gYW4gZW1wdHkgb2JqIHt9PC9wPlxcbjxwPklmIHlvdSB3YW50IHRvIGJlIGJlIHN1cmUsIGp1c3QgY2FuIHN0YXJ0IHlvdXIgbW9kdWxlIHdpdGggKG5vdGUgdGhlIGRvdCAuKTwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xcblxcbmV4cG9ydHMuZm4gPSBmdW5jdGlvbigpIHtcXG5cXG59O1xcblxcbmV4cG9ydHMuZm4yID0gZnVuY3Rpb24oKSB7XFxuXFxufTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+QnV0IGEgbW9yZSBjb252ZW5pZW50IHdheSB0byBhdm9pZCB0aGlzIGluY29udmVuaWVuY2Ugd291bGQgYmU8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPnZhciBteVN0dWZmID0gJiMzOTtJIGxvdmUgTm9kZWpzJiMzOTs7XFxuXFxuLy8gT1JcXG5cXG52YXIgbXlTdHVmZiA9IGZ1bmN0aW9uIGRvU3R1ZmYoKSB7XFxuXFxufTtcXG5cXG4vLyBPUlxcblxcbnZhciBteVN0dWZmID0ge1xcbiAgZG9TdHVmZjogZnVuY3Rpb24gZG9TdHVmZjEoKSB7XFxuXFxuICB9LFxcbiAgZG9TdHVmZjE6IGZ1bmN0aW9uIGRvU3R1ZmYxKCkge1xcblxcbiAgfVxcblxcbn07XFxuXFxuLy8gT1IgLi4uLlxcblxcbm1vZHVsZS5leHBvcnRzID0gbXlTdHVmZjtcXG48L2NvZGU+PC9wcmU+XFxuPHA+QnV0IHRoZW4sIHdoYXQgaGFwcGVuZWQgd2hlbiB3ZSB1c2UgcmVxdWlyZSA/PC9wPlxcbjxoMiBpZD1cXFwicmVxdWlyZVxcXCI+UmVxdWlyZTwvaDI+XFxuPHA+V2hlbiB1c2luZyByZXF1aXJlLCBiZWhpbmQgdGhlIHNjZW5lIGEgbW9kdWxlIGNvbnRleHQgaXMgY3JlYXRlZCBhbmQgeW91ciBjb2RlIHJ1bnMgaW4gaXQuPC9wPlxcbjxwPjxjb2RlPnJlcXVpcmU8L2NvZGU+IGZ1bmN0aW9uIGlzIGF0dGFjaGVkIHRvIG5vZGUgZ2xvYmFsIDxjb2RlPm9iamVjdDwvY29kZT4sIGltYWdpbmUgPGNvZGU+d2luZG93PC9jb2RlPiBvYmplY3QgZm9yIGEgYnJvd3NlciBlbnZpcm9ubWVudC4gU28gd2hlbiB5b3UgdHlwZSA8Y29kZT5yZXF1aXJlKCYjMzk7c29tZXRoaW5nJiMzOTspPC9jb2RlPiBqcyBwcm90b3R5cGUgcGF0dGVybiBsb29rcyBmb3IgaXQgYW5kIGZpbmRzIHJlcXVpcmUgZnVuY3Rpb24uPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5nbG9iYWwucmVxdWlyZSA9IHJlcXVpcmU7XFxuZ2xvYmFsLmV4cG9ydHMgPSBzZWxmLmV4cG9ydHM7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPjxhIGhyZWY9XFxcImh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZ2xvYmFscy5odG1sI2dsb2JhbHNfZ2xvYmFsXFxcIj5HbG9iYWwgb2JqZWN0PC9hPjwvcD5cXG48cD5UbyByZWNhcCB3aGVuIHlvdSB0eXBlIHJlcXVpcmUsIGpzIGVuZ2luZSByZXRyaWV2ZXMgZ2xvYmFsIG9iamVjdCBhbmQgbG9vayBmb3IgYSByZXF1aXJlIG5hbWVkIGZ1bmN0aW9uIGFuZCBmaW5kIGl0IDopPC9wPlxcbjxoMyBpZD1cXFwiZnVuY3Rpb25cXFwiPkZ1bmN0aW9uPC9oMz5cXG48cD48Y29kZT5yZXF1aXJlPC9jb2RlPiBmdW5jdGlvbiB0YWtlIGEgbm9uIGVtcHR5IHN0cmluZyBhcyBwYXJhbWV0ZXIsIGEgbmFtZSwgYSBwYXRoLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+Ly8gTG9hZHMgYSBtb2R1bGUgYXQgdGhlIGdpdmVuIGZpbGUgcGF0aC4gUmV0dXJucyB0aGF0IG1vZHVsZSYjMzk7c1xcbi8vIGBleHBvcnRzYCBwcm9wZXJ0eS5cXG5Nb2R1bGUucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbihwYXRoKSB7XFxuICBhc3NlcnQocGF0aCwgJiMzOTttaXNzaW5nIHBhdGgmIzM5Oyk7XFxuICBhc3NlcnQodXRpbC5pc1N0cmluZyhwYXRoKSwgJiMzOTtwYXRoIG11c3QgYmUgYSBzdHJpbmcmIzM5Oyk7XFxuICByZXR1cm4gTW9kdWxlLl9sb2FkKHBhdGgsIHRoaXMpO1xcbn07XFxuPC9jb2RlPjwvcHJlPlxcbjxoMyBpZD1cXFwiZXhhbXBsZVxcXCI+RXhhbXBsZTwvaDM+XFxuPHA+TGV0JiMzOTtzIHRha2UgYW4gZXhhbXBsZS48L3A+XFxuPHA+Li9tYWluLmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj52YXIgZGVwID0gcmVxdWlyZSgmIzM5Oy4vZGVwZW5kZW5jeSYjMzk7KTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+Li9kZXBlbmRlbmN5LmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5tb2R1bGUuZXhwb3J0cyA9ICYjMzk7SSBsb3ZlIEpTJiMzOTs7XFxuPC9jb2RlPjwvcHJlPlxcbjxoMyBpZD1cXFwibG9hZGVyLXJvdXRpbmVzXFxcIj5Mb2FkZXIgcm91dGluZXM8L2gzPlxcbjxwPk1vZHVsZSB3ZSBmaXJzdCB0cnkgdG8gbG9jYXRlIHRoZSBmaWxlIGNvbnRhaW5pbmcgeW91ciBjb2RlICYjMzk7ZGVwZW5kZW5jeSYjMzk7IG1vZHVsZS48L3A+XFxuPHA+TG9hZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCAzIHBhcmFtZXRlcnM8L3A+XFxuPHVsPlxcbjxsaT5yZXF1ZXN0IDogaGVyZSAmIzM5O2RlcGVuZGVuY3kmIzM5OzwvbGk+XFxuPGxpPnBhcmVudDogbnVsbCBpZiByb290IG1vZHVsZTwvbGk+XFxuPGxpPmlzTWFpbjogbWFpbiByb290IGZpbGU8L2xpPlxcbjwvdWw+XFxuPHA+SGVyZSBteSBjb21tZW50cyBhYm91dCBpdDo8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPk1vZHVsZS5fbG9hZCA9IGZ1bmN0aW9uKHJlcXVlc3QsIHBhcmVudCwgaXNNYWluKSB7XFxuICAvLyAxJmd0OyByZXNvbHZlIGZpbGVuYW1lIGFuZCBsb29rIGZvciBhYnNvbHV0ZSBwYXRoIG9mIGZpbGVcXG4gIHZhciBmaWxlbmFtZSA9IE1vZHVsZS5fcmVzb2x2ZUZpbGVuYW1lKHJlcXVlc3QsIHBhcmVudCk7XFxuICAvLyAyJmd0OyBjaGVjayBpbiBjYWNoZSBieSBpZCBhbmQgcmV0dXJuIGl0IGlmIGZvdW5kXFxuICB2YXIgY2FjaGVkTW9kdWxlID0gTW9kdWxlLl9jYWNoZVtmaWxlbmFtZV07XFxuICBpZiAoY2FjaGVkTW9kdWxlKSB7XFxuICAgIHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcXG4gIH1cXG4gIC8vIDMmZ3Q7IGNoZWNrIGlmIG5hdGl2ZSBtb2R1bGUgYW5kIGNvbXBpbGUgaXQgYW5kIHJldHVybiBpdCBpZiBuZWVkZWQsIGV4YW1wbGUgcmVxdWlyZSgmIzM5O2ZzJiMzOTspO1xcbiAgaWYgKE5hdGl2ZU1vZHVsZS5leGlzdHMoZmlsZW5hbWUpKSB7XFxuICAgIC8vIGRvIHNvbWUgY29tcGlsIHN0dWZmXFxuICB9XFxuICAvLyA0Jmd0OyBjcmVhdGUgbmV3IG1vZHVsZSB3aXRoIHJlZmVyZW5jZSB0byBwYXJlbnQgTW9kdWxlXFxuICB2YXIgbW9kdWxlID0gbmV3IE1vZHVsZShmaWxlbmFtZSwgcGFyZW50KTtcXG4gIC8vIDUmZ3Q7IHB1dCBpdCBpbiBjYWNoZVxcbiAgTW9kdWxlLl9jYWNoZVtmaWxlbmFtZV0gPSBtb2R1bGU7XFxuICAvLyA2Jmd0OyB0aGUgTU9TVCBpbnRlcmVzdGluZyBwYXJ0LCBsb2FkIG1vZHVsZSBzb3VyY2UgY29kZVxcbiAgdHJ5IHtcXG4gICAgbW9kdWxlLmxvYWQoZmlsZW5hbWUpO1xcbiAgICBoYWRFeGNlcHRpb24gPSBmYWxzZTtcXG4gIH0gZmluYWxseSB7XFxuICAgIGlmIChoYWRFeGNlcHRpb24pIHtcXG4gICAgICBkZWxldGUgTW9kdWxlLl9jYWNoZVtmaWxlbmFtZV07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIDcmZ3Q7IHNlbmQgZXhwb3J0cyBvYmplY3RcXG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cztcXG59XFxuPC9jb2RlPjwvcHJlPlxcbjxoMyBpZD1cXFwiZm9jdXNcXFwiPkZvY3VzPC9oMz5cXG48cD5NZXRob2QgdG8gbG9vayBmb3IgPGNvZGU+ZGVwZW5kZW5jeTwvY29kZT4gc291cmNlIGNvZGUuPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5Nb2R1bGUuX3Jlc29sdmVGaWxlbmFtZSA9IGZ1bmN0aW9uKHJlcXVlc3QsIHBhcmVudCkge1xcbiAvLyBpbnRlcm5hbCBzdHVmZiB0byBjb21wdXRlIHBhdGhcXG4gcmV0dXJuIGZpbGVuYW1lOyAvLyBleGFtcGxlIGhlcmUgL215cGF0aC9teXByb2plY3QvZGVwZW5kZW5jeS5qc1xcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+VGhlIGxvYWQgZnVuY3Rpb24uPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5Nb2R1bGUucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmaWxlbmFtZSkge1xcbi4uLlxcbiAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xcbiAgdGhpcy5wYXRocyA9IE1vZHVsZS5fbm9kZU1vZHVsZVBhdGhzKHBhdGguZGlybmFtZShmaWxlbmFtZSkpO1xcbiAgLy8gJnF1b3Q7L215cGF0aC9teXByb2plY3Qvbm9kZV9tb2R1bGVzJnF1b3Q7XFxuICAvLyAmcXVvdDsvbXlwYXRoL25vZGVfbW9kdWxlcyZxdW90O1xcbiAgLy8gJnF1b3Q7L25vZGVfbW9kdWxlcyZxdW90O1xcblxcbiAgdmFyIGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShmaWxlbmFtZSkgfHwgJiMzOTsuanMmIzM5OztcXG4gIC8vIDEmZ3Q7IGJ5IGRlZmF1bHQgb25seSAuanMsIC5qc29uLCAubm9kZSB0eXBlcyBhcmUgaGFuZGxlZCBieSBtb2R1bGUgbG9hZGVyXFxuICBpZiAoIU1vZHVsZS5fZXh0ZW5zaW9uc1tleHRlbnNpb25dKSBleHRlbnNpb24gPSAmIzM5Oy5qcyYjMzk7O1xcbiAgLy8gMiZndDsgaGVyZSBqcyBleHRlbnNpb25zIGlzIHVzZWQgdG8gbG9hZCBkZXBlbmRlbmN5LmpzXFxuICBNb2R1bGUuX2V4dGVuc2lvbnNbZXh0ZW5zaW9uXSh0aGlzLCBmaWxlbmFtZSk7XFxuICB0aGlzLmxvYWRlZCA9IHRydWU7XFxufTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+VGhlbiBoZXJlIHdlIGdvLCB3ZSBoYXZlIGZpbGVuYW1lIHBhdGguPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4vLyBOYXRpdmUgZXh0ZW5zaW9uIGZvciAuanNcXG5Nb2R1bGUuX2V4dGVuc2lvbnNbJiMzOTsuanMmIzM5O10gPSBmdW5jdGlvbihtb2R1bGUsIGZpbGVuYW1lKSB7XFxuICAvLyAxJmd0OyBsb2FkIGZpbGUgY29udGVudCBvZiAmIzM5O2RlcGVuZGVuY3kuanMmIzM5O1xcbiAgdmFyIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICYjMzk7dXRmOCYjMzk7KTtcXG4gIC8vIDImZ3Q7IGNvbXBpbGUgaXRcXG4gIG1vZHVsZS5fY29tcGlsZShzdHJpcEJPTShjb250ZW50KSwgZmlsZW5hbWUpO1xcbn07XFxuPC9jb2RlPjwvcHJlPlxcbjxwPkNvbXBpbGVyIHJvdXRpbmU8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPk1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUgPSBmdW5jdGlvbihjb250ZW50LCBmaWxlbmFtZSkge1xcbiAgLy8gaGVyZSBjb250ZW50IGlzIGEgbXkgZGVwZW5kZW5jeS5qcyBmaWxlIGluIGEgc3RyaW5nIDpcXG4gIC8vICZxdW90O21vZHVsZS5leHBvcnRzID0gJiMzOTtJIGxvdmUgSlMmIzM5OzsmcXVvdDtcXG4gIC8vIGZpbGVuYW1lXFxuICAvLyAvbXlwYXRoL215cHJvamVjdC9kZXBlbmRlbmN5LmpzXFxuICAvLyAuLi5cXG4gIC8vIHNvbWUgc3R1ZmZcXG4gIC8vIC4uLlxcbiAgLy8gcmV0cmlldmUgbW9kdWxlcyBjYWNoZVxcbiAgcmVxdWlyZS5jYWNoZSA9IE1vZHVsZS5fY2FjaGU7XFxuICAvLyBoZXJlIGNvbWUgdGhlIHRyaWNreSBwYXJ0XFxuICAvLyAqKioqKioqKiBJTVBPUlRBTlQgKioqKioqKioqXFxuICAvLyBjcmVhdGUgYSB3cmFwcGVyIGZ1bmN0aW9uIGFzIHN0cmluZ1xcbiAgdmFyIHdyYXBwZXIgPSBNb2R1bGUud3JhcChjb250ZW50KTtcXG4gIC8vIGl0IHdpbGwgZ2l2ZXMgdGhlIGZvbGxvd2luZyBhbm9ueW1vdXMgZnVuY3Rpb25cXG4gIC8vIE5PVEU6IGl0IGlzIGEgc2ltcGxlIFNUUklOR1xcbiAgLy9cXG4gIC8vICZxdW90OyhmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgXFxuICAvLyAgbW9kdWxlLmV4cG9ydHMgPSAmIzM5O0kgbG92ZSBKUyYjMzk7O1xcbiAgLy8gfSk7JnF1b3Q7XFxuICAvL1xcbiAgLy8gVGhhdCBpcyBob3cgbWFnaWMgaGFwcGVucyBhbmQgbW9kdWxlIGV4cG9ydHMgb2JqZWN0IGlzIGZpbGwsIGJ5IGEgc2ltcGxlIGFub255bW91cyBmdW5jdGlvbiB3cmFwcGVyXFxuICAvL1xcbiAgLy8gaGVyZSBhIGNhbGwgdG8gbmF0aXZlIGNvZGUgd2l0aCB0aGlzIGNvZGUsIGltYWdpbmUgZXZhbCgpIGZ1bmN0aW9uLlxcbiAgdmFyIGNvbXBpbGVkV3JhcHBlciA9IHJ1bkluVGhpc0NvbnRleHQod3JhcHBlciwgeyBmaWxlbmFtZTogZmlsZW5hbWUgfSk7XFxuICAvLyBub3cgd2UgaGF2ZSBhIHJlYWwganMgZnVuY3Rpb24sIGxldCYjMzk7cyBjYWxsIGl0XFxuICB2YXIgYXJncyA9IFtzZWxmLmV4cG9ydHMsIHJlcXVpcmUsIHNlbGYsIGZpbGVuYW1lLCBkaXJuYW1lXTtcXG4gIC8vIGZpbmlzaGluZyBieSBhcHBseWluZyBhYm92ZSB3cmFwcGVyIGZ1bmN0aW9uIG9uIGN1cnJlbnQgbW9kdWxlIHByZXZpb3VzbHkgY29tcGlsZWQuXFxuICByZXR1cm4gY29tcGlsZWRXcmFwcGVyLmFwcGx5KHNlbGYuZXhwb3J0cywgYXJncyk7XFxufVxcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImNvbmNsdXNpb25cXFwiPkNvbmNsdXNpb248L2gzPlxcbjx1bD5cXG48bGk+YSBkZXBlbmRlbmN5IGltcGx5IGEgbW9kdWxlIG9iamVjdDwvbGk+XFxuPGxpPmEgbG9hZGluZyBwcm9jZXNzdXMgbG9va3MgZm9yIHlvdSBjb2RlIGludG8gZmlsZTwvbGk+XFxuPGxpPmEgcmVxdWlyZSBjYWxsIGNoZWNrcyBmaXJzdCBpbiBjYWNoZSwgb3RoZXJ3aXNlIGxvYWQgaW50byBjYWNoZS48L2xpPlxcbjxsaT5hIGNvbXBpbGF0aW9uIHBoYXNlIGludm9sdmVkIGFuIGFub255bW91cyBmdW5jdGlvbiB0aGF0IHdyYXBzIHlvdXIgbW9kdWxlIGNvZGUgd2l0aCAzIG1haW4gcGFyYW1zIChleHBvcnRzLHJlcXVpcmUsbW9kdWxlKS4gQnkgZXhlY3V0aW5nIHRoaXMgZnVuY3Rpb24sIDxjb2RlPmV4cG9ydHM8L2NvZGU+IE1vZHVsZSBvYmplY3QgYXR0cmlidXRlIGlzIGZpbGwuPC9saT5cXG48bGk+YXQgdGhlIGVuZCBvZiBsb2FkaW5nIHByb2Nlc3MgaXQgcmV0dXJucyB5b3VyIG1vZHVsZSA8Y29kZT5leHBvcnRzPC9jb2RlPiBhdHRyaWJ1dGUuPC9saT5cXG48L3VsPlxcbjxoMyBpZD1cXFwicmVzdWx0XFxcIj5SZXN1bHQ8L2gzPlxcbjxwPllvdXIgY29tcGlsZWQgY29kZSBsb29rcyBsaWtlOjwvcD5cXG48cD4uL21haW4uanM8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPihmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcXG4gIHZhciBkZXAgPSByZXF1aXJlKCYjMzk7Li9kZXBlbmRlbmN5JiMzOTspO1xcbn0pO1xcbjwvY29kZT48L3ByZT5cXG48cD4uL2RlcGVuZGVuY3kuanM8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPihmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgXFxuICBtb2R1bGUuZXhwb3J0cyA9ICYjMzk7SSBsb3ZlIEpTJiMzOTs7XFxufSk7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPllvdSBjYW4gaW1hZ2luZSB0aGUgZm9sbG93aW5nPC9wPlxcbjxwPi4vbWFpbi5qczwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+KGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkge1xcbiAgLi9kZXBlbmRlbmN5LmpzXFxuICB2YXIgZGVwID0gKGZ1bmN0aW9uIChleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUsIF9fZmlsZW5hbWUsIF9fZGlybmFtZSkgeyBcXG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzID0gJiMzOTtJIGxvdmUgSlMmIzM5OztcXG4gIH0pO1xcbn0pO1xcbjwvY29kZT48L3ByZT5cXG48cD5JZiB5b3Ugd2FudCB0byBsb29rIGZ1cnRoZXIsIHdyaXRlIGEgc21hbGwgdGVzdCBhbmQgZGVidWcgaXQuPC9wPlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wb3N0cy8yMDE1LzIwMTUtMDYtMzBfbm9kZWpzLXJlcXVpcmUtbW9kdWxlLm1kXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogJ0hpZ2hlciBPcmRlciBDb21wb25lbnQnIHRoYXQgY29udHJvbHMgdGhlIHByb3BzIG9mIGEgd3JhcHBlZFxuICogY29tcG9uZW50IHZpYSBzdG9yZXMuXG4gKlxuICogRXhwZWN0cyB0aGUgQ29tcG9uZW50IHRvIGhhdmUgdHdvIHN0YXRpYyBtZXRob2RzOlxuICogICAtIGdldFN0b3JlcygpOiBTaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHN0b3Jlcy5cbiAqICAgLSBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpOiBTaG91bGQgcmV0dXJuIHRoZSBwcm9wcyBmcm9tIHRoZSBzdG9yZXMuXG4gKlxuICogRXhhbXBsZSB1c2luZyBvbGQgUmVhY3QuY3JlYXRlQ2xhc3MoKSBzdHlsZTpcbiAqXG4gKiAgICBjb25zdCBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICAgc3RhdGljczoge1xuICogICAgICAgIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICAgIH0sXG4gKiAgICAgICAgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH0pXG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKlxuICogRXhhbXBsZSB1c2luZyBFUzYgQ2xhc3M6XG4gKlxuICogICAgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICAgICBzdGF0aWMgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICB9XG4gKiAgICAgIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9XG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKiBBIGdyZWF0IGV4cGxhbmF0aW9uIG9mIHRoZSBtZXJpdHMgb2YgaGlnaGVyIG9yZGVyIGNvbXBvbmVudHMgY2FuIGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vYml0Lmx5LzFhYlBrclBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9mdW5jdGlvbnMgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9TdG9yZXMoQ29tcG9uZW50KSB7XG4gIC8vIENoZWNrIGZvciByZXF1aXJlZCBzdGF0aWMgbWV0aG9kcy5cbiAgaWYgKCEoMCwgX2Z1bmN0aW9ucy5pc0Z1bmN0aW9uKShDb21wb25lbnQuZ2V0U3RvcmVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdFRvU3RvcmVzKCkgZXhwZWN0cyB0aGUgd3JhcHBlZCBjb21wb25lbnQgdG8gaGF2ZSBhIHN0YXRpYyBnZXRTdG9yZXMoKSBtZXRob2QnKTtcbiAgfVxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG5cbiAgLy8gV3JhcHBlciBDb21wb25lbnQuXG4gIHZhciBTdG9yZUNvbm5lY3Rpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3RvcmVDb25uZWN0aW9uJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS5saXN0ZW4oX3RoaXMub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzdG9yZXMgPSBDb21wb25lbnQuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICBzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgc3RvcmUudW5saXN0ZW4oX3RoaXMyLm9uQ2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9mdW5jdGlvbnMuYXNzaWduKSh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN0b3JlQ29ubmVjdGlvbjtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29ubmVjdFRvU3RvcmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lYWNoT2JqZWN0ID0gZWFjaE9iamVjdDtcbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gZWFjaE9iamVjdChmLCBvKSB7XG4gIG8uZm9yRWFjaChmdW5jdGlvbiAoZnJvbSkge1xuICAgIE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmKGtleSwgZnJvbVtrZXldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZWFjaE9iamVjdChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9LCBzb3VyY2UpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyTWVudS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyTWVudS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXJNZW51LnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXJNZW51LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbiAgSEFNQlVSR0VSIElDT05TIENPTVBPTkVOVFxcblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyoqXFxuICogVG9nZ2xlIFN3aXRjaCBHbG9iYWxzXFxuICpcXG4gKiBBbGwgc3dpdGNoZXMgc2hvdWxkIHRha2Ugb24gdGhlIGNsYXNzIGBjLWhhbWJ1cmdlcmAgYXMgd2VsbCBhcyB0aGVpclxcbiAqIHZhcmlhbnQgdGhhdCB3aWxsIGdpdmUgdGhlbSB1bmlxdWUgcHJvcGVydGllcy4gVGhpcyBjbGFzcyBpcyBhbiBvdmVydmlld1xcbiAqIGNsYXNzIHRoYXQgYWN0cyBhcyBhIHJlc2V0IGZvciBhbGwgdmVyc2lvbnMgb2YgdGhlIGljb24uXFxuICovXFxuLmMtaGFtYnVyZ2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHRvcDogNSU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHotaW5kZXg6IDUwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXIuZWRpdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7IH1cXG5cXG4uYy1oYW1idXJnZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5jLWhhbWJ1cmdlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxM3B4O1xcbiAgbGVmdDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cXG5cXG4uYy1oYW1idXJnZXIgc3Bhbjo6YmVmb3JlLFxcbi5jLWhhbWJ1cmdlciBzcGFuOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuXFxuLmMtaGFtYnVyZ2VyIHNwYW46OmJlZm9yZSB7XFxuICB0b3A6IC01cHg7IH1cXG5cXG4uYy1oYW1idXJnZXIgc3Bhbjo6YWZ0ZXIge1xcbiAgYm90dG9tOiAtNXB4OyB9XFxuXFxuLyoqXFxuICogU3R5bGUgMVxcbiAqXFxuICogUm90YXRpbmcgaGFtYnVyZ2VyIGljb24gKHJvdCksIHRoYXQgc2ltcGx5IHJvdGF0ZXMgOTAgZGVncmVlcyB3aGVuIGFjdGl2YXRlZC5cXG4gKiBOb3RoaW5nIHRvbyBmYW5jeSwgc2ltcGxlIHRyYW5zaXRpb24uXFxuICovXFxuLmMtaGFtYnVyZ2VyLS1yb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NEUzQztcXG4gIHotaW5kZXg6IDEwMTsgfVxcblxcbi5jLWhhbWJ1cmdlci0tcm90IHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG5cXG4vKiBhY3RpdmUgc3RhdGUsIGkuZS4gbWVudSBvcGVuICovXFxuLmMtaGFtYnVyZ2VyLS1yb3QuaXMtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MTA7IH1cXG5cXG4uYy1oYW1idXJnZXItLXJvdC5pcy1hY3RpdmUgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cXG5cXG4vKipcXG4gKiBTdHlsZSAyXFxuICpcXG4gKiBIYW1idXJnZXIgdG8gXFxcInhcXFwiIChodHgpLiBUYWtlcyBvbiBhIGhhbWJ1cmdlciBzaGFwZSwgYmFycyBzbGlkZVxcbiAqIGRvd24gdG8gY2VudGVyIGFuZCB0cmFuc2Zvcm0gaW50byBhbiBcXFwieFxcXCIuXFxuICovXFxuLmMtaGFtYnVyZ2VyLS1odHgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdEQzBERTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4IHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcyAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHggc3Bhbjo6YmVmb3JlLFxcbi5jLWhhbWJ1cmdlci0taHR4IHNwYW46OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3MsIDAuM3M7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzLCAwczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4IHNwYW46OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIHRyYW5zZm9ybTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4IHNwYW46OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XFxuXFxuLyogYWN0aXZlIHN0YXRlLCBpLmUuIG1lbnUgb3BlbiAqL1xcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHNwYW4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlLFxcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4zczsgfVxcblxcbi8qKlxcbiAqIFN0eWxlIDNcXG4gKlxcbiAqIEhhbWJ1cmdlciB0byBsZWZ0LWFycm93IChodGxhKS4gSGFtYnVyZ2VyIG1lbnUgdHJhbnNmb3JtcyB0byBhIGxlZnQtcG9pbnRpbmdcXG4gKiBhcnJvdy4gVXN1YWxseSBpbmRpY2F0ZXMgYW4gb2ZmIGNhbnZhcyBtZW51IHNsaWRpbmcgaW4gZnJvbSBsZWZ0IHRoYXRcXG4gKiB3aWxsIGJlIGNsb3NlIG9uIHJlLWNsaWNrIG9mIHRoZSBpY29uLlxcbiAqL1xcbi5jLWhhbWJ1cmdlci0taHRsYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJkYzY0OyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhIHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEgc3Bhbjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB3aWR0aCAwLjNzLCB0b3AgMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYSBzcGFuOjphZnRlciB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgd2lkdGggMC4zcywgYm90dG9tIDAuM3M7IH1cXG5cXG4vKiBhY3RpdmUgc3RhdGUsIGkuZS4gbWVudSBvcGVuICovXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MDNiOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHNwYW46OmJlZm9yZSxcXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHNwYW46OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTFweCkgdHJhbnNsYXRlWSgxcHgpIHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMXB4KSB0cmFuc2xhdGVZKC0xcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLyoqXFxuICogU3R5bGUgNFxcbiAqXFxuICogSGFtYnVyZ2VyIHRvIHJpZ2h0LWFycm93IChodHJhKS4gSGFtYnVyZ2VyIG1lbnUgdHJhbnNmb3JtcyB0byBhXFxuICogcmlnaHQtcG9pbnRpbmcgYXJyb3cuIFVzdWFsbHkgaW5kaWNhdGVzIGFuIG9mZiBjYW52YXMgbWVudSBzbGlkaW5nIGluIGZyb21cXG4gKiByaWdodCB0aGF0IHdpbGwgYmUgY2xvc2Ugb24gcmUtY2xpY2sgb2YgdGhlIGljb24uXFxuICovXFxuLmMtaGFtYnVyZ2VyLS1odHJhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk2NTA7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEgc3BhbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYSBzcGFuOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgd2lkdGggMC4zcywgdG9wIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEgc3Bhbjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgd2lkdGggMC4zcywgYm90dG9tIDAuM3M7IH1cXG5cXG4vKiBhY3RpdmUgc3RhdGUsIGkuZS4gbWVudSBvcGVuICovXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk1ZDAwOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHNwYW46OmJlZm9yZSxcXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHNwYW46OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgxcHgpIHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtMXB4KSByb3RhdGUoNDVkZWcpOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzUwcHgsIDAsIDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDM1MHB4LCAwLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzNTBweCwgMCwgMCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMjA7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFQkI2NDk7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDcwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNTUsIDAuNjA1LCAwLjE4LCAxKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE1NSwgMC42MDUsIDAuMTgsIDEuMDU1KTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE1NSwgMC42MDUsIDAuMTgsIDEuMDU1KTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNTUsIDAuNjA1LCAwLjE4LCAxLjA1NSk7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTU1LCAwLjYwNSwgMC4xOCwgMS4wNTUpOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpIGEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNGMkVGRUY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkgYS5sb2dvaXplOmhvdmVyIHtcXG4gIGNvbG9yOiAjRjJFRkVGO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5zcGFjZXIge1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjQUFBNkE2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbm5hdiNvdmVybG9yZC5vdmVybG9yZF9hY3RpdmUgdWwjZHJvcGRvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24ub25ibG9nIGxpIGEge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNGMkVGRUY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24ub25ibG9nIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6ICNBQUE2QTY7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuZHJvcGRvd25fbWVzc2FnZSB7XFxuICBtYXgtd2lkdGg6IDE3MHB4OyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLmRyb3Bkb3duX21lc3NhZ2UgYSB7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLmRyb3Bkb3duX21lc3NhZ2UgYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLmRyb3Bkb3duX21lc3NhZ2UgYTpob3ZlciBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuZHJvcGRvd25fbWVzc2FnZSBhIHNwYW4ge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LWZhbWlseTogJ2ZyZWlnaHQtc2Fucy1wcm8nLHNhbnMtc2VyaWY7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXJNZW51LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuLy8gXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCgpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXFxubGkgYSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjODg4OyB9XFxuXFxuZGl2LmhlYWRlciAjdXNlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDE0MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNmMGYwZjA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5kaXYuaGVhZGVyICN1c2VyIGgyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGNvbG9yOiAjNDc0RTNDO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiAnZnJlaWdodC1zYW5zLXBybycsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG5kaXYuaGVhZGVyICN1c2VyIGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgY29sb3I6ICM1OTYyNEQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG5cXG5kaXYuaGVhZGVyICN1c2VyLWxvZ28ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTEwcHggMTEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5QkE0NTA7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cXG5cXG51bCN1c2VyLWxpbmtzIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG51bCN1c2VyLWxpbmtzIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzRVRLVy1wLmpwZ1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbWFnZXMvcGljdHVyZS5qcGdcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fRm9vdGVyLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2doYnRucy5jb20vZ2l0aHViLWJ0bi5odG1sP3VzZXI9ZGFydWw3NSZyZXBvPXdlYi1yZWFjdCZ0eXBlPXN0YXImY291bnQ9dHJ1ZSZ2PTInIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9JzAnIHdpZHRoPScxNzBweCcgaGVpZ2h0PScyMHB4Jz48L2lmcmFtZT5cbiAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9Zm9yayZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Gb290ZXIucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0Zvb3Rlcic7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcblxuLy8gVE9ETzogZG8gaXQgaW4gc3RvcmUgbWF5YmVcbmNvbnN0IG1ldGFzID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJykuaGVsbWV0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sSGVhZGVyVGFncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gRE9NIDxoZWFkPiBpbnN0cnVtZW50YXRpb25cbiAgICBsZXQgdGl0bGVUZW1wbGF0ZSA9ICclcyB8IEp1bGllbiBWYWzDqXJ5JztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IG1ldGE9e21ldGFzLm1ldGF9IGxpbms9e21ldGFzLmxpbmt9IHRpdGxlVGVtcGxhdGU9e3RpdGxlVGVtcGxhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkh0bWxIZWFkZXJUYWdzLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIdG1sSGVhZGVyVGFncyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udDogMTAwJSBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2FhYTsgfVxcblxcbmgxLCBoMiwgaDMge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiAjMEMxNzIzOyB9XFxuXFxuaDEgYSwgaDIgYSwgaDMgYSwgaDQgYSwgaDUgYSwgaDYgYSB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDsgfVxcblxcbmgxIGE6aG92ZXIge1xcbiAgY29sb3I6ICNERjRBN0Y7IH1cXG5cXG51bCB7XFxuICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XFxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMDsgfVxcbiAgdWwgbGkge1xcbiAgICBjb2xvcjogIzE2NzdBQTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjNEQ0RDREO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJ1dHRvbi5idXR0b25pemUsIGEuYnV0dG9uaXplIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZS5zbWFsbCwgYS5idXR0b25pemUuc21hbGwge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJ1dHRvbi5idXR0b25pemUudGlueSwgYS5idXR0b25pemUudGlueSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZTpob3ZlciwgYS5idXR0b25pemU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5hLCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxcblxcbmE6bGluaywgYTp2aXNpdGVkLCBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cXG5cXG51bCN1c2VyLWxpbmtzIGxpIGE6aG92ZXIsIGEuYnV0dG9uaXplOmhvdmVyLCBidXR0b24uYnV0dG9uaXplOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERjRBN0Y7XFxuICBib3JkZXItY29sb3I6ICNERjRBN0Y7IH1cXG5cXG5ociB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjbGVhcjogYm90aDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY2xlYXI6IGJvdGg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2Y0ZjNmMzsgfVxcblxcbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgZnJvbSBodHRwczovL3Njb3RjaC5pby9xdWljay10aXBzL2RlZmF1bHQtc2l6ZXMtZm9yLXR3aXR0ZXItYm9vdHN0cmFwcy1tZWRpYS1xdWVyaWVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiA3NTBweDsgfSB9XFxuXFxuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiA3NTBweDsgfSB9XFxuXFxuLyogTGFyZ2UgRGV2aWNlcywgV2lkZSBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogNzUwcHg7IH0gfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNPTlRBQ1QgUEFHRTwvaDE+XG4gICAgICAgIDxwPnRlc3QgdGhlIDQwNCBwYWdlIDxhIGhyZWY9Jy9taWRkbGVvZm5vd2hlcmUnPmhlcmU8L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgY29ubmVjdFRvU3RvcmVzIGZyb20gJ2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMnO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9Qb3N0L1Bvc3RJdGVtJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSG9tZVNlY3Rpb24uc2NzcycpO1xufVxuXG5sZXQgaG9tZVNlY3Rpb24gPSBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gcmV0cmlldmUgZGF0YSBmcm9tIHN0b3JlXG4gICAgbGV0IHBvc3RzID0gSG9tZVNlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCkucG9zdHM7XG4gICAgbGV0IHBvc3RJdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBwb3N0cykge1xuICAgICAgbGV0IGtleUhyID0gJ2hyJyArIGtleTtcbiAgICAgIHBvc3RJdGVtcy5wdXNoKDxociBrZXk9e2tleUhyfSAvPik7XG4gICAgICBwb3N0SXRlbXMucHVzaCg8UG9zdEl0ZW0ga2V5PXtrZXl9IHBvc3Q9e3Bvc3RzW2tleV19IC8+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgIHtwb3N0SXRlbXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XG4gICAgcmV0dXJuIFtBcHBTdG9yZV07XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0czogQXBwU3RvcmUuZ2V0U3RhdGUoKS5wb3N0c1xuICAgIH07XG4gIH1cbn07XG5cbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyhob21lU2VjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgY29ubmVjdFRvU3RvcmVzIGZyb20gJ2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMnO1xuXG5sZXQgcHJpc20gPSByZXF1aXJlKCdwcmlzbWpzJyk7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1Bvc3RJdGVtLnNjc3MnKTtcbiAgcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2pzL3ByaXNtL3ByaXNtLmNzcycpO1xufVxuXG5sZXQgcG9zdEl0ZW0gPSBjbGFzcyBQb3N0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHByaXNtLmhpZ2hsaWdodEFsbCgoKSA9PiB7fSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcykge1xuICAgICAgICAvKmVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGxldCBkaXNxdXNfc2hvcnRuYW1lID0gJ2RhcnVsJzsgICAgICBcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRzcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOyBkc3EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyBkc3EuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgZHNxLnNyYyA9ICcvLycgKyBkaXNxdXNfc2hvcnRuYW1lICsgJy5kaXNxdXMuY29tL2VtYmVkLmpzJztcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKGRzcSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJpc20uaGlnaGxpZ2h0QWxsKCgpID0+IHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zdCA9IHRoaXMucHJvcHMucG9zdCxcbiAgICAgICAgZGlzcXVzTWFya3VwID0gJycsXG4gICAgICAgIG1hcmtkb3duQ2xhc3MgPSAnbWFya2Rvd24tYm9keSBoaWdobGlnaHQgcHJldmlldycsXG4gICAgICAgIG1vcmVCdXR0b24gPSAnJyxcbiAgICAgICAgYmFja0J1dHRvbiA9ICcnLFxuICAgICAgICB0aW1lID0gJycsXG4gICAgICAgIGVkaXRVcmwgPSAnJyxcbiAgICAgICAgaGVsbWV0TWFya3VwID0gJycsXG4gICAgICAgIGVkaXRCdXR0b25NYXJrdXAgPSAnJztcblxuICAgIGlmIChwb3N0KSB7XG4gICAgICBtb3JlQnV0dG9uID0gPExpbmsgY2xhc3NOYW1lPSdidXR0b25pemUgc21hbGwnIHRvPXsnL3Bvc3QvJyArIHBvc3QucGVybWFsaW5rfT5Db250aW51ZSByZWFkaW5nIOKGkjwvTGluaz47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucGFyYW1zKSB7XG4gICAgICBtYXJrZG93bkNsYXNzID0gJ21hcmtkb3duLWJvZHkgaGlnaGxpZ2h0JztcbiAgICAgIC8vIGZyb20gc3RvcmVcbiAgICAgIGxldCBwb3N0cyA9IFBvc3RJdGVtLmdldFByb3BzRnJvbVN0b3JlcygpLnBvc3RzO1xuICAgICAgbGV0IHBvc3RJZCA9IHRoaXMucHJvcHMucGFyYW1zLnBvc3RJZDtcbiAgICAgIGxldCB0aXRsZSA9IFBvc3RJdGVtLmdldFByb3BzRnJvbVN0b3JlcygpLmNvbmZpZy5oZWxtZXQudGl0bGU7XG4gICAgICAvLyBmaW5kIGJ5IHBlcm1hbGlua1xuICAgICAgcG9zdCA9IF8uZmluZChwb3N0cywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5wZXJtYWxpbmsgPT09IHBvc3RJZDtcbiAgICAgIH0pO1xuXG4gICAgICB0aW1lID0gPHRpbWUgZGF0ZVRpbWU9e3Bvc3QuZGF0ZS50b1N0cmluZygpfT57cG9zdC5kYXRlfTwvdGltZT47XG4gICAgICBsZXQgaG9tZXBhZ2UgPSBQb3N0SXRlbS5nZXRQcm9wc0Zyb21TdG9yZXMoKS5wYWNrYWdlanNvbi5ob21lcGFnZTtcbiAgICAgIGVkaXRVcmwgPSBob21lcGFnZSArICcvZWRpdC9tYXN0ZXIvcG9zdHMvMjAxNS8nICsgcG9zdC5maWxlbmFtZTtcbiAgICAgIGVkaXRCdXR0b25NYXJrdXAgPSA8YSBocmVmPXtlZGl0VXJsfSB0YXJnZXQ9J19ibGFuaycgdGl0bGU9J2VkaXQgbWUnPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYy1oYW1idXJnZXIgZWRpdGlvbicgaHJlZj17ZWRpdFVybH0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgIDxzcGFuPmVkaXRpb248L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9hPjtcbiAgICAgIGxldCB0ZW1wbGF0ZVRpdGxlID0gJyVzIHwgJyArIHBvc3QudGl0bGU7XG4gICAgICBsZXQgcG9zdFRpdGxlID0gdGl0bGUgKyAnIHwgJyArIHBvc3QudGl0bGU7XG4gICAgICBoZWxtZXRNYXJrdXAgPSA8SGVsbWV0IHRpdGxlPXt0aXRsZX0gdGl0bGVUZW1wbGF0ZT17dGVtcGxhdGVUaXRsZX0gbWV0YT17W1xuICAgICAgICB7J25hbWUnOiAnZGVzY3JpcHRpb24nLCAnY29udGVudCc6IHBvc3RUaXRsZX0sXG4gICAgICAgIHsncHJvcGVydHknOiAnb2c6dHlwZScsICdjb250ZW50JzogJ2FydGljbGUnfVxuICAgICAgXX0gLz47XG5cbiAgICAgIGRpc3F1c01hcmt1cCA9IDxkaXYgaWQ9J2Rpc3F1c190aHJlYWQnPjwvZGl2PjtcbiAgICAgIGJhY2tCdXR0b24gPSA8TGluayBjbGFzc05hbWU9J2J1dHRvbml6ZSBzbWFsbCcgdG89eycvJ30+SG9tZTwvTGluaz47XG5cbiAgICAgIC8vcHJldmlld0NsYXNzID0gJyc7XG5cbiAgICAgIC8vIGlmICghcG9zdCkge1xuICAgICAgLy8gICB0b2RvIHJlZGlyZWN0XG4gICAgICAvLyB9XG4gICAgfVxuICAgIC8vIHBhcmFtXG4gICAgbGV0IHBvc3RQZXJtYWxpbmsgPSAnL3Bvc3QvJyArIHBvc3QucGVybWFsaW5rO1xuICAgIGxldCBhcnRpY2xlQ29udGFpbmVyQ2xhc3MgPSAncG9zdCAnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2FydGljbGVDb250YWluZXJDbGFzc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcmtkb3duLWJvZHknPlxuICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2VkaXRCdXR0b25NYXJrdXB9XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPExpbmsgdG89e3Bvc3RQZXJtYWxpbmt9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXJrZG93bkNsYXNzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5ib2R5fX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICAgICAge21vcmVCdXR0b259XG4gICAgICAgICAgICB7YmFja0J1dHRvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aGVsbWV0TWFya3VwfVxuICAgICAgICAgIHtkaXNxdXNNYXJrdXB9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JlcygpIHtcbiAgICByZXR1cm4gW0FwcFN0b3JlXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogQXBwU3RvcmUuZ2V0U3RhdGUoKS5jb25maWcsXG4gICAgICBwb3N0czogQXBwU3RvcmUuZ2V0U3RhdGUoKS5wb3N0cyxcbiAgICAgIHBhY2thZ2Vqc29uOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBhY2thZ2Vqc29uXG4gICAgfTtcbiAgfVxufTtcblxucG9zdEl0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1Bvc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvU3RvcmVzKHBvc3RJdGVtKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvUG9zdC9Qb3N0SXRlbS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInByaXNtanNcIlxuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Qb3N0SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fUG9zdEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fUG9zdEl0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Qb3N0L19Qb3N0SXRlbS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYXJ0aWNsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5hcnRpY2xlLnBvc3QgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMHB4OyB9XFxuXFxuYXJ0aWNsZS5wb3N0IHAge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cXG5cXG5hcnRpY2xlIC5tYXJrZG93bi1ib2R5IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMWUxZTE7IH1cXG5cXG5hcnRpY2xlIC5tYXJrZG93bi1ib2R5IGE6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjRkYwMDQyOyB9XFxuXFxuYXJ0aWNsZSBoMSwgYXJ0aWNsZSBoMiwgYXJ0aWNsZSBoMywgYXJ0aWNsZSBoNCwgYXJ0aWNsZSBoNSwgYXJ0aWNsZSBoNiwgYXJ0aWNsZSBvbCwgYXJ0aWNsZSB1bCwgYXJ0aWNsZSB0YWJsZSwgYXJ0aWNsZSBibG9ja3F1b3RlLCBhcnRpY2xlIC5tYXJrZG93bi1ib2R5LCAuYnV0dG9ucyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1heC13aWR0aDogNzAwcHg7IH1cXG5cXG4ucHJldmlldyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogNDMwcHg7IH1cXG5cXG5kaXYubWFya2Rvd24tYm9keSBwOmZpcnN0LWNoaWxkOjpmaXJzdC1sZXR0ZXIge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogNXB4IDhweCAtOXB4IDA7XFxuICBjb2xvcjogI0RGNEE3RjsgfVxcblxcbmNvZGU6bm90KFtjbGFzc10pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUY2QkY7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvUG9zdC9fUG9zdEl0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3ByaXNtLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJpc20uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3ByaXNtLmNzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWw/dGhlbWVzPXByaXNtJmxhbmd1YWdlcz1tYXJrdXArY3NzK2NsaWtlK2phdmFzY3JpcHQrZ2l0K2dvJnBsdWdpbnM9bGluZS1udW1iZXJzICovXFxuLyoqXFxuICogcHJpc20uanMgZGVmYXVsdCB0aGVtZSBmb3IgSmF2YVNjcmlwdCwgQ1NTIGFuZCBIVE1MXFxuICogQmFzZWQgb24gZGFiYmxldCAoaHR0cDovL2RhYmJsZXQuY29tKVxcbiAqIEBhdXRob3IgTGVhIFZlcm91XFxuICovXFxuXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMXB4IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2U7XFxuXFx0ZGlyZWN0aW9uOiBsdHI7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlO1xcblxcdHdvcmQtc3BhY2luZzogbm9ybWFsO1xcblxcdHdvcmQtYnJlYWs6IG5vcm1hbDtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcblxcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0LW8tdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxuXFxuXFx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xcblxcdC1tb3otaHlwaGVuczogbm9uZTtcXG5cXHQtbXMtaHlwaGVuczogbm9uZTtcXG5cXHRoeXBoZW5zOiBub25lO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6LW1vei1zZWxlY3Rpb24sIHByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIDo6LW1vei1zZWxlY3Rpb24sXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOjotbW96LXNlbGVjdGlvbiwgY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIDo6LW1vei1zZWxlY3Rpb24ge1xcblxcdHRleHQtc2hhZG93OiBub25lO1xcblxcdGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIDo6c2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6c2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjpzZWxlY3Rpb24ge1xcblxcdHRleHQtc2hhZG93OiBub25lO1xcblxcdGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuXFx0Y29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcblxcdHByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRcXHR0ZXh0LXNoYWRvdzogbm9uZTtcXG5cXHR9XFxufVxcblxcbi8qIENvZGUgYmxvY2tzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcblxcdG1hcmdpbjogLjVlbSAwO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGJhY2tncm91bmQ6ICNmNWYyZjA7XFxufVxcblxcbi8qIElubGluZSBjb2RlICovXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAuMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4zZW07XFxufVxcblxcbi50b2tlbi5jb21tZW50LFxcbi50b2tlbi5wcm9sb2csXFxuLnRva2VuLmRvY3R5cGUsXFxuLnRva2VuLmNkYXRhIHtcXG5cXHRjb2xvcjogc2xhdGVncmF5O1xcbn1cXG5cXG4udG9rZW4ucHVuY3R1YXRpb24ge1xcblxcdGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4ubmFtZXNwYWNlIHtcXG5cXHRvcGFjaXR5OiAuNztcXG59XFxuXFxuLnRva2VuLnByb3BlcnR5LFxcbi50b2tlbi50YWcsXFxuLnRva2VuLmJvb2xlYW4sXFxuLnRva2VuLm51bWJlcixcXG4udG9rZW4uY29uc3RhbnQsXFxuLnRva2VuLnN5bWJvbCxcXG4udG9rZW4uZGVsZXRlZCB7XFxuXFx0Y29sb3I6ICM5MDU7XFxufVxcblxcbi50b2tlbi5zZWxlY3RvcixcXG4udG9rZW4uYXR0ci1uYW1lLFxcbi50b2tlbi5zdHJpbmcsXFxuLnRva2VuLmNoYXIsXFxuLnRva2VuLmJ1aWx0aW4sXFxuLnRva2VuLmluc2VydGVkIHtcXG5cXHRjb2xvcjogIzY5MDtcXG59XFxuXFxuLnRva2VuLm9wZXJhdG9yLFxcbi50b2tlbi5lbnRpdHksXFxuLnRva2VuLnVybCxcXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXFxuLnN0eWxlIC50b2tlbi5zdHJpbmcge1xcblxcdGNvbG9yOiAjYTY3ZjU5O1xcblxcdGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIC41KTtcXG59XFxuXFxuLnRva2VuLmF0cnVsZSxcXG4udG9rZW4uYXR0ci12YWx1ZSxcXG4udG9rZW4ua2V5d29yZCB7XFxuXFx0Y29sb3I6ICMwN2E7XFxufVxcblxcbi50b2tlbi5mdW5jdGlvbiB7XFxuXFx0Y29sb3I6ICNERDRBNjg7XFxufVxcblxcbi50b2tlbi5yZWdleCxcXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi52YXJpYWJsZSB7XFxuXFx0Y29sb3I6ICNlOTA7XFxufVxcblxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLmJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udG9rZW4uaXRhbGljIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2tlbi5lbnRpdHkge1xcblxcdGN1cnNvcjogaGVscDtcXG59XFxuXFxucHJlLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlLmxpbmUtbnVtYmVycyA+IGNvZGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGxlZnQ6IC0zLjhlbTtcXG5cXHR3aWR0aDogM2VtOyAvKiB3b3JrcyBmb3IgbGluZS1udW1iZXJzIGJlbG93IDEwMDAgbGluZXMgKi9cXG5cXHRsZXR0ZXItc3BhY2luZzogLTFweDtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcblxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcblxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW4ge1xcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcblxcdH1cXG5cXG5cXHRcXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG5cXHRcXHRcXHRjb2xvcjogIzk5OTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRcXHR9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYXNzZXRzL2pzL3ByaXNtL3ByaXNtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5ob21lLXNlY3Rpb24tYWN0aW9ucyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRGNkZGO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC10d28ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4RUU3RkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XG4gICAgICAgIDxwPnllcyBpbmRlZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk5vdEZvdW5kU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnTm90Rm91bmRTZWN0aW9uJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qc1xuICoqLyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5ldy1jYXAqL1xubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXG5cbmxldCBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XG5cbnJvdXRlci51c2UoJy9hcGkvKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBhcGkudG9kbyhyZXEsIHJlcywgbmV4dCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG4vL1xuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZihtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vYXBpL2FwaSddLCAoKSA9PiB7XG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3JvdXRlcy9hcGkuanNcbiAqKi8iLCJsZXQgYXBpID0ge1xuICB0b2RvOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgLy8gc2ltcGxlIGFwaSBmZXRjaCBleGFtcGxlLCBubyBvd24gREIgaGVyZSBzbyBleHRlcm5hbCBjYWxsIGlzIG1hZGUuXG5cbiAgICAgIC8vIGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViXG4gICAgIC8qIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoanNvbik7XG4gICAgICB9KTtcbiAgICAgICovXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dGVzdDogJ3Rlc3QnfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9LFxuICBvdGhlcnRvZG86ICgpID0+IHtcblxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==