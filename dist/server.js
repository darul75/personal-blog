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

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } })(); }
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HeaderMenu.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

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
			"prismjs": "0.0.1",
			"react-helmet": "^1.1.0",
			"react-hot-loader": "^1.2.7",
			"react-router": "^0.13.2",
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
			"react": "^0.13.2",
			"serve-favicon": "^2.2.1",
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
		"./2015-06-30_nodeJS-require-module.md": 27
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

	module.exports = "<h2 id=\"module\">Module</h2>\n<p>Understand Module behaviour is quite important with NodeJS, those who tried to play with it know what I am speaking about.</p>\n<p>How it works, what is the difference between <code>export</code>, <code>module.exports</code>.</p>\n<p>In this thread, we will take a deep look at how it is working node core dependency management.</p>\n<p>Module system in NodeJS is handle by <a href=\"https://github.com/joyent/node/blob/master/lib/module.js\">Module.js</a> file.</p>\n<p>Description of Module API is <a href=\"https://nodejs.org/docs/latest/api/modules.html#modules_the_module_object\">here</a>, but we use it very rarely.</p>\n<p>Main purpose of Module is to handle your code dependencies by providing a runtime context.</p>\n<h2 id=\"constructor\">Constructor</h2>\n<pre><code class=\"line-numbers language-javascript\">function Module(id, parent) {\n  this.id = id;\n  this.exports = {};\n  this.parent = parent;\n}\n</code></pre>\n<p>one <code>exports</code> object attribute is created by default.</p>\n<p>Note that all your dependencies only shows this <code>exports</code> Module object attribute to their parent modules. Here just an extract from Module NodeJS source code:</p>\n<pre><code class=\"line-numbers language-javascript\">// digest your module code and then return exports attr\nreturn module.exports;\n</code></pre>\n<p>Here some common scenarios when creating a module (note the dot .).</p>\n<pre><code class=\"line-numbers language-javascript\">exports.myFn = function() {\n\n}\nexports.myFn2 = function() {\n\n}\n</code></pre>\n<p>This fills your module exports attribute object and <code>return module.exports</code> directive will return something like:</p>\n<pre><code class=\"line-numbers language-javascript\">{\n  myFn : function() {\n\n  },\n  myFn2 : function() {\n\n  }\n}\n</code></pre>\n<p>Side effect:</p>\n<pre><code class=\"line-numbers language-javascript\">exports = {\n  fn: function() {\n\n  },\n  fn2: function() {\n\n  }\n}\n</code></pre>\n<p>you expect <code>return module.exports</code> returning the same object shown before but it won&#39;t, you have just created a new object and module.exports still point to an empty obj {}</p>\n<p>If you want to be be sure, just can start your module with (note the dot .)</p>\n<pre><code class=\"line-numbers language-javascript\">var exports = module.exports = {};\n\nexports.fn = function() {\n\n};\n\nexports.fn2 = function() {\n\n};\n</code></pre>\n<p>But a more convenient way to avoid this inconvenience would be</p>\n<pre><code class=\"line-numbers language-javascript\">var myStuff = &#39;I love Nodejs&#39;;\n\n// OR\n\nvar myStuff = function doStuff() {\n\n};\n\n// OR\n\nvar myStuff = {\n  doStuff: function doStuff1() {\n\n  },\n  doStuff1: function doStuff1() {\n\n  }\n\n};\n\n// OR ....\n\nmodule.exports = myStuff;\n</code></pre>\n<p>But then, what happened when we use require ?</p>\n<h2 id=\"require\">Require</h2>\n<p>When using require, behind the scene a module context is created and your code runs in it.</p>\n<p><code>require</code> function is attached to node global <code>object</code>, imagine <code>window</code> object for a browser environment. So when you type <code>require(&#39;something&#39;)</code> js prototype pattern looks for it and find require function.</p>\n<pre><code class=\"line-numbers language-javascript\">global.require = require;\nglobal.exports = self.exports;\n</code></pre>\n<p><a href=\"https://nodejs.org/api/globals.html#globals_global\">Global object</a></p>\n<p>To recap when you type require, js engine retrieves global object and look for a require named function and find it :)</p>\n<h3 id=\"function\">Function</h3>\n<p><code>require</code> function take a non empty string as parameter, a name, a path.</p>\n<pre><code class=\"line-numbers language-javascript\">// Loads a module at the given file path. Returns that module&#39;s\n// `exports` property.\nModule.prototype.require = function(path) {\n  assert(path, &#39;missing path&#39;);\n  assert(util.isString(path), &#39;path must be a string&#39;);\n  return Module._load(path, this);\n};\n</code></pre>\n<h3 id=\"example\">Example</h3>\n<p>Let&#39;s take an example.</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">var d = require(&#39;./dependency&#39;);\n</code></pre>\n<p>./dependency.js</p>\n<pre><code class=\"line-numbers language-javascript\">module.exports = &#39;I love JS&#39;;\n</code></pre>\n<h3 id=\"loader-routines\">Loader routines</h3>\n<p>Module we first try to locate file containing code for our module &#39;dependency&#39;.</p>\n<p>A load function is called with 3 parameters</p>\n<ul>\n<li>request : here &#39;dependency&#39;</li>\n<li>parent: null if root module</li>\n<li>isMain: main root file</li>\n</ul>\n<p>A load function does all this stuff for us.</p>\n<pre><code class=\"line-numbers language-javascript\">Module._load = function(request, parent, isMain) {\n  // 1&gt; resolve filename and look for absolute path of file\n  var filename = Module._resolveFilename(request, parent);\n  // 2&gt; check in cache by id and return it if found\n  var cachedModule = Module._cache[filename];\n  if (cachedModule) {\n    return cachedModule.exports;\n  }\n  // 3&gt; check if native module and compile it and return it if needed, example require(&#39;fs&#39;);\n  if (NativeModule.exists(filename)) {\n    // do some compil stuff\n  }\n  // 4&gt; create new module with reference to parent Module\n  var module = new Module(filename, parent);\n  // 5&gt; put it in cache\n  Module._cache[filename] = module;\n  // 6&gt; the MOST interesting part, load module source code\n  try {\n    module.load(filename);\n    hadException = false;\n  } finally {\n    if (hadException) {\n      delete Module._cache[filename];\n    }\n  }\n\n  // 7&gt; send exports object\n  return module.exports;\n}\n</code></pre>\n<h3 id=\"focus\">Focus</h3>\n<p>Where is my dependency, in above example <code>dependency</code></p>\n<pre><code class=\"line-numbers language-javascript\">Module._resolveFilename = function(request, parent) {\n // internal stuff to compute path\n return filename; // example here /mypath/myproject/dependency.js\n}\n</code></pre>\n<p>The load function.</p>\n<pre><code class=\"line-numbers language-javascript\">Module.prototype.load = function(filename) {\n...\n  this.filename = filename;\n  this.paths = Module._nodeModulePaths(path.dirname(filename));\n  // &quot;/mypath/myproject/node_modules&quot;\n  // &quot;/mypath/node_modules&quot;\n  // &quot;/node_modules&quot;\n\n  var extension = path.extname(filename) || &#39;.js&#39;;\n  // 1&gt; by default only .js, .json, .node types are handled by module loader\n  if (!Module._extensions[extension]) extension = &#39;.js&#39;;\n  // 2&gt; here js extensions is used to load dependency.js\n  Module._extensions[extension](this, filename);\n  this.loaded = true;\n};\n</code></pre>\n<p>Then here we go, we have filename path.</p>\n<pre><code class=\"line-numbers language-javascript\">// Native extension for .js\nModule._extensions[&#39;.js&#39;] = function(module, filename) {\n  // 1&gt; load file content of &#39;dependency.js&#39;\n  var content = fs.readFileSync(filename, &#39;utf8&#39;);\n  // 2&gt; compile it\n  module._compile(stripBOM(content), filename);\n};\n</code></pre>\n<p>Compiler routine</p>\n<pre><code class=\"line-numbers language-javascript\">Module.prototype._compile = function(content, filename) {\n  // here content is a my module.js file in a string :\n  // &quot;module.exports = &quot;It works from content.js.&quot;;&quot;\n  // filename\n  // /mypath/myproject/dependency.js\n  // ...\n  // some stuff\n  // ...\n  // retrieve modules cache\n  require.cache = Module._cache;\n  // here come the tricky part\n  // ******** IMPORTANT *********\n  // create a wrapper function as string\n  var wrapper = Module.wrap(content);\n  // it will gives the following anonymous function\n  // NOTE: it is a simple STRING\n  //\n  // &quot;(function (exports, require, module, __filename, __dirname) { \n  //  module.exports = &quot;It works from content.js.&quot;; \n  // });&quot;\n  //\n  // here a call to native code with this code, imagine eval() function.\n  var compiledWrapper = runInThisContext(wrapper, { filename: filename });\n  // now we have a real js function\n  var args = [self.exports, require, self, filename, dirname];\n  return compiledWrapper.apply(self.exports, args);\n}\n</code></pre>\n<h3 id=\"conclusion\">Conclusion</h3>\n<ul>\n<li>a dependency imply a module object</li>\n<li>a loading processus looks for you code file</li>\n<li>a compilation phase involved an anonymous function that wraps your module code with 3 main params (exports,require,module). By executing this function, <code>exports</code> Module object attribue attribute is fill.</li>\n<li>loading process returns your module <code>exports</code> attribute.</li>\n</ul>\n<h3 id=\"result\">Result</h3>\n<p>Your compiled code looks like:</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) {\n  var dep = require(&#39;./dependency&#39;);\n});\n</code></pre>\n<p>./dependency.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) { \n  module.exports = &quot;It works from content.js.&quot;;\n});\n</code></pre>\n<p>You can imagine the following</p>\n<p>./main.js</p>\n<pre><code class=\"line-numbers language-javascript\">(function (exports, require, module, __filename, __dirname) {\n  ./dependency.js\n  var dep = (function (exports, require, module, __filename, __dirname) { \n    return module.exports = &quot;It works from content.js.&quot;;\n  });\n});\n</code></pre>\n";

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
	exports.push([module.id, "/* -----------------------------------------------------------------------------\r\n\r\n  HAMBURGER ICONS COMPONENT\r\n\r\n----------------------------------------------------------------------------- */\n/**\r\n * Toggle Switch Globals\r\n *\r\n * All switches should take on the class `c-hamburger` as well as their\r\n * variant that will give them unique properties. This class is an overview\r\n * class that acts as a reset for all versions of the icon.\r\n */\n.c-hamburger {\n  position: absolute;\n  right: 5%;\n  top: 5%;\n  display: block;\n  z-index: 50;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 28px;\n  height: 28px;\n  font-size: 0;\n  text-indent: -9999px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-shadow: none;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  transition: background 0.3s; }\n\n.c-hamburger.edition {\n  border-radius: 25%; }\n\n.c-hamburger:focus {\n  outline: none; }\n\n.c-hamburger span {\n  display: block;\n  position: absolute;\n  top: 13px;\n  left: 5px;\n  right: 5px;\n  height: 2px;\n  background: white; }\n\n.c-hamburger span::before,\n.c-hamburger span::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #fff;\n  content: \"\"; }\n\n.c-hamburger span::before {\n  top: -5px; }\n\n.c-hamburger span::after {\n  bottom: -5px; }\n\n/**\r\n * Style 1\r\n *\r\n * Rotating hamburger icon (rot), that simply rotates 90 degrees when activated.\r\n * Nothing too fancy, simple transition.\r\n */\n.c-hamburger--rot {\n  background-color: #474E3C;\n  z-index: 101; }\n\n.c-hamburger--rot span {\n  transition: transform 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--rot.is-active {\n  background-color: #131410; }\n\n.c-hamburger--rot.is-active span {\n  transform: rotate(90deg); }\n\n/**\r\n * Style 2\r\n *\r\n * Hamburger to \"x\" (htx). Takes on a hamburger shape, bars slide\r\n * down to center and transform into an \"x\".\r\n */\n.c-hamburger--htx {\n  background-color: #7DC0DE; }\n\n.c-hamburger--htx span {\n  transition: background 0s 0.3s; }\n\n.c-hamburger--htx span::before,\n.c-hamburger--htx span::after {\n  transition-duration: 0.3s, 0.3s;\n  transition-delay: 0.3s, 0s; }\n\n.c-hamburger--htx span::before {\n  transition-property: top, transform; }\n\n.c-hamburger--htx span::after {\n  transition-property: bottom, transform; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htx.is-active {\n  background-color: #cccccc; }\n\n.c-hamburger--htx.is-active span {\n  background: none; }\n\n.c-hamburger--htx.is-active span::before {\n  top: 0;\n  transform: rotate(45deg); }\n\n.c-hamburger--htx.is-active span::after {\n  bottom: 0;\n  transform: rotate(-45deg); }\n\n.c-hamburger--htx.is-active span::before,\n.c-hamburger--htx.is-active span::after {\n  transition-delay: 0s, 0.3s; }\n\n/**\r\n * Style 3\r\n *\r\n * Hamburger to left-arrow (htla). Hamburger menu transforms to a left-pointing\r\n * arrow. Usually indicates an off canvas menu sliding in from left that\r\n * will be close on re-click of the icon.\r\n */\n.c-hamburger--htla {\n  background-color: #32dc64; }\n\n.c-hamburger--htla span {\n  transition: transform 0.3s; }\n\n.c-hamburger--htla span::before {\n  transform-origin: top right;\n  transition: transform 0.3s, width 0.3s, top 0.3s; }\n\n.c-hamburger--htla span::after {\n  transform-origin: bottom right;\n  transition: transform 0.3s, width 0.3s, bottom 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htla.is-active {\n  background-color: #18903b; }\n\n.c-hamburger--htla.is-active span {\n  transform: rotate(180deg); }\n\n.c-hamburger--htla.is-active span::before,\n.c-hamburger--htla.is-active span::after {\n  width: 50%; }\n\n.c-hamburger--htla.is-active span::before {\n  top: 0;\n  transform: translateX(11px) translateY(1px) rotate(45deg); }\n\n.c-hamburger--htla.is-active span::after {\n  bottom: 0;\n  transform: translateX(11px) translateY(-1px) rotate(-45deg); }\n\n/**\r\n * Style 4\r\n *\r\n * Hamburger to right-arrow (htra). Hamburger menu transforms to a\r\n * right-pointing arrow. Usually indicates an off canvas menu sliding in from\r\n * right that will be close on re-click of the icon.\r\n */\n.c-hamburger--htra {\n  background-color: #ff9650; }\n\n.c-hamburger--htra span {\n  transition: transform 0.3s; }\n\n.c-hamburger--htra span::before {\n  transform-origin: top left;\n  transition: transform 0.3s, width 0.3s, top 0.3s; }\n\n.c-hamburger--htra span::after {\n  transform-origin: bottom left;\n  transition: transform 0.3s, width 0.3s, bottom 0.3s; }\n\n/* active state, i.e. menu open */\n.c-hamburger--htra.is-active {\n  background-color: #e95d00; }\n\n.c-hamburger--htra.is-active span {\n  transform: rotate(180deg); }\n\n.c-hamburger--htra.is-active span::before,\n.c-hamburger--htra.is-active span::after {\n  width: 50%; }\n\n.c-hamburger--htra.is-active span::before {\n  top: 0;\n  transform: translateX(-2px) translateY(1px) rotate(-45deg); }\n\n.c-hamburger--htra.is-active span::after {\n  bottom: 0;\n  transform: translateX(-2px) translateY(-1px) rotate(45deg); }\n\nnav#overlord ul#dropdown {\n  transform: translate3d(350px, 0, 0);\n  -moz-transform: translate3d(350px, 0, 0);\n  -webkit-transform: translate3d(350px, 0, 0);\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  text-align: right;\n  display: none;\n  list-style-type: none;\n  background-color: #001220;\n  border-left: 2px solid #EBB649;\n  padding-right: 30px;\n  padding-top: 70px;\n  padding-left: 10px;\n  z-index: 100;\n  margin-right: 0px;\n  max-width: 300px;\n  display: block;\n  transition-property: all;\n  transition-duration: 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1);\n  -webkit-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  -moz-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  -o-transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055);\n  transition-timing-function: cubic-bezier(0.155, 0.605, 0.18, 1.055); }\n\nnav#overlord ul#dropdown li a {\n  font-size: 20px;\n  line-height: 35px;\n  font-weight: 300;\n  color: #F2EFEF;\n  display: block;\n  padding-left: 30px;\n  transition-property: all;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -moz-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -ms-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  -o-transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);\n  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82); }\n\nnav#overlord ul#dropdown li a.logoize:hover {\n  color: #F2EFEF;\n  font-weight: 900; }\n\nnav#overlord ul#dropdown li.spacer {\n  margin-top: 25px; }\n\nnav#overlord ul#dropdown li a:hover {\n  color: #AAA6A6;\n  font-weight: 500; }\n\nnav#overlord.overlord_active ul#dropdown {\n  display: block;\n  margin-right: 0px;\n  transform: translate3d(0px, 0, 0);\n  -moz-transform: translate3d(0px, 0, 0);\n  -webkit-transform: translate3d(0px, 0, 0); }\n\nnav#overlord ul#dropdown.onblog li a {\n  font-size: 16px;\n  color: #F2EFEF;\n  font-weight: 500;\n  text-transform: capitalize; }\n\nnav#overlord ul#dropdown.onblog li a:hover {\n  color: #AAA6A6; }\n\nnav#overlord ul#dropdown li.dropdown_message {\n  max-width: 170px; }\n\nnav#overlord ul#dropdown li.dropdown_message a {\n  line-height: 24px;\n  font-size: 20px;\n  color: #000;\n  padding-left: 10px;\n  padding-bottom: 10px;\n  font-weight: 300; }\n\nnav#overlord ul#dropdown li.dropdown_message a:hover {\n  font-weight: 300; }\n\nnav#overlord ul#dropdown li.dropdown_message a:hover span {\n  font-weight: 900; }\n\nnav#overlord ul#dropdown li.dropdown_message a span {\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 17px;\n  font-family: 'freight-sans-pro',sans-serif; }\n", ""]);

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HtmlHeaderTags.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Contact.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PostItem.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFoundSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\personal-blog\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDM0YWNmZmY1ZTM1MDk3NTk1ZDgiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJNZW51LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9tYWtlSG90LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcuanNvbiIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1IF5cXC5cXC8uKlxcLm1kJCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMjhfbXktYmxvZy5tZCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMzBfbm9kZUpTLXJlcXVpcmUtbW9kdWxlLm1kIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXJNZW51LnNjc3M/MDQ1MiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlck1lbnUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzPzBkMzMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3BpY3R1cmUuanBnIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bvc3QvX1Bvc3RJdGVtLnNjc3M/MDk0MyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Qb3N0L19Qb3N0SXRlbS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3M/NzA3MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzPzQwMGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvcm91dGVzL2FwaS5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvYXBpL2FwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NyQ2lCLENBQU07Ozs7aUNBQ04sQ0FBTTs7Ozs7O29DQUdILENBQVM7Ozs7eUNBQ1QsQ0FBZTs7Ozs7QUFHbkMsS0FBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU07S0FDN0MsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7QUFFbkQsS0FBSSxHQUFHLEdBQUcsMkJBQVMsQ0FBQzs7QUFFcEIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFDMUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyw4QkFBYyxDQUFDLFVBQVUsQ0FB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dEMsUUFBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxLQUFJLEdBQUcsR0FBRztBQUNSLE9BQUksRUFBRSxjQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3hCLFNBQUk7QUFDRixVQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEQsVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztNQUN0QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ1g7SUFDRjtBQUNELFlBQVMsRUFBRSxxQkFBTSxFQUVoQjtFQUNGLENBQUM7O3NCQUVhLEdBQUciLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDM0YWNmZmY1ZTM1MDk3NTk1ZDhcbiAqKi8iLCIvLyBOT0RFXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vIEVYUFJFU1NcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nO1xyXG5cclxuLy8gUHJvZmlsZSBkZXYgb3IgcHJvZHVjdGlvblxyXG5sZXQgcHJvZmlsZSA9IHByb2Nlc3MuZW52LkRFViA/ICdkZXYnIDogJ3Byb2QnLFxyXG5cdHB1YmxpY1BhdGggPSBwcm9maWxlID09PSAnZGV2JyA/ICdidWlsZCcgOiAnZGlzdCc7XHJcblxyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljUGF0aCkpO1xyXG5hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28nKSkpO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgbWlkZGxld2FyZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIHJlbmRlcmVyXHJcbmxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbi8vIGFwaXNcclxubGV0IGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xyXG5cclxuLy9cclxuLy8gQ29uZmlndXJlIG1pZGRsZXdhcmVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnJlbmRlcmVyLmluaXQocHJvZmlsZSk7XHJcblxyXG4vL1xyXG4vLyBBY3RpdmF0ZSBtaWRkbGV3YXJlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKGFwaVJvdXRlcyk7XHJcbmFwcC51c2UocmVuZGVyZXIucmVuZGVyKTtcclxuXHJcbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAnICsgYXBwLmdldCgncG9ydCcpKTtcclxufSk7XHJcblxyXG4vL1xyXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgLy8gYWNjZXB0IHVwZGF0ZSBvZiBkZXBlbmRlbmN5XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuL3JvdXRlcy9hcGknLCAnLi9yb3V0ZXMvcmVuZGVyZXInXSwgKCkgPT4ge1xyXG4gICAgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XHJcbiAgICBhcHAudXNlKGFwaVJvdXRlcyk7XHJcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbiAgICByZW5kZXJlci5pbml0KCdkZXYnKTtcclxuICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL3NlcnZlci9zZXJ2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZS1mYXZpY29uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJleHByZXNzXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodHRwXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJsZXQgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xyXG5cclxubGV0IHByb2ZpbGUgPSAnZGV2JztcclxuXHJcbnZhciByb3V0ZXNSZW5kZXJlciA9IHtcclxuICBpbml0OiAodHlwZSkgPT4ge1xyXG4gICAgcHJvZmlsZSA9IHR5cGU7XHJcbiAgICByZW5kZXJlci5pbml0KHR5cGUpO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihyZXEsIHJlcywgbmV4dCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9cclxuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vdXRpbHMvcmVuZGVyZXInXSwgKCkgPT4ge1xyXG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xyXG4gICAgcmVuZGVyZXIuaW5pdChwcm9maWxlKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzUmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qc1xuICoqLyIsIi8vIE5PREVcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuXHJcbi8vIEVYVEVSTkFMU1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBJc28gZnJvbSAnaXNvJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09SRVxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uLy4uL2FwcC9yb3V0ZXMnO1xyXG5pbXBvcnQgYWx0IGZyb20gJy4uLy4uL2FwcC9hbHQnO1xyXG5cclxubGV0IGh0bWwgPSAnJztcclxuXHJcbnZhciByZW5kZXJlciA9IHtcclxuICBpbml0OiAodHlwZSkgPT4ge1xyXG4gICAgaHRtbCA9IHR5cGUgPT09ICdkZXYnID9cclxuICAgICAgZnMucmVhZEZpbGVTeW5jKCcuL2Fzc2V0cy9pbmRleC1kZXYuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSlcclxuICAgICAgOlxyXG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vZGlzdC9pbmRleC1wcm9kLmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGxldCBtYXJrdXAgPSAnJyxcclxuICAgICAgaXNvID0gbmV3IElzbygpO1xyXG5cclxuICAgIGNvbnN0IG9uZUl0ZW1Cb290c3RyYXBlZCA9IHtcclxuICAgICAgJ0FwcFN0b3JlJzoge1xyXG4gICAgICAgICdkYXRhQnlSZXN0QXBpJzoge30sXHJcbiAgICAgICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgICAnaWFxcG9yN3AnOiB7XHJcbiAgICAgICAgICAgICdpZCc6ICdpYXFwb3I3cCcsXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdmc2ZzZGYnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnMsIHdlIHRha2UgdGhlIGxvY2FscyBkYXRhIHdlIGhhdmUgYWxyZWFkeVxyXG4gICAgZmV0Y2hlZCBhbmQgc2VlZCBvdXIgc3RvcmVzIHdpdGggZGF0YS5cclxuICAgIE5leHQgd2UgdXNlIHJlYWN0LXJvdXRlciB0byBydW4gdGhlIFVSTCB0aGF0IGlzIHByb3ZpZGVkIGluIHJvdXRlcy5qc3hcclxuICAgIEZpbmFsbHkgd2UgdXNlIGlzbyBpbiBvcmRlciB0byByZW5kZXIgdGhpcyBjb250ZW50IHNvIGl0IHBpY2tzIGJhY2sgdXBcclxuICAgIG9uIHRoZSBjbGllbnQgc2lkZSBhbmQgYm9vdHN0cmFwcyB0aGUgc3RvcmVzLlxyXG4gICAgaW5pdCBzZXJ2ZXIgcmVuZGVyZXJcclxuICAgICovXHJcbiAgICBhbHQuYm9vdHN0cmFwKEpTT04uc3RyaW5naWZ5KHJlcy5sb2NhbHMuZGF0YSB8fCBvbmVJdGVtQm9vdHN0cmFwZWQpKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBSb3V0ZXIucnVuKHJvdXRlcywgcmVxLnBhdGgsIChIYW5kbGVyLCBzdGF0ZSkgPT4ge1xyXG5cdFx0XHRcdC8vIGFsdCBmbHV4IGZsdXNoXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBSZWFjdC5yZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KEhhbmRsZXIpKTtcclxuICAgICAgICBpc28uYWRkKGNvbnRlbnQsIGFsdC5mbHVzaCgpKTtcclxuXHJcbiAgICAgICAgcmVzLmNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbDsgY2hhcnNldD11dGY4JztcclxuICAgICAgICBsZXQgbm90Rm91bmQgPSBfLmZpbmQoc3RhdGUucm91dGVzLCB7aXNOb3RGb3VuZDogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBpZiAobm90Rm91bmQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHQvLyBSRU5ERVJJTkcgYmFjayB0byBjbGllbnRcclxuICAgICAgICBsZXQgbWFya3VwQ29udGVudCA9IGlzby5yZW5kZXIoKTtcclxuICAgICAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxyXG4gICAgICAgIGxldCBoZWFkID0gSGVsbWV0LnJld2luZCgpO1xyXG4gICAgICAgIG1hcmt1cCA9IGh0bWwucmVwbGFjZSgnTUVUQScsIGhlYWQubWV0YSkucmVwbGFjZSgnVElUTEUnLCBoZWFkLnRpdGxlKS5yZXBsYWNlKCdMSU5LJywgaGVhZC5saW5rKS5yZXBsYWNlKCdDT05URU5UJywgbWFya3VwQ29udGVudCk7XHJcbiAgICAgICAgLy8gU0VORCByZXNwb25zZVxyXG4gICAgICAgIHJlcy5zZW5kKG1hcmt1cCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3V0aWxzL3JlbmRlcmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLyplc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IHtSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIDxSb3V0ZSBuYW1lPSdhcHAnIHBhdGg9Jy8nIGhhbmRsZXI9e0FwcGxpY2F0aW9ufT5cclxuICAgIDxSb3V0ZSBuYW1lPSdob21lJyBwYXRoPScvaG9tZScgaGFuZGxlcj17SG9tZVNlY3Rpb259Lz5cclxuICAgIDxSb3V0ZSBuYW1lPSdjb250YWN0JyBwYXRoPVwiL2NvbnRhY3RcIiBoYW5kbGVyPXtDb250YWN0fS8+XHJcbiAgICA8Um91dGUgbmFtZT0ncG9zdCcgcGF0aD1cIi9wb3N0Lzpwb3N0SWRcIiBoYW5kbGVyPXtQb3N0SXRlbX0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9yb3V0ZXMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlSGFuZGxlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IEh0bWxIZWFkZXJUYWdzIGZyb20gJy4uL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzJztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgLy9yZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2l0aHViLW1hcmtkb3duLWNzcy9naXRodWItbWFya2Rvd24uY3NzJyk7XHJcbiAgcmVxdWlyZSgnLi9fQXBwLnNjc3MnKTtcclxuICByZXF1aXJlKCdmaWxlP25hbWU9ZmF2aWNvbi5pY28hLi4vLi4vaW1hZ2VzL2Zhdmljb24uaWNvJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SHRtbEhlYWRlclRhZ3MgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCc+XHJcbiAgICAgICAgICA8Um91dGVIYW5kbGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHAucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEhlYWRlck1lbnUgZnJvbSAnLi9IZWFkZXJNZW51JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fSGVhZGVyLnNjc3MnKTtcclxufVxyXG5cclxubGV0IGxvZ28gPSByZXF1aXJlKCcuL2ltYWdlcy9waWN0dXJlLmpwZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IGxvZ29TdHlsZSA9IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBsb2dvICsgJyknXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxIZWFkZXJNZW51IC8+XHJcblx0XHRcdFx0PGhlYWRlciBpZD0ndXNlcic+XHJcbiAgICAgICAgICA8TGluayB0bz0nYXBwJz5cclxuICAgICAgICAgICAgPGZpZ3VyZSBpZD0ndXNlci1sb2dvJyBzdHlsZT17bG9nb1N0eWxlfT48L2ZpZ3VyZT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxoMj5KVUxJRU4gVkFMRVJZPC9oMj5cclxuICAgICAgICAgIDxoMz5kYXJ1bDc1PC9oMz5cclxuXHRcdFx0XHRcdDx1bCBpZD0ndXNlci1saW5rcyc+XHJcbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J1dHRvbml6ZSB0aW55JyBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2RhcnVsNzUnIHRhcmdldD0nX2JsYW5rJz5AZGFydWw3NTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdidXR0b25pemUgdGlueScgaHJlZj1cIm1haWx0bzpkYXJ1bDc1QGdtYWlsLmNvbT9zdWJqZWN0PWJsb2dcIj5zYXkgaGk8L2E+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhlYWRlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0hlYWRlck1lbnUuc2NzcycpO1xyXG59XHJcblxyXG5sZXQgaGVhZGVyTWVudSA9IGNsYXNzIEhlYWRlck1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7c2hvdzogZmFsc2V9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IG1lbnVCdG5DbGFzcyA9ICF0aGlzLnN0YXRlLnNob3cgPyAnYy1oYW1idXJnZXIgYy1oYW1idXJnZXItLXJvdCcgOiAnYy1oYW1idXJnZXIgYy1oYW1idXJnZXItLXJvdCBjLWhhbWJ1cmdlci0taHR4IGlzLWFjdGl2ZSc7XHJcbiAgICBsZXQgbWVudUNsYXNzID0gIXRoaXMuc3RhdGUuc2hvdyA/ICcnIDogJ292ZXJsb3JkX2FjdGl2ZSc7XHJcbiAgICBsZXQgcG9zdHMgPSBIZWFkZXJNZW51LmdldFByb3BzRnJvbVN0b3JlcygpLnBvc3RzO1xyXG4gICAgbGV0IHBvc3RMaW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBvc3RzKSB7XHJcbiAgICAgIGxldCBwb3N0ID0gcG9zdHNba2V5XTtcclxuICAgICAgbGV0IHBvc3RQZXJtYWxpbmsgPSAnL3Bvc3QvJyArIHBvc3QucGVybWFsaW5rO1xyXG4gICAgICBwb3N0TGlua3MucHVzaCg8bGkga2V5PXtrZXl9PjxMaW5rIHRvPXtwb3N0UGVybWFsaW5rfT57cG9zdC50aXRsZX08L0xpbms+PC9saT4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgaWQ9J292ZXJsb3JkJyBjbGFzc05hbWU9e21lbnVDbGFzc30gb25Nb3VzZUxlYXZlPXt0aGlzLl9vbk1vdXNlTGVhdmUuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e21lbnVCdG5DbGFzc30gb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgIDxzcGFuPnRvZ2dsZSBtZW51PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDx1bCBpZD0nZHJvcGRvd24nIGNsYXNzTmFtZT0nb25ibG9nJz5cclxuICAgICAgICAgIHtwb3N0TGlua3N9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OiAhdGhpcy5zdGF0ZS5zaG93fSk7XHJcbiAgfVxyXG5cclxuICBfb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XHJcbiAgICByZXR1cm4gW0FwcFN0b3JlXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogQXBwU3RvcmUuZ2V0U3RhdGUoKS5wb3N0c1xyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5oZWFkZXJNZW51LnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIZWFkZXJNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3JlcyhoZWFkZXJNZW51KTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTWVudS5qc1xuICoqLyIsIi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcclxuaW1wb3J0IG1ha2VIb3QgZnJvbSAnYWx0L3V0aWxzL21ha2VIb3QnO1xyXG5cclxubGV0IGFwcFN0b3JlID0gbWFrZUhvdChhbHQsIGNsYXNzIEFwcFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcbiAgICB0aGlzLnBvc3RzID0gW107XHJcbiAgICB0aGlzLnBhY2thZ2Vqc29uID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy8gaHR0cDovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvY29udGV4dC5odG1sXHJcbiAgICBsZXQgbWFya3VwRmlsZXNSZXEgPSByZXF1aXJlLmNvbnRleHQoJy4uLy4uL3Bvc3RzLzIwMTUnLCB0cnVlLCAvXlxcLlxcLy4qXFwubWQkLyk7XHJcbiAgICBsZXQgbWFya3VwRmlsZXNLZXlzID0gbWFya3VwRmlsZXNSZXEua2V5cygpO1xyXG5cclxuICAgIGNvbnN0IGV4dHJhY3RNZXRhID0gZnVuY3Rpb24oZWx0KSB7XHJcbiAgICAgIGxldCBtZXRhID0ge307XHJcbiAgICAgIHZhciBkYXRlTWF0Y2hlcyA9IGVsdC5tYXRjaCgvKDE5fDIwKVxcZFxcZFstIC8uXSgwWzEtOV18MVswMTJdKVstIC8uXSgwWzEtOV18WzEyXVswLTldfDNbMDFdKS8pO1xyXG4gICAgICBpZiAoZGF0ZU1hdGNoZXMpIHtcclxuICAgICAgICBtZXRhLmRhdGUgPSBkYXRlTWF0Y2hlc1swXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWV0YS5maWxlbmFtZSA9IGVsdC5zdWJzdHJpbmcoMiwgZWx0Lmxlbmd0aCk7XHJcbiAgICAgIG1ldGEucGVybWFsaW5rID0gZWx0LnN1YnN0cmluZygyLCBlbHQuaW5kZXhPZignLm1kJykpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIG1ldGEudGl0bGUgPSBlbHQuc3Vic3RyaW5nKGVsdC5pbmRleE9mKCdfJykgKyAxLCBlbHQuaW5kZXhPZignLm1kJykpLnJlcGxhY2UoL1xcLS9nLCAnICcpO1xyXG5cclxuICAgICAgcmV0dXJuIG1ldGE7XHJcbiAgICB9O1xyXG5cclxuICAgIG1hcmt1cEZpbGVzS2V5cy5mb3JFYWNoKChlbHQpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBtYXJrdXBGaWxlc1JlcShlbHQpO1xyXG4gICAgICBsZXQgbWV0YXMgPSBleHRyYWN0TWV0YShlbHQpO1xyXG4gICAgICBsZXQgcG9zdCA9IHtcclxuICAgICAgICBib2R5OiBodG1sLFxyXG4gICAgICAgIGRhdGU6IG1ldGFzLmRhdGUsXHJcbiAgICAgICAgZmlsZW5hbWU6IG1ldGFzLmZpbGVuYW1lLFxyXG4gICAgICAgIHBlcm1hbGluazogbWV0YXMucGVybWFsaW5rLFxyXG4gICAgICAgIHRpdGxlOiBtZXRhcy50aXRsZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnBvc3RzLnB1c2gocG9zdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBvc3RzLnJldmVyc2UoKTtcclxuICB9XHJcbn0sICdBcHBTdG9yZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcHBTdG9yZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgQWx0IGZyb20gJ2FsdCc7XHJcblxyXG4vLyBjcmVhdGUgYWx0IGluc3RhbmNlXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIG1ha2VIb3QoYWx0LCBTdG9yZSkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gU3RvcmUuZGlzcGxheU5hbWUgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgYWx0LnN0b3Jlc1tuYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbHQuY3JlYXRlU3RvcmUoU3RvcmUsIG5hbWUpO1xuICB9KSgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1ha2VIb3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9tYWtlSG90LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuXHJcbmNsYXNzIEFwcEFjdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJwZXJzb25hbC1ibG9nXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcblx0XCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ1bDc1L3BlcnNvbmFsLWJsb2dcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ1bDc1L3BlcnNvbmFsLWJsb2cuZ2l0XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcImRldlwiOiBcIndlYnBhY2sgLS1jb25maWcgY29uZi93ZWJwYWNrLWRldi5qcyB8IHdlYnBhY2stZGV2LXNlcnZlciAtLXBvcnQgODA4MCAtLWNvbmZpZyBjb25mL3dlYnBhY2stZGV2LmpzIC0taG90IC0taGlzdG9yeS1hcGktZmFsbGJhY2sgLS1wcm9ncmVzcyAtLWNvbG9ycyAtLWlubGluZSAtLWNvbnRlbnQtYmFzZSAuL2J1aWxkXCIsXG5cdFx0XCJkZXYtc2VydmVyLWNsaWVudFwiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vd2VicGFjayAtLXByb2dyZXNzIC0td2F0Y2ggLS1jb25maWcgY29uZi93ZWJwYWNrLWRldi1zZXJ2ZXIuanMgfCAuL25vZGVfbW9kdWxlcy8uYmluL3dlYnBhY2stZGV2LXNlcnZlciAtLXBvcnQgODA4MSAtLWNvbmZpZyBjb25mL3dlYnBhY2stZGV2LXNlcnZlci5qcyAtLWhvdCAtLWhpc3RvcnktYXBpLWZhbGxiYWNrIC0tcHJvZ3Jlc3MgLS1jb2xvcnMgLS1pbmxpbmUgLS1jb250ZW50LWJhc2UgLi9idWlsZFwiLFxuXHRcdFwiZGV2LXNlcnZlclwiOiBcIm5vZGUgYnVpbGQvc2VydmVyLmpzXCIsXG5cdFx0XCJkZXYtc2VydmVyLWRlYnVnXCI6IFwibm9kZS1kZWJ1ZyAtLWRlYnVnLWJyayBidWlsZC9zZXJ2ZXIuanMgLS1kZWJ1ZyAtLXNvdXJjZS1tYXBzXCIsXG5cdFx0XCJidWlsZFwiOiBcIndlYnBhY2sgLS1jb25maWcgY29uZi93ZWJwYWNrLXByb2QuanMgLS1wcm9ncmVzcyAtLXByb2ZpbGUgLS1jb2xvcnNcIixcblx0XHRcInN0YXJ0XCI6IFwibm9kZSBkaXN0L3NlcnZlci5qc1wiLFxuXHRcdFwidGVzdFwiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vbW9jaGEgYXBwLyoqLyotdGVzdC5qcyAtLWNvbG9ycyAtLWNvbXBpbGVycyBqczpiYWJlbC9yZWdpc3RlciAtLXJlY3Vyc2l2ZVwiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNvcmVcIjogXCJeNS4xLjExXCIsXG5cdFx0XCJiYWJlbC1lc2xpbnRcIjogXCJeMy4xLjFcIixcblx0XHRcImJhYmVsLWxvYWRlclwiOiBcIl41LjEuNFwiLFxuXHRcdFwiYmFiZWwtcnVudGltZVwiOiBcIl41LjEuMTFcIixcblx0XHRcImNsZWFuLXdlYnBhY2stcGx1Z2luXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJjc3MtbG9hZGVyXCI6IFwiXjAuMTAuMVwiLFxuXHRcdFwiZXNsaW50XCI6IFwiXjAuMjAuMFwiLFxuXHRcdFwiZXNsaW50LWxvYWRlclwiOiBcIl4wLjExLjJcIixcblx0XHRcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeMi4yLjBcIixcblx0XHRcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiOiBcIl4wLjYuMFwiLFxuXHRcdFwiZmlsZS1sb2FkZXJcIjogXCJeMC44LjFcIixcblx0XHRcImh0bWwtbG9hZGVyXCI6IFwiXjAuMy4wXCIsXG5cdFx0XCJodG1sLXdlYnBhY2stcGx1Z2luXCI6IFwiXjEuMi4wXCIsXG5cdFx0XCJqc2RvbVwiOiBcIl4yLjAuMFwiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjJcIixcblx0XHRcImpzeC1sb2FkZXJcIjogXCJeMC4xMy4yXCIsXG5cdFx0XCJtYXJrZG93bi1sb2FkZXJcIjogXCJeMC4xLjNcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuMS4wXCIsXG5cdFx0XCJub2RlLXNhc3NcIjogXCJeMy4xLjJcIixcblx0XHRcInByaXNtanNcIjogXCIwLjAuMVwiLFxuXHRcdFwicmVhY3QtaGVsbWV0XCI6IFwiXjEuMS4wXCIsXG5cdFx0XCJyZWFjdC1ob3QtbG9hZGVyXCI6IFwiXjEuMi43XCIsXG5cdFx0XCJyZWFjdC1yb3V0ZXJcIjogXCJeMC4xMy4yXCIsXG5cdFx0XCJzYXNzLWxvYWRlclwiOiBcIjEuMC4yXCIsXG5cdFx0XCJzdHlsZS1sb2FkZXJcIjogXCJeMC4xMC4yXCIsXG5cdFx0XCJ1cmwtbG9hZGVyXCI6IFwiXjAuNS41XCIsXG5cdFx0XCJ3ZWJwYWNrXCI6IFwiXjEuOS4xMFwiLFxuXHRcdFwid2VicGFjay1kZXYtc2VydmVyXCI6IFwiXjEuOC4yXCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYWx0XCI6IFwiXjAuMTYuMTBcIixcblx0XHRcImJhYmVsXCI6IFwiXjUuMS4xMVwiLFxuXHRcdFwiY2xhc3NuYW1lc1wiOiBcIl4yLjEuMVwiLFxuXHRcdFwiZXhwcmVzc1wiOiBcIl40LjEyLjNcIixcblx0XHRcImlzb1wiOiBcIl40LjEuMFwiLFxuXHRcdFwibG9kYXNoXCI6IFwiXjMuOS4zXCIsXG5cdFx0XCJtYXJrZWRcIjogXCJeMC4zLjNcIixcblx0XHRcIm5vZGUtZmV0Y2hcIjogXCJeMS4yLjFcIixcblx0XHRcIm9iamVjdC1hc3NpZ25cIjogXCJeMi4wLjBcIixcblx0XHRcInJlYWN0XCI6IFwiXjAuMTMuMlwiLFxuXHRcdFwic2VydmUtZmF2aWNvblwiOiBcIl4yLjIuMVwiLFxuXHRcdFwid2hhdHdnLWZldGNoXCI6IFwiXjAuOC4xXCJcblx0fSxcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJyZWFjdFwiLFxuXHRcdFwiZmx1eFwiLFxuXHRcdFwiaXNvbW9ycGhpY1wiLFxuXHRcdFwid2VicGFja1wiLFxuXHRcdFwia2l0XCIsXG5cdFx0XCJleHByZXNzXCIsXG5cdFx0XCJub2RlXCIsXG5cdFx0XCJibG9nXCJcblx0XSxcblx0XCJsaWNlbnNlXCI6IFwiTUlUXCJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlbG1ldFwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIkRhcnVsIGJsb2dcIixcblx0XHRcIm1ldGFcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJKdWxpZW4gVmFsw6lyeSBibG9nOiBmdWxsc3RhY2sgc3R1ZmZzLCBOb2RlSlMsIEFuZ3VsYXJKUywgUmVhY3QsIE1vbmdvREIuLi4gYWJvdXQgbWUgb3Igd2hhdCBlbHNlLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJ2aWV3cG9ydFwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcImxpbmtcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcInNob3J0Y3V0IGljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcImljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImhyZWZcIjogXCJodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5XCIsXG5cdFx0XHRcdFwicmVsXCI6IFwic3R5bGVzaGVldFwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0L2Nzc1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9jb25maWcuanNvblxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vMjAxNS0wNi0yOF9teS1ibG9nLm1kXCI6IDI2LFxuXHRcIi4vMjAxNS0wNi0zMF9ub2RlSlMtcmVxdWlyZS1tb2R1bGUubWRcIjogMjdcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcG9zdHMvMjAxNSBeXFwuXFwvLipcXC5tZCRcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMiBpZD1cXFwid2VsY29tZVxcXCI+V2VsY29tZTwvaDI+XFxuPHA+SGksIG15IG5hbWUgaXMgSnVsaWVuLCBJIGxpdmUgaW4gUGFyaXMsIEZyYW5jZSBhbmQgY29kZSBmb3IgYSB3aGlsZSB3aXRoIGEgcGFzc2lvbiBmb3Igd2ViIHRlY2hub2xvZ2llcyBidXQgYWxzbyBkYXRhLCB2aXN1YWxpemF0aW9uLi4uPC9wPlxcbjxwPk9uIHRoaXMgYmxvZywgSSB3aWxsIHRyeSB0byBzaGFyZSB3aXRoIHlvdSBteSBpbnRlcmVzdCBhbmQgc29tZSBleGFtcGxlcywgdHV0b3JpYWxzIG9yIHN0b3JpZXMuPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5hbGVydCgmIzM5O2hlbGxvIHdvcmxkJiMzOTspO1xcbjwvY29kZT48L3ByZT5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcG9zdHMvMjAxNS8yMDE1LTA2LTI4X215LWJsb2cubWRcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMiBpZD1cXFwibW9kdWxlXFxcIj5Nb2R1bGU8L2gyPlxcbjxwPlVuZGVyc3RhbmQgTW9kdWxlIGJlaGF2aW91ciBpcyBxdWl0ZSBpbXBvcnRhbnQgd2l0aCBOb2RlSlMsIHRob3NlIHdobyB0cmllZCB0byBwbGF5IHdpdGggaXQga25vdyB3aGF0IEkgYW0gc3BlYWtpbmcgYWJvdXQuPC9wPlxcbjxwPkhvdyBpdCB3b3Jrcywgd2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPmV4cG9ydDwvY29kZT4sIDxjb2RlPm1vZHVsZS5leHBvcnRzPC9jb2RlPi48L3A+XFxuPHA+SW4gdGhpcyB0aHJlYWQsIHdlIHdpbGwgdGFrZSBhIGRlZXAgbG9vayBhdCBob3cgaXQgaXMgd29ya2luZyBub2RlIGNvcmUgZGVwZW5kZW5jeSBtYW5hZ2VtZW50LjwvcD5cXG48cD5Nb2R1bGUgc3lzdGVtIGluIE5vZGVKUyBpcyBoYW5kbGUgYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2Jsb2IvbWFzdGVyL2xpYi9tb2R1bGUuanNcXFwiPk1vZHVsZS5qczwvYT4gZmlsZS48L3A+XFxuPHA+RGVzY3JpcHRpb24gb2YgTW9kdWxlIEFQSSBpcyA8YSBocmVmPVxcXCJodHRwczovL25vZGVqcy5vcmcvZG9jcy9sYXRlc3QvYXBpL21vZHVsZXMuaHRtbCNtb2R1bGVzX3RoZV9tb2R1bGVfb2JqZWN0XFxcIj5oZXJlPC9hPiwgYnV0IHdlIHVzZSBpdCB2ZXJ5IHJhcmVseS48L3A+XFxuPHA+TWFpbiBwdXJwb3NlIG9mIE1vZHVsZSBpcyB0byBoYW5kbGUgeW91ciBjb2RlIGRlcGVuZGVuY2llcyBieSBwcm92aWRpbmcgYSBydW50aW1lIGNvbnRleHQuPC9wPlxcbjxoMiBpZD1cXFwiY29uc3RydWN0b3JcXFwiPkNvbnN0cnVjdG9yPC9oMj5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+ZnVuY3Rpb24gTW9kdWxlKGlkLCBwYXJlbnQpIHtcXG4gIHRoaXMuaWQgPSBpZDtcXG4gIHRoaXMuZXhwb3J0cyA9IHt9O1xcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XFxufVxcbjwvY29kZT48L3ByZT5cXG48cD5vbmUgPGNvZGU+ZXhwb3J0czwvY29kZT4gb2JqZWN0IGF0dHJpYnV0ZSBpcyBjcmVhdGVkIGJ5IGRlZmF1bHQuPC9wPlxcbjxwPk5vdGUgdGhhdCBhbGwgeW91ciBkZXBlbmRlbmNpZXMgb25seSBzaG93cyB0aGlzIDxjb2RlPmV4cG9ydHM8L2NvZGU+IE1vZHVsZSBvYmplY3QgYXR0cmlidXRlIHRvIHRoZWlyIHBhcmVudCBtb2R1bGVzLiBIZXJlIGp1c3QgYW4gZXh0cmFjdCBmcm9tIE1vZHVsZSBOb2RlSlMgc291cmNlIGNvZGU6PC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4vLyBkaWdlc3QgeW91ciBtb2R1bGUgY29kZSBhbmQgdGhlbiByZXR1cm4gZXhwb3J0cyBhdHRyXFxucmV0dXJuIG1vZHVsZS5leHBvcnRzO1xcbjwvY29kZT48L3ByZT5cXG48cD5IZXJlIHNvbWUgY29tbW9uIHNjZW5hcmlvcyB3aGVuIGNyZWF0aW5nIGEgbW9kdWxlIChub3RlIHRoZSBkb3QgLikuPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5leHBvcnRzLm15Rm4gPSBmdW5jdGlvbigpIHtcXG5cXG59XFxuZXhwb3J0cy5teUZuMiA9IGZ1bmN0aW9uKCkge1xcblxcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+VGhpcyBmaWxscyB5b3VyIG1vZHVsZSBleHBvcnRzIGF0dHJpYnV0ZSBvYmplY3QgYW5kIDxjb2RlPnJldHVybiBtb2R1bGUuZXhwb3J0czwvY29kZT4gZGlyZWN0aXZlIHdpbGwgcmV0dXJuIHNvbWV0aGluZyBsaWtlOjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+e1xcbiAgbXlGbiA6IGZ1bmN0aW9uKCkge1xcblxcbiAgfSxcXG4gIG15Rm4yIDogZnVuY3Rpb24oKSB7XFxuXFxuICB9XFxufVxcbjwvY29kZT48L3ByZT5cXG48cD5TaWRlIGVmZmVjdDo8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPmV4cG9ydHMgPSB7XFxuICBmbjogZnVuY3Rpb24oKSB7XFxuXFxuICB9LFxcbiAgZm4yOiBmdW5jdGlvbigpIHtcXG5cXG4gIH1cXG59XFxuPC9jb2RlPjwvcHJlPlxcbjxwPnlvdSBleHBlY3QgPGNvZGU+cmV0dXJuIG1vZHVsZS5leHBvcnRzPC9jb2RlPiByZXR1cm5pbmcgdGhlIHNhbWUgb2JqZWN0IHNob3duIGJlZm9yZSBidXQgaXQgd29uJiMzOTt0LCB5b3UgaGF2ZSBqdXN0IGNyZWF0ZWQgYSBuZXcgb2JqZWN0IGFuZCBtb2R1bGUuZXhwb3J0cyBzdGlsbCBwb2ludCB0byBhbiBlbXB0eSBvYmoge308L3A+XFxuPHA+SWYgeW91IHdhbnQgdG8gYmUgYmUgc3VyZSwganVzdCBjYW4gc3RhcnQgeW91ciBtb2R1bGUgd2l0aCAobm90ZSB0aGUgZG90IC4pPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge307XFxuXFxuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKCkge1xcblxcbn07XFxuXFxuZXhwb3J0cy5mbjIgPSBmdW5jdGlvbigpIHtcXG5cXG59O1xcbjwvY29kZT48L3ByZT5cXG48cD5CdXQgYSBtb3JlIGNvbnZlbmllbnQgd2F5IHRvIGF2b2lkIHRoaXMgaW5jb252ZW5pZW5jZSB3b3VsZCBiZTwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+dmFyIG15U3R1ZmYgPSAmIzM5O0kgbG92ZSBOb2RlanMmIzM5OztcXG5cXG4vLyBPUlxcblxcbnZhciBteVN0dWZmID0gZnVuY3Rpb24gZG9TdHVmZigpIHtcXG5cXG59O1xcblxcbi8vIE9SXFxuXFxudmFyIG15U3R1ZmYgPSB7XFxuICBkb1N0dWZmOiBmdW5jdGlvbiBkb1N0dWZmMSgpIHtcXG5cXG4gIH0sXFxuICBkb1N0dWZmMTogZnVuY3Rpb24gZG9TdHVmZjEoKSB7XFxuXFxuICB9XFxuXFxufTtcXG5cXG4vLyBPUiAuLi4uXFxuXFxubW9kdWxlLmV4cG9ydHMgPSBteVN0dWZmO1xcbjwvY29kZT48L3ByZT5cXG48cD5CdXQgdGhlbiwgd2hhdCBoYXBwZW5lZCB3aGVuIHdlIHVzZSByZXF1aXJlID88L3A+XFxuPGgyIGlkPVxcXCJyZXF1aXJlXFxcIj5SZXF1aXJlPC9oMj5cXG48cD5XaGVuIHVzaW5nIHJlcXVpcmUsIGJlaGluZCB0aGUgc2NlbmUgYSBtb2R1bGUgY29udGV4dCBpcyBjcmVhdGVkIGFuZCB5b3VyIGNvZGUgcnVucyBpbiBpdC48L3A+XFxuPHA+PGNvZGU+cmVxdWlyZTwvY29kZT4gZnVuY3Rpb24gaXMgYXR0YWNoZWQgdG8gbm9kZSBnbG9iYWwgPGNvZGU+b2JqZWN0PC9jb2RlPiwgaW1hZ2luZSA8Y29kZT53aW5kb3c8L2NvZGU+IG9iamVjdCBmb3IgYSBicm93c2VyIGVudmlyb25tZW50LiBTbyB3aGVuIHlvdSB0eXBlIDxjb2RlPnJlcXVpcmUoJiMzOTtzb21ldGhpbmcmIzM5Oyk8L2NvZGU+IGpzIHByb3RvdHlwZSBwYXR0ZXJuIGxvb2tzIGZvciBpdCBhbmQgZmluZCByZXF1aXJlIGZ1bmN0aW9uLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+Z2xvYmFsLnJlcXVpcmUgPSByZXF1aXJlO1xcbmdsb2JhbC5leHBvcnRzID0gc2VsZi5leHBvcnRzO1xcbjwvY29kZT48L3ByZT5cXG48cD48YSBocmVmPVxcXCJodHRwczovL25vZGVqcy5vcmcvYXBpL2dsb2JhbHMuaHRtbCNnbG9iYWxzX2dsb2JhbFxcXCI+R2xvYmFsIG9iamVjdDwvYT48L3A+XFxuPHA+VG8gcmVjYXAgd2hlbiB5b3UgdHlwZSByZXF1aXJlLCBqcyBlbmdpbmUgcmV0cmlldmVzIGdsb2JhbCBvYmplY3QgYW5kIGxvb2sgZm9yIGEgcmVxdWlyZSBuYW1lZCBmdW5jdGlvbiBhbmQgZmluZCBpdCA6KTwvcD5cXG48aDMgaWQ9XFxcImZ1bmN0aW9uXFxcIj5GdW5jdGlvbjwvaDM+XFxuPHA+PGNvZGU+cmVxdWlyZTwvY29kZT4gZnVuY3Rpb24gdGFrZSBhIG5vbiBlbXB0eSBzdHJpbmcgYXMgcGFyYW1ldGVyLCBhIG5hbWUsIGEgcGF0aC48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPi8vIExvYWRzIGEgbW9kdWxlIGF0IHRoZSBnaXZlbiBmaWxlIHBhdGguIFJldHVybnMgdGhhdCBtb2R1bGUmIzM5O3NcXG4vLyBgZXhwb3J0c2AgcHJvcGVydHkuXFxuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24ocGF0aCkge1xcbiAgYXNzZXJ0KHBhdGgsICYjMzk7bWlzc2luZyBwYXRoJiMzOTspO1xcbiAgYXNzZXJ0KHV0aWwuaXNTdHJpbmcocGF0aCksICYjMzk7cGF0aCBtdXN0IGJlIGEgc3RyaW5nJiMzOTspO1xcbiAgcmV0dXJuIE1vZHVsZS5fbG9hZChwYXRoLCB0aGlzKTtcXG59O1xcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImV4YW1wbGVcXFwiPkV4YW1wbGU8L2gzPlxcbjxwPkxldCYjMzk7cyB0YWtlIGFuIGV4YW1wbGUuPC9wPlxcbjxwPi4vbWFpbi5qczwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+dmFyIGQgPSByZXF1aXJlKCYjMzk7Li9kZXBlbmRlbmN5JiMzOTspO1xcbjwvY29kZT48L3ByZT5cXG48cD4uL2RlcGVuZGVuY3kuanM8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPm1vZHVsZS5leHBvcnRzID0gJiMzOTtJIGxvdmUgSlMmIzM5OztcXG48L2NvZGU+PC9wcmU+XFxuPGgzIGlkPVxcXCJsb2FkZXItcm91dGluZXNcXFwiPkxvYWRlciByb3V0aW5lczwvaDM+XFxuPHA+TW9kdWxlIHdlIGZpcnN0IHRyeSB0byBsb2NhdGUgZmlsZSBjb250YWluaW5nIGNvZGUgZm9yIG91ciBtb2R1bGUgJiMzOTtkZXBlbmRlbmN5JiMzOTsuPC9wPlxcbjxwPkEgbG9hZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCAzIHBhcmFtZXRlcnM8L3A+XFxuPHVsPlxcbjxsaT5yZXF1ZXN0IDogaGVyZSAmIzM5O2RlcGVuZGVuY3kmIzM5OzwvbGk+XFxuPGxpPnBhcmVudDogbnVsbCBpZiByb290IG1vZHVsZTwvbGk+XFxuPGxpPmlzTWFpbjogbWFpbiByb290IGZpbGU8L2xpPlxcbjwvdWw+XFxuPHA+QSBsb2FkIGZ1bmN0aW9uIGRvZXMgYWxsIHRoaXMgc3R1ZmYgZm9yIHVzLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+TW9kdWxlLl9sb2FkID0gZnVuY3Rpb24ocmVxdWVzdCwgcGFyZW50LCBpc01haW4pIHtcXG4gIC8vIDEmZ3Q7IHJlc29sdmUgZmlsZW5hbWUgYW5kIGxvb2sgZm9yIGFic29sdXRlIHBhdGggb2YgZmlsZVxcbiAgdmFyIGZpbGVuYW1lID0gTW9kdWxlLl9yZXNvbHZlRmlsZW5hbWUocmVxdWVzdCwgcGFyZW50KTtcXG4gIC8vIDImZ3Q7IGNoZWNrIGluIGNhY2hlIGJ5IGlkIGFuZCByZXR1cm4gaXQgaWYgZm91bmRcXG4gIHZhciBjYWNoZWRNb2R1bGUgPSBNb2R1bGUuX2NhY2hlW2ZpbGVuYW1lXTtcXG4gIGlmIChjYWNoZWRNb2R1bGUpIHtcXG4gICAgcmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xcbiAgfVxcbiAgLy8gMyZndDsgY2hlY2sgaWYgbmF0aXZlIG1vZHVsZSBhbmQgY29tcGlsZSBpdCBhbmQgcmV0dXJuIGl0IGlmIG5lZWRlZCwgZXhhbXBsZSByZXF1aXJlKCYjMzk7ZnMmIzM5Oyk7XFxuICBpZiAoTmF0aXZlTW9kdWxlLmV4aXN0cyhmaWxlbmFtZSkpIHtcXG4gICAgLy8gZG8gc29tZSBjb21waWwgc3R1ZmZcXG4gIH1cXG4gIC8vIDQmZ3Q7IGNyZWF0ZSBuZXcgbW9kdWxlIHdpdGggcmVmZXJlbmNlIHRvIHBhcmVudCBNb2R1bGVcXG4gIHZhciBtb2R1bGUgPSBuZXcgTW9kdWxlKGZpbGVuYW1lLCBwYXJlbnQpO1xcbiAgLy8gNSZndDsgcHV0IGl0IGluIGNhY2hlXFxuICBNb2R1bGUuX2NhY2hlW2ZpbGVuYW1lXSA9IG1vZHVsZTtcXG4gIC8vIDYmZ3Q7IHRoZSBNT1NUIGludGVyZXN0aW5nIHBhcnQsIGxvYWQgbW9kdWxlIHNvdXJjZSBjb2RlXFxuICB0cnkge1xcbiAgICBtb2R1bGUubG9hZChmaWxlbmFtZSk7XFxuICAgIGhhZEV4Y2VwdGlvbiA9IGZhbHNlO1xcbiAgfSBmaW5hbGx5IHtcXG4gICAgaWYgKGhhZEV4Y2VwdGlvbikge1xcbiAgICAgIGRlbGV0ZSBNb2R1bGUuX2NhY2hlW2ZpbGVuYW1lXTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gNyZndDsgc2VuZCBleHBvcnRzIG9iamVjdFxcbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xcbn1cXG48L2NvZGU+PC9wcmU+XFxuPGgzIGlkPVxcXCJmb2N1c1xcXCI+Rm9jdXM8L2gzPlxcbjxwPldoZXJlIGlzIG15IGRlcGVuZGVuY3ksIGluIGFib3ZlIGV4YW1wbGUgPGNvZGU+ZGVwZW5kZW5jeTwvY29kZT48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPk1vZHVsZS5fcmVzb2x2ZUZpbGVuYW1lID0gZnVuY3Rpb24ocmVxdWVzdCwgcGFyZW50KSB7XFxuIC8vIGludGVybmFsIHN0dWZmIHRvIGNvbXB1dGUgcGF0aFxcbiByZXR1cm4gZmlsZW5hbWU7IC8vIGV4YW1wbGUgaGVyZSAvbXlwYXRoL215cHJvamVjdC9kZXBlbmRlbmN5LmpzXFxufVxcbjwvY29kZT48L3ByZT5cXG48cD5UaGUgbG9hZCBmdW5jdGlvbi48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPk1vZHVsZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XFxuLi4uXFxuICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XFxuICB0aGlzLnBhdGhzID0gTW9kdWxlLl9ub2RlTW9kdWxlUGF0aHMocGF0aC5kaXJuYW1lKGZpbGVuYW1lKSk7XFxuICAvLyAmcXVvdDsvbXlwYXRoL215cHJvamVjdC9ub2RlX21vZHVsZXMmcXVvdDtcXG4gIC8vICZxdW90Oy9teXBhdGgvbm9kZV9tb2R1bGVzJnF1b3Q7XFxuICAvLyAmcXVvdDsvbm9kZV9tb2R1bGVzJnF1b3Q7XFxuXFxuICB2YXIgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKGZpbGVuYW1lKSB8fCAmIzM5Oy5qcyYjMzk7O1xcbiAgLy8gMSZndDsgYnkgZGVmYXVsdCBvbmx5IC5qcywgLmpzb24sIC5ub2RlIHR5cGVzIGFyZSBoYW5kbGVkIGJ5IG1vZHVsZSBsb2FkZXJcXG4gIGlmICghTW9kdWxlLl9leHRlbnNpb25zW2V4dGVuc2lvbl0pIGV4dGVuc2lvbiA9ICYjMzk7LmpzJiMzOTs7XFxuICAvLyAyJmd0OyBoZXJlIGpzIGV4dGVuc2lvbnMgaXMgdXNlZCB0byBsb2FkIGRlcGVuZGVuY3kuanNcXG4gIE1vZHVsZS5fZXh0ZW5zaW9uc1tleHRlbnNpb25dKHRoaXMsIGZpbGVuYW1lKTtcXG4gIHRoaXMubG9hZGVkID0gdHJ1ZTtcXG59O1xcbjwvY29kZT48L3ByZT5cXG48cD5UaGVuIGhlcmUgd2UgZ28sIHdlIGhhdmUgZmlsZW5hbWUgcGF0aC48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPi8vIE5hdGl2ZSBleHRlbnNpb24gZm9yIC5qc1xcbk1vZHVsZS5fZXh0ZW5zaW9uc1smIzM5Oy5qcyYjMzk7XSA9IGZ1bmN0aW9uKG1vZHVsZSwgZmlsZW5hbWUpIHtcXG4gIC8vIDEmZ3Q7IGxvYWQgZmlsZSBjb250ZW50IG9mICYjMzk7ZGVwZW5kZW5jeS5qcyYjMzk7XFxuICB2YXIgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJiMzOTt1dGY4JiMzOTspO1xcbiAgLy8gMiZndDsgY29tcGlsZSBpdFxcbiAgbW9kdWxlLl9jb21waWxlKHN0cmlwQk9NKGNvbnRlbnQpLCBmaWxlbmFtZSk7XFxufTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+Q29tcGlsZXIgcm91dGluZTwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+TW9kdWxlLnByb3RvdHlwZS5fY29tcGlsZSA9IGZ1bmN0aW9uKGNvbnRlbnQsIGZpbGVuYW1lKSB7XFxuICAvLyBoZXJlIGNvbnRlbnQgaXMgYSBteSBtb2R1bGUuanMgZmlsZSBpbiBhIHN0cmluZyA6XFxuICAvLyAmcXVvdDttb2R1bGUuZXhwb3J0cyA9ICZxdW90O0l0IHdvcmtzIGZyb20gY29udGVudC5qcy4mcXVvdDs7JnF1b3Q7XFxuICAvLyBmaWxlbmFtZVxcbiAgLy8gL215cGF0aC9teXByb2plY3QvZGVwZW5kZW5jeS5qc1xcbiAgLy8gLi4uXFxuICAvLyBzb21lIHN0dWZmXFxuICAvLyAuLi5cXG4gIC8vIHJldHJpZXZlIG1vZHVsZXMgY2FjaGVcXG4gIHJlcXVpcmUuY2FjaGUgPSBNb2R1bGUuX2NhY2hlO1xcbiAgLy8gaGVyZSBjb21lIHRoZSB0cmlja3kgcGFydFxcbiAgLy8gKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKlxcbiAgLy8gY3JlYXRlIGEgd3JhcHBlciBmdW5jdGlvbiBhcyBzdHJpbmdcXG4gIHZhciB3cmFwcGVyID0gTW9kdWxlLndyYXAoY29udGVudCk7XFxuICAvLyBpdCB3aWxsIGdpdmVzIHRoZSBmb2xsb3dpbmcgYW5vbnltb3VzIGZ1bmN0aW9uXFxuICAvLyBOT1RFOiBpdCBpcyBhIHNpbXBsZSBTVFJJTkdcXG4gIC8vXFxuICAvLyAmcXVvdDsoZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7IFxcbiAgLy8gIG1vZHVsZS5leHBvcnRzID0gJnF1b3Q7SXQgd29ya3MgZnJvbSBjb250ZW50LmpzLiZxdW90OzsgXFxuICAvLyB9KTsmcXVvdDtcXG4gIC8vXFxuICAvLyBoZXJlIGEgY2FsbCB0byBuYXRpdmUgY29kZSB3aXRoIHRoaXMgY29kZSwgaW1hZ2luZSBldmFsKCkgZnVuY3Rpb24uXFxuICB2YXIgY29tcGlsZWRXcmFwcGVyID0gcnVuSW5UaGlzQ29udGV4dCh3cmFwcGVyLCB7IGZpbGVuYW1lOiBmaWxlbmFtZSB9KTtcXG4gIC8vIG5vdyB3ZSBoYXZlIGEgcmVhbCBqcyBmdW5jdGlvblxcbiAgdmFyIGFyZ3MgPSBbc2VsZi5leHBvcnRzLCByZXF1aXJlLCBzZWxmLCBmaWxlbmFtZSwgZGlybmFtZV07XFxuICByZXR1cm4gY29tcGlsZWRXcmFwcGVyLmFwcGx5KHNlbGYuZXhwb3J0cywgYXJncyk7XFxufVxcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImNvbmNsdXNpb25cXFwiPkNvbmNsdXNpb248L2gzPlxcbjx1bD5cXG48bGk+YSBkZXBlbmRlbmN5IGltcGx5IGEgbW9kdWxlIG9iamVjdDwvbGk+XFxuPGxpPmEgbG9hZGluZyBwcm9jZXNzdXMgbG9va3MgZm9yIHlvdSBjb2RlIGZpbGU8L2xpPlxcbjxsaT5hIGNvbXBpbGF0aW9uIHBoYXNlIGludm9sdmVkIGFuIGFub255bW91cyBmdW5jdGlvbiB0aGF0IHdyYXBzIHlvdXIgbW9kdWxlIGNvZGUgd2l0aCAzIG1haW4gcGFyYW1zIChleHBvcnRzLHJlcXVpcmUsbW9kdWxlKS4gQnkgZXhlY3V0aW5nIHRoaXMgZnVuY3Rpb24sIDxjb2RlPmV4cG9ydHM8L2NvZGU+IE1vZHVsZSBvYmplY3QgYXR0cmlidWUgYXR0cmlidXRlIGlzIGZpbGwuPC9saT5cXG48bGk+bG9hZGluZyBwcm9jZXNzIHJldHVybnMgeW91ciBtb2R1bGUgPGNvZGU+ZXhwb3J0czwvY29kZT4gYXR0cmlidXRlLjwvbGk+XFxuPC91bD5cXG48aDMgaWQ9XFxcInJlc3VsdFxcXCI+UmVzdWx0PC9oMz5cXG48cD5Zb3VyIGNvbXBpbGVkIGNvZGUgbG9va3MgbGlrZTo8L3A+XFxuPHA+Li9tYWluLmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4oZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XFxuICB2YXIgZGVwID0gcmVxdWlyZSgmIzM5Oy4vZGVwZW5kZW5jeSYjMzk7KTtcXG59KTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+Li9kZXBlbmRlbmN5LmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4oZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7IFxcbiAgbW9kdWxlLmV4cG9ydHMgPSAmcXVvdDtJdCB3b3JrcyBmcm9tIGNvbnRlbnQuanMuJnF1b3Q7O1xcbn0pO1xcbjwvY29kZT48L3ByZT5cXG48cD5Zb3UgY2FuIGltYWdpbmUgdGhlIGZvbGxvd2luZzwvcD5cXG48cD4uL21haW4uanM8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPihmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcXG4gIC4vZGVwZW5kZW5jeS5qc1xcbiAgdmFyIGRlcCA9IChmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgXFxuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cyA9ICZxdW90O0l0IHdvcmtzIGZyb20gY29udGVudC5qcy4mcXVvdDs7XFxuICB9KTtcXG59KTtcXG48L2NvZGU+PC9wcmU+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Bvc3RzLzIwMTUvMjAxNS0wNi0zMF9ub2RlSlMtcmVxdWlyZS1tb2R1bGUubWRcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiAnSGlnaGVyIE9yZGVyIENvbXBvbmVudCcgdGhhdCBjb250cm9scyB0aGUgcHJvcHMgb2YgYSB3cmFwcGVkXG4gKiBjb21wb25lbnQgdmlhIHN0b3Jlcy5cbiAqXG4gKiBFeHBlY3RzIHRoZSBDb21wb25lbnQgdG8gaGF2ZSB0d28gc3RhdGljIG1ldGhvZHM6XG4gKiAgIC0gZ2V0U3RvcmVzKCk6IFNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RvcmVzLlxuICogICAtIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcyk6IFNob3VsZCByZXR1cm4gdGhlIHByb3BzIGZyb20gdGhlIHN0b3Jlcy5cbiAqXG4gKiBFeGFtcGxlIHVzaW5nIG9sZCBSZWFjdC5jcmVhdGVDbGFzcygpIHN0eWxlOlxuICpcbiAqICAgIGNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgICBzdGF0aWNzOiB7XG4gKiAgICAgICAgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAvLyBVc2UgdGhpcy5wcm9wcyBsaWtlIG5vcm1hbCAuLi5cbiAqICAgICAgfVxuICogICAgfSlcbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqXG4gKiBFeGFtcGxlIHVzaW5nIEVTNiBDbGFzczpcbiAqXG4gKiAgICBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gKiAgICAgIHN0YXRpYyBnZXRTdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgIH1cbiAqICAgICAgc3RhdGljIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcykge1xuICogICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgfVxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH1cbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqIEEgZ3JlYXQgZXhwbGFuYXRpb24gb2YgdGhlIG1lcml0cyBvZiBoaWdoZXIgb3JkZXIgY29tcG9uZW50cyBjYW4gYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9iaXQubHkvMWFiUGtyUFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Z1bmN0aW9ucyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGNvbm5lY3RUb1N0b3JlcyhDb21wb25lbnQpIHtcbiAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIHN0YXRpYyBtZXRob2RzLlxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRTdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG4gIGlmICghKDAsIF9mdW5jdGlvbnMuaXNGdW5jdGlvbikoQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3JlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlcygpIGV4cGVjdHMgdGhlIHdyYXBwZWQgY29tcG9uZW50IHRvIGhhdmUgYSBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkgbWV0aG9kJyk7XG4gIH1cblxuICAvLyBXcmFwcGVyIENvbXBvbmVudC5cbiAgdmFyIFN0b3JlQ29ubmVjdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTdG9yZUNvbm5lY3Rpb24nLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgc3RvcmVzID0gQ29tcG9uZW50LmdldFN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgc3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHN0b3JlLmxpc3RlbihfdGhpcy5vbkNoYW5nZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChDb21wb25lbnQuY29tcG9uZW50RGlkQ29ubmVjdCkge1xuICAgICAgICBDb21wb25lbnQuY29tcG9uZW50RGlkQ29ubmVjdCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS51bmxpc3RlbihfdGhpczIub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2Z1bmN0aW9ucy5hc3NpZ24pKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gU3RvcmVDb25uZWN0aW9uO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25uZWN0VG9TdG9yZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVhY2hPYmplY3QgPSBlYWNoT2JqZWN0O1xuZXhwb3J0cy5hc3NpZ24gPSBhc3NpZ247XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59O1xuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBlYWNoT2JqZWN0KGYsIG8pIHtcbiAgby5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tKSB7XG4gICAgT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGYoa2V5LCBmcm9tW2tleV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNvdXJjZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBlYWNoT2JqZWN0KGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH0sIHNvdXJjZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXJNZW51LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXJNZW51LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlck1lbnUuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlck1lbnUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuICBIQU1CVVJHRVIgSUNPTlMgQ09NUE9ORU5UXFxyXFxuXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKipcXHJcXG4gKiBUb2dnbGUgU3dpdGNoIEdsb2JhbHNcXHJcXG4gKlxcclxcbiAqIEFsbCBzd2l0Y2hlcyBzaG91bGQgdGFrZSBvbiB0aGUgY2xhc3MgYGMtaGFtYnVyZ2VyYCBhcyB3ZWxsIGFzIHRoZWlyXFxyXFxuICogdmFyaWFudCB0aGF0IHdpbGwgZ2l2ZSB0aGVtIHVuaXF1ZSBwcm9wZXJ0aWVzLiBUaGlzIGNsYXNzIGlzIGFuIG92ZXJ2aWV3XFxyXFxuICogY2xhc3MgdGhhdCBhY3RzIGFzIGEgcmVzZXQgZm9yIGFsbCB2ZXJzaW9ucyBvZiB0aGUgaWNvbi5cXHJcXG4gKi9cXG4uYy1oYW1idXJnZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgdG9wOiA1JTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgei1pbmRleDogNTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgZm9udC1zaXplOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci5lZGl0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTsgfVxcblxcbi5jLWhhbWJ1cmdlcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmMtaGFtYnVyZ2VyIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEzcHg7XFxuICBsZWZ0OiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxcblxcbi5jLWhhbWJ1cmdlciBzcGFuOjpiZWZvcmUsXFxuLmMtaGFtYnVyZ2VyIHNwYW46OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29udGVudDogXFxcIlxcXCI7IH1cXG5cXG4uYy1oYW1idXJnZXIgc3Bhbjo6YmVmb3JlIHtcXG4gIHRvcDogLTVweDsgfVxcblxcbi5jLWhhbWJ1cmdlciBzcGFuOjphZnRlciB7XFxuICBib3R0b206IC01cHg7IH1cXG5cXG4vKipcXHJcXG4gKiBTdHlsZSAxXFxyXFxuICpcXHJcXG4gKiBSb3RhdGluZyBoYW1idXJnZXIgaWNvbiAocm90KSwgdGhhdCBzaW1wbHkgcm90YXRlcyA5MCBkZWdyZWVzIHdoZW4gYWN0aXZhdGVkLlxcclxcbiAqIE5vdGhpbmcgdG9vIGZhbmN5LCBzaW1wbGUgdHJhbnNpdGlvbi5cXHJcXG4gKi9cXG4uYy1oYW1idXJnZXItLXJvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0RTNDO1xcbiAgei1pbmRleDogMTAxOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1yb3Qgc3BhbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgfVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSwgaS5lLiBtZW51IG9wZW4gKi9cXG4uYy1oYW1idXJnZXItLXJvdC5pcy1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTQxMDsgfVxcblxcbi5jLWhhbWJ1cmdlci0tcm90LmlzLWFjdGl2ZSBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxcblxcbi8qKlxcclxcbiAqIFN0eWxlIDJcXHJcXG4gKlxcclxcbiAqIEhhbWJ1cmdlciB0byBcXFwieFxcXCIgKGh0eCkuIFRha2VzIG9uIGEgaGFtYnVyZ2VyIHNoYXBlLCBiYXJzIHNsaWRlXFxyXFxuICogZG93biB0byBjZW50ZXIgYW5kIHRyYW5zZm9ybSBpbnRvIGFuIFxcXCJ4XFxcIi5cXHJcXG4gKi9cXG4uYy1oYW1idXJnZXItLWh0eCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0RDMERFOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHggc3BhbiB7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eCBzcGFuOjpiZWZvcmUsXFxuLmMtaGFtYnVyZ2VyLS1odHggc3Bhbjo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcywgMC4zcztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3MsIDBzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHggc3Bhbjo6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgdHJhbnNmb3JtOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHggc3Bhbjo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07IH1cXG5cXG4vKiBhY3RpdmUgc3RhdGUsIGkuZS4gbWVudSBvcGVuICovXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUgc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHNwYW46OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUsXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjNzOyB9XFxuXFxuLyoqXFxyXFxuICogU3R5bGUgM1xcclxcbiAqXFxyXFxuICogSGFtYnVyZ2VyIHRvIGxlZnQtYXJyb3cgKGh0bGEpLiBIYW1idXJnZXIgbWVudSB0cmFuc2Zvcm1zIHRvIGEgbGVmdC1wb2ludGluZ1xcclxcbiAqIGFycm93LiBVc3VhbGx5IGluZGljYXRlcyBhbiBvZmYgY2FudmFzIG1lbnUgc2xpZGluZyBpbiBmcm9tIGxlZnQgdGhhdFxcclxcbiAqIHdpbGwgYmUgY2xvc2Ugb24gcmUtY2xpY2sgb2YgdGhlIGljb24uXFxyXFxuICovXFxuLmMtaGFtYnVyZ2VyLS1odGxhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmRjNjQ7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEgc3BhbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYSBzcGFuOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHdpZHRoIDAuM3MsIHRvcCAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhIHNwYW46OmFmdGVyIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB3aWR0aCAwLjNzLCBib3R0b20gMC4zczsgfVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSwgaS5lLiBtZW51IG9wZW4gKi9cXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwM2I7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEuaXMtYWN0aXZlIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlLFxcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMXB4KSB0cmFuc2xhdGVZKDFweCkgcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExcHgpIHRyYW5zbGF0ZVkoLTFweCkgcm90YXRlKC00NWRlZyk7IH1cXG5cXG4vKipcXHJcXG4gKiBTdHlsZSA0XFxyXFxuICpcXHJcXG4gKiBIYW1idXJnZXIgdG8gcmlnaHQtYXJyb3cgKGh0cmEpLiBIYW1idXJnZXIgbWVudSB0cmFuc2Zvcm1zIHRvIGFcXHJcXG4gKiByaWdodC1wb2ludGluZyBhcnJvdy4gVXN1YWxseSBpbmRpY2F0ZXMgYW4gb2ZmIGNhbnZhcyBtZW51IHNsaWRpbmcgaW4gZnJvbVxcclxcbiAqIHJpZ2h0IHRoYXQgd2lsbCBiZSBjbG9zZSBvbiByZS1jbGljayBvZiB0aGUgaWNvbi5cXHJcXG4gKi9cXG4uYy1oYW1idXJnZXItLWh0cmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTY1MDsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYSBzcGFuIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhIHNwYW46OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB3aWR0aCAwLjNzLCB0b3AgMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYSBzcGFuOjphZnRlciB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB3aWR0aCAwLjNzLCBib3R0b20gMC4zczsgfVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSwgaS5lLiBtZW51IG9wZW4gKi9cXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTVkMDA7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlLFxcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKDFweCkgcm90YXRlKC00NWRlZyk7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEuaXMtYWN0aXZlIHNwYW46OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC0xcHgpIHJvdGF0ZSg0NWRlZyk7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzNTBweCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzUwcHgsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDM1MHB4LCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIyMDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0VCQjY0OTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE1NSwgMC42MDUsIDAuMTgsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTU1LCAwLjYwNSwgMC4xOCwgMS4wNTUpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTU1LCAwLjYwNSwgMC4xOCwgMS4wNTUpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE1NSwgMC42MDUsIDAuMTgsIDEuMDU1KTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNTUsIDAuNjA1LCAwLjE4LCAxLjA1NSk7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkgYSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI0YyRUZFRjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaSBhLmxvZ29pemU6aG92ZXIge1xcbiAgY29sb3I6ICNGMkVGRUY7XFxuICBmb250LXdlaWdodDogOTAwOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLnNwYWNlciB7XFxuICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6ICNBQUE2QTY7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxubmF2I292ZXJsb3JkLm92ZXJsb3JkX2FjdGl2ZSB1bCNkcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93bi5vbmJsb2cgbGkgYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI0YyRUZFRjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93bi5vbmJsb2cgbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI0FBQTZBNjsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5kcm9wZG93bl9tZXNzYWdlIHtcXG4gIG1heC13aWR0aDogMTcwcHg7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuZHJvcGRvd25fbWVzc2FnZSBhIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuZHJvcGRvd25fbWVzc2FnZSBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuZHJvcGRvd25fbWVzc2FnZSBhOmhvdmVyIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5kcm9wZG93bl9tZXNzYWdlIGEgc3BhbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtZmFtaWx5OiAnZnJlaWdodC1zYW5zLXBybycsc2Fucy1zZXJpZjsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlck1lbnUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG4vLyBcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM4ODg7IH1cXG5cXG5kaXYuaGVhZGVyICN1c2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2YwZjBmMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmRpdi5oZWFkZXIgI3VzZXIgaDIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgY29sb3I6ICM0NzRFM0M7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6ICdmcmVpZ2h0LXNhbnMtcHJvJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbmRpdi5oZWFkZXIgI3VzZXIgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBjb2xvcjogIzU5NjI0RDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxcblxcbmRpdi5oZWFkZXIgI3VzZXItbG9nbyB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMTBweCAxMTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzlCQTQ1MDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxcblxcbnVsI3VzZXItbGlua3Mge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbnVsI3VzZXItbGlua3MgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNFVEtXLXAuanBnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2ltYWdlcy9waWN0dXJlLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0Zvb3Rlci5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9c3RhciZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxyXG4gICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2doYnRucy5jb20vZ2l0aHViLWJ0bi5odG1sP3VzZXI9ZGFydWw3NSZyZXBvPXdlYi1yZWFjdCZ0eXBlPWZvcmsmY291bnQ9dHJ1ZSZ2PTInIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9JzAnIHdpZHRoPScxNzBweCcgaGVpZ2h0PScyMHB4Jz48L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRm9vdGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdGb290ZXInO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxyXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxIZWFkZXJUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxyXG4gICAgbGV0IHRpdGxlVGVtcGxhdGUgPSAnJXMgfCBKdWxpZW4gVmFsw6lyeSc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWxtZXQgdGl0bGU9e21ldGFzLnRpdGxlfSBtZXRhPXttZXRhcy5tZXRhfSBsaW5rPXttZXRhcy5saW5rfSB0aXRsZVRlbXBsYXRlPXt0aXRsZVRlbXBsYXRlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5IdG1sSGVhZGVyVGFncy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSHRtbEhlYWRlclRhZ3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udDogMTAwJSBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2FhYTsgfVxcblxcbmgxLCBoMiwgaDMge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiAjMEMxNzIzOyB9XFxuXFxuaDEgYSwgaDIgYSwgaDMgYSwgaDQgYSwgaDUgYSwgaDYgYSB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDsgfVxcblxcbmgxIGE6aG92ZXIge1xcbiAgY29sb3I6ICNERjRBN0Y7IH1cXG5cXG51bCB7XFxuICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XFxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMDsgfVxcbiAgdWwgbGkge1xcbiAgICBjb2xvcjogIzE2NzdBQTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjNEQ0RDREO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJ1dHRvbi5idXR0b25pemUsIGEuYnV0dG9uaXplIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZS5zbWFsbCwgYS5idXR0b25pemUuc21hbGwge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmJ1dHRvbi5idXR0b25pemUudGlueSwgYS5idXR0b25pemUudGlueSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZTpob3ZlciwgYS5idXR0b25pemU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5hLCBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxcblxcbmE6bGluaywgYTp2aXNpdGVkLCBhOmhvdmVyLCBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cXG5cXG51bCN1c2VyLWxpbmtzIGxpIGE6aG92ZXIsIGEuYnV0dG9uaXplOmhvdmVyLCBidXR0b24uYnV0dG9uaXplOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERjRBN0Y7XFxuICBib3JkZXItY29sb3I6ICNERjRBN0Y7IH1cXG5cXG5ociB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjbGVhcjogYm90aDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY2xlYXI6IGJvdGg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2Y0ZjNmMzsgfVxcblxcbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgZnJvbSBodHRwczovL3Njb3RjaC5pby9xdWljay10aXBzL2RlZmF1bHQtc2l6ZXMtZm9yLXR3aXR0ZXItYm9vdHN0cmFwcy1tZWRpYS1xdWVyaWVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiA3NTBweDsgfSB9XFxuXFxuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiA3NTBweDsgfSB9XFxuXFxuLyogTGFyZ2UgRGV2aWNlcywgV2lkZSBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogNzUwcHg7IH0gfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5DT05UQUNUIFBBR0U8L2gxPlxyXG4gICAgICAgIDxwPnRlc3QgdGhlIDQwNCBwYWdlIDxhIGhyZWY9Jy9taWRkbGVvZm5vd2hlcmUnPmhlcmU8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdC5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4uL1Bvc3QvUG9zdEl0ZW0nO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ib21lU2VjdGlvbi5zY3NzJyk7XHJcbn1cclxuXHJcbmxldCBob21lU2VjdGlvbiA9IGNsYXNzIEhvbWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcclxuICAgIGxldCBwb3N0cyA9IEhvbWVTZWN0aW9uLmdldFByb3BzRnJvbVN0b3JlcygpLnBvc3RzO1xyXG4gICAgbGV0IHBvc3RJdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBvc3RzKSB7XHJcbiAgICAgIGxldCBrZXlIciA9ICdocicgKyBrZXk7XHJcbiAgICAgIHBvc3RJdGVtcy5wdXNoKDxociBrZXk9e2tleUhyfSAvPik7XHJcbiAgICAgIHBvc3RJdGVtcy5wdXNoKDxQb3N0SXRlbSBrZXk9e2tleX0gcG9zdD17cG9zdHNba2V5XX0gLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxyXG4gICAgICAgICAge3Bvc3RJdGVtc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFN0b3JlcygpIHtcclxuICAgIHJldHVybiBbQXBwU3RvcmVdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3RzOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBvc3RzXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMoaG9tZVNlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbmxldCBwcmlzbSA9IHJlcXVpcmUoJ3ByaXNtanMnKTtcclxuXHJcbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX1Bvc3RJdGVtLnNjc3MnKTtcclxuICByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzJyk7XHJcbn1cclxuXHJcbmxldCBwb3N0SXRlbSA9IGNsYXNzIFBvc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcmlzbS5oaWdobGlnaHRBbGwoKCkgPT4ge30pO1xyXG5cclxuICAgICAgaWYgKHRoaXMucHJvcHMucGFyYW1zKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgIGxldCBkaXNxdXNfc2hvcnRuYW1lID0gJ2RhcnVsJzsgICAgICBcclxuICAgICAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkc3EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsgZHNxLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JzsgZHNxLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHNxLnNyYyA9ICcvLycgKyBkaXNxdXNfc2hvcnRuYW1lICsgJy5kaXNxdXMuY29tL2VtYmVkLmpzJztcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSkuYXBwZW5kQ2hpbGQoZHNxKTtcclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcmlzbS5oaWdobGlnaHRBbGwoKCkgPT4ge30pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgcG9zdCA9IHRoaXMucHJvcHMucG9zdCxcclxuICAgICAgICBkaXNxdXNNYXJrdXAgPSAnJyxcclxuICAgICAgICBtYXJrZG93bkNsYXNzID0gJ21hcmtkb3duLWJvZHkgaGlnaGxpZ2h0IHByZXZpZXcnLFxyXG4gICAgICAgIG1vcmVCdXR0b24gPSAnJyxcclxuICAgICAgICBiYWNrQnV0dG9uID0gJycsXHJcbiAgICAgICAgdGltZSA9ICcnLFxyXG4gICAgICAgIGVkaXRVcmwgPSAnJyxcclxuICAgICAgICBoZWxtZXRNYXJrdXAgPSAnJyxcclxuICAgICAgICBlZGl0QnV0dG9uTWFya3VwID0gJyc7XHJcblxyXG4gICAgaWYgKHBvc3QpIHtcclxuICAgICAgbW9yZUJ1dHRvbiA9IDxMaW5rIGNsYXNzTmFtZT0nYnV0dG9uaXplIHNtYWxsJyB0bz17Jy9wb3N0LycgKyBwb3N0LnBlcm1hbGlua30+Q29udGludWUgcmVhZGluZyDihpI8L0xpbms+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcykge1xyXG4gICAgICBtYXJrZG93bkNsYXNzID0gJ21hcmtkb3duLWJvZHkgaGlnaGxpZ2h0JztcclxuICAgICAgLy8gZnJvbSBzdG9yZVxyXG4gICAgICBsZXQgcG9zdHMgPSBQb3N0SXRlbS5nZXRQcm9wc0Zyb21TdG9yZXMoKS5wb3N0cztcclxuICAgICAgbGV0IHBvc3RJZCA9IHRoaXMucHJvcHMucGFyYW1zLnBvc3RJZDtcclxuICAgICAgbGV0IHRpdGxlID0gUG9zdEl0ZW0uZ2V0UHJvcHNGcm9tU3RvcmVzKCkuY29uZmlnLmhlbG1ldC50aXRsZTtcclxuICAgICAgLy8gZmluZCBieSBwZXJtYWxpbmtcclxuICAgICAgcG9zdCA9IF8uZmluZChwb3N0cywgZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnBlcm1hbGluayA9PT0gcG9zdElkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRpbWUgPSA8dGltZSBkYXRlVGltZT17cG9zdC5kYXRlLnRvU3RyaW5nKCl9Pntwb3N0LmRhdGV9PC90aW1lPjtcclxuICAgICAgbGV0IGhvbWVwYWdlID0gUG9zdEl0ZW0uZ2V0UHJvcHNGcm9tU3RvcmVzKCkucGFja2FnZWpzb24uaG9tZXBhZ2U7XHJcbiAgICAgIGVkaXRVcmwgPSBob21lcGFnZSArICcvZWRpdC9tYXN0ZXIvcG9zdHMvMjAxNS8nICsgcG9zdC5maWxlbmFtZTtcclxuICAgICAgZWRpdEJ1dHRvbk1hcmt1cCA9IDxhIGhyZWY9e2VkaXRVcmx9IHRhcmdldD0nX2JsYW5rJyB0aXRsZT0nZWRpdCBtZSc+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2MtaGFtYnVyZ2VyIGVkaXRpb24nIGhyZWY9e2VkaXRVcmx9IHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgIDxzcGFuPmVkaXRpb248L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT47XHJcbiAgICAgIGxldCB0ZW1wbGF0ZVRpdGxlID0gJyVzIHwgJyArIHBvc3QudGl0bGU7XHJcbiAgICAgIGxldCBwb3N0VGl0bGUgPSB0aXRsZSArICcgfCAnICsgcG9zdC50aXRsZTtcclxuICAgICAgaGVsbWV0TWFya3VwID0gPEhlbG1ldCB0aXRsZT17dGl0bGV9IHRpdGxlVGVtcGxhdGU9e3RlbXBsYXRlVGl0bGV9IG1ldGE9e1tcclxuICAgICAgICB7J25hbWUnOiAnZGVzY3JpcHRpb24nLCAnY29udGVudCc6IHBvc3RUaXRsZX0sXHJcbiAgICAgICAgeydwcm9wZXJ0eSc6ICdvZzp0eXBlJywgJ2NvbnRlbnQnOiAnYXJ0aWNsZSd9XHJcbiAgICAgIF19IC8+O1xyXG5cclxuICAgICAgZGlzcXVzTWFya3VwID0gPGRpdiBpZD0nZGlzcXVzX3RocmVhZCc+PC9kaXY+O1xyXG4gICAgICBiYWNrQnV0dG9uID0gPExpbmsgY2xhc3NOYW1lPSdidXR0b25pemUgc21hbGwnIHRvPXsnLyd9PkhvbWU8L0xpbms+O1xyXG5cclxuICAgICAgLy9wcmV2aWV3Q2xhc3MgPSAnJztcclxuXHJcbiAgICAgIC8vIGlmICghcG9zdCkge1xyXG4gICAgICAvLyAgIHRvZG8gcmVkaXJlY3RcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLy8gcGFyYW1cclxuICAgIGxldCBwb3N0UGVybWFsaW5rID0gJy9wb3N0LycgKyBwb3N0LnBlcm1hbGluaztcclxuICAgIGxldCBhcnRpY2xlQ29udGFpbmVyQ2xhc3MgPSAncG9zdCAnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZUNvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXJrZG93bi1ib2R5Jz5cclxuICAgICAgICAgICAge3RpbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtlZGl0QnV0dG9uTWFya3VwfVxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICA8TGluayB0bz17cG9zdFBlcm1hbGlua30+e3Bvc3QudGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXJrZG93bkNsYXNzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5ib2R5fX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyc+XHJcbiAgICAgICAgICAgIHttb3JlQnV0dG9ufVxyXG4gICAgICAgICAgICB7YmFja0J1dHRvbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2hlbG1ldE1hcmt1cH1cclxuICAgICAgICAgIHtkaXNxdXNNYXJrdXB9XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFN0b3JlcygpIHtcclxuICAgIHJldHVybiBbQXBwU3RvcmVdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZzogQXBwU3RvcmUuZ2V0U3RhdGUoKS5jb25maWcsXHJcbiAgICAgIHBvc3RzOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBvc3RzLFxyXG4gICAgICBwYWNrYWdlanNvbjogQXBwU3RvcmUuZ2V0U3RhdGUoKS5wYWNrYWdlanNvblxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5wb3N0SXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnUG9zdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvU3RvcmVzKHBvc3RJdGVtKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9Qb3N0L1Bvc3RJdGVtLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicHJpc21qc1wiXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1Bvc3RJdGVtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Qb3N0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Qb3N0SXRlbS5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL1Bvc3QvX1Bvc3RJdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhcnRpY2xlIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbmFydGljbGUucG9zdCBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7IH1cXG5cXG5hcnRpY2xlLnBvc3QgcCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcblxcbmFydGljbGUgLm1hcmtkb3duLWJvZHkgYSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UxZTFlMTsgfVxcblxcbmFydGljbGUgLm1hcmtkb3duLWJvZHkgYTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICNGRjAwNDI7IH1cXG5cXG5hcnRpY2xlIGgxLCBhcnRpY2xlIGgyLCBhcnRpY2xlIGgzLCBhcnRpY2xlIGg0LCBhcnRpY2xlIGg1LCBhcnRpY2xlIGg2LCBhcnRpY2xlIG9sLCBhcnRpY2xlIHVsLCBhcnRpY2xlIHRhYmxlLCBhcnRpY2xlIGJsb2NrcXVvdGUsIGFydGljbGUgLm1hcmtkb3duLWJvZHksIC5idXR0b25zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA3MDBweDsgfVxcblxcbi5wcmV2aWV3IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiA0MzBweDsgfVxcblxcbmRpdi5tYXJrZG93bi1ib2R5IHA6Zmlyc3QtY2hpbGQ6OmZpcnN0LWxldHRlciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiA1cHggOHB4IC05cHggMDtcXG4gIGNvbG9yOiAjREY0QTdGOyB9XFxuXFxuY29kZTpub3QoW2NsYXNzXSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjZCRjsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Qb3N0L19Qb3N0SXRlbS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJpc20uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcmlzbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcHJpc20uY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vcHJpc21qcy5jb20vZG93bmxvYWQuaHRtbD90aGVtZXM9cHJpc20mbGFuZ3VhZ2VzPW1hcmt1cCtjc3MrY2xpa2UramF2YXNjcmlwdCtnaXQrZ28mcGx1Z2lucz1saW5lLW51bWJlcnMgKi9cXG4vKipcXG4gKiBwcmlzbS5qcyBkZWZhdWx0IHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUxcXG4gKiBCYXNlZCBvbiBkYWJibGV0IChodHRwOi8vZGFiYmxldC5jb20pXFxuICogQGF1dGhvciBMZWEgVmVyb3VcXG4gKi9cXG5cXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LXNoYWRvdzogMCAxcHggd2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsIG1vbm9zcGFjZTtcXG5cXHRkaXJlY3Rpb246IGx0cjtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdoaXRlLXNwYWNlOiBwcmU7XFxuXFx0d29yZC1zcGFjaW5nOiBub3JtYWw7XFxuXFx0d29yZC1icmVhazogbm9ybWFsO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHQtby10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG5cXG5cXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1vei1oeXBoZW5zOiBub25lO1xcblxcdC1tcy1oeXBoZW5zOiBub25lO1xcblxcdGh5cGhlbnM6IG5vbmU7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOjotbW96LXNlbGVjdGlvbiwgcHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjotbW96LXNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06Oi1tb3otc2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjotbW96LXNlbGVjdGlvbiB7XFxuXFx0dGV4dC1zaGFkb3c6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogI2IzZDRmYztcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06OnNlbGVjdGlvbiwgcHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjpzZWxlY3Rpb24sXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSA6OnNlbGVjdGlvbiB7XFxuXFx0dGV4dC1zaGFkb3c6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogI2IzZDRmYztcXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG5cXHRjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxuXFx0cHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdFxcdHRleHQtc2hhZG93OiBub25lO1xcblxcdH1cXG59XFxuXFxuLyogQ29kZSBibG9ja3MgKi9cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0bWFyZ2luOiAuNWVtIDA7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcXG59XFxuXFxuLyogSW5saW5lIGNvZGUgKi9cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcblxcdHBhZGRpbmc6IC4xZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogLjNlbTtcXG59XFxuXFxuLnRva2VuLmNvbW1lbnQsXFxuLnRva2VuLnByb2xvZyxcXG4udG9rZW4uZG9jdHlwZSxcXG4udG9rZW4uY2RhdGEge1xcblxcdGNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcblxcbi50b2tlbi5wdW5jdHVhdGlvbiB7XFxuXFx0Y29sb3I6ICM5OTk7XFxufVxcblxcbi5uYW1lc3BhY2Uge1xcblxcdG9wYWNpdHk6IC43O1xcbn1cXG5cXG4udG9rZW4ucHJvcGVydHksXFxuLnRva2VuLnRhZyxcXG4udG9rZW4uYm9vbGVhbixcXG4udG9rZW4ubnVtYmVyLFxcbi50b2tlbi5jb25zdGFudCxcXG4udG9rZW4uc3ltYm9sLFxcbi50b2tlbi5kZWxldGVkIHtcXG5cXHRjb2xvcjogIzkwNTtcXG59XFxuXFxuLnRva2VuLnNlbGVjdG9yLFxcbi50b2tlbi5hdHRyLW5hbWUsXFxuLnRva2VuLnN0cmluZyxcXG4udG9rZW4uY2hhcixcXG4udG9rZW4uYnVpbHRpbixcXG4udG9rZW4uaW5zZXJ0ZWQge1xcblxcdGNvbG9yOiAjNjkwO1xcbn1cXG5cXG4udG9rZW4ub3BlcmF0b3IsXFxuLnRva2VuLmVudGl0eSxcXG4udG9rZW4udXJsLFxcbi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZyxcXG4uc3R5bGUgLnRva2VuLnN0cmluZyB7XFxuXFx0Y29sb3I6ICNhNjdmNTk7XFxuXFx0YmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgLjUpO1xcbn1cXG5cXG4udG9rZW4uYXRydWxlLFxcbi50b2tlbi5hdHRyLXZhbHVlLFxcbi50b2tlbi5rZXl3b3JkIHtcXG5cXHRjb2xvcjogIzA3YTtcXG59XFxuXFxuLnRva2VuLmZ1bmN0aW9uIHtcXG5cXHRjb2xvcjogI0RENEE2ODtcXG59XFxuXFxuLnRva2VuLnJlZ2V4LFxcbi50b2tlbi5pbXBvcnRhbnQsXFxuLnRva2VuLnZhcmlhYmxlIHtcXG5cXHRjb2xvcjogI2U5MDtcXG59XFxuXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4uYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2tlbi5pdGFsaWMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRva2VuLmVudGl0eSB7XFxuXFx0Y3Vyc29yOiBoZWxwO1xcbn1cXG5cXG5wcmUubGluZS1udW1iZXJzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjhlbTtcXG5cXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5cXG5wcmUubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhvbWUtc2VjdGlvbi1hY3Rpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2REY2RkY7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LXR3byB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFRTdGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XHJcbiAgICAgICAgPHA+eWVzIGluZGVlZDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTm90Rm91bmRTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdOb3RGb3VuZFNlY3Rpb24nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanNcbiAqKi8iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbi8qZXNsaW50LWRpc2FibGUgbmV3LWNhcCovXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXHJcblxyXG5sZXQgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG5cclxucm91dGVyLnVzZSgnL2FwaS8qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXBpLnRvZG8ocmVxLCByZXMsIG5leHQpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL2FwaS9hcGknXSwgKCkgPT4ge1xyXG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3JvdXRlcy9hcGkuanNcbiAqKi8iLCJsZXQgYXBpID0ge1xyXG4gIHRvZG86IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgIC8vIHNpbXBsZSBhcGkgZmV0Y2ggZXhhbXBsZSwgbm8gb3duIERCIGhlcmUgc28gZXh0ZXJuYWwgY2FsbCBpcyBtYWRlLlxyXG5cclxuICAgICAgLy8gaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWJcclxuICAgICAvKiBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoanNvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAqL1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dGVzdDogJ3Rlc3QnfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbmV4dChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3RoZXJ0b2RvOiAoKSA9PiB7XHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvYXBpL2FwaS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=