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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjU0NzBlMGJmN2I0MDU5ZTZmZDkiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJNZW51LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9tYWtlSG90LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcuanNvbiIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1IF5cXC5cXC8uKlxcLm1kJCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMjhfbXktYmxvZy5tZCIsIndlYnBhY2s6Ly8vLi9wb3N0cy8yMDE1LzIwMTUtMDYtMzBfbm9kZUpTLXJlcXVpcmUtbW9kdWxlLm1kIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXJNZW51LnNjc3M/MDQ1MiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlck1lbnUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzPzBkMzMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3BpY3R1cmUuanBnIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bvc3QvX1Bvc3RJdGVtLnNjc3M/MDk0MyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Qb3N0L19Qb3N0SXRlbS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3M/NzA3MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJpc20vcHJpc20uY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzPzQwMGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvcm91dGVzL2FwaS5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvYXBpL2FwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NyQ2lCLENBQU07Ozs7aUNBQ04sQ0FBTTs7Ozs7O29DQUdILENBQVM7Ozs7eUNBQ1QsQ0FBZTs7Ozs7QUFHbkMsS0FBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU07S0FDN0MsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7QUFFbkQsS0FBSSxHQUFHLEdBQUcsMkJBQVMsQ0FBQzs7QUFFcEIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFDMUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyw4QkFBYyxDQUFDLFVBQVUsQ0FB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QyxRQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJELEtBQUksR0FBRyxHQUFHO0FBQ1IsT0FBSSxFQUFFLGNBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDeEIsU0FBSTtBQUNGLFVBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQVlsRCxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO01BQ3RDLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixXQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDWDtJQUNGO0FBQ0QsWUFBUyxFQUFFLHFCQUFNLEVBRWhCO0VBQ0YsQ0FBQzs7c0JBRWEsR0FBRyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyNTQ3MGUwYmY3YjQwNTllNmZkOVxuICoqLyIsIi8vIE5PREVcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gRVhQUkVTU1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XHJcblxyXG4vLyBQcm9maWxlIGRldiBvciBwcm9kdWN0aW9uXHJcbmxldCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuREVWID8gJ2RldicgOiAncHJvZCcsXHJcblx0cHVibGljUGF0aCA9IHByb2ZpbGUgPT09ICdkZXYnID8gJ2J1aWxkJyA6ICdkaXN0JztcclxuXHJcbmxldCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAuc2V0KCdwb3J0JywgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwdWJsaWNQYXRoKSk7XHJcbmFwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYXBwL2ltYWdlcy9mYXZpY29uLmljbycpKSk7XHJcblxyXG4vL1xyXG4vLyBSZWdpc3RlciBtaWRkbGV3YXJlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gcmVuZGVyZXJcclxubGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcclxuLy8gYXBpc1xyXG5sZXQgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XHJcblxyXG4vL1xyXG4vLyBDb25maWd1cmUgbWlkZGxld2FyZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxucmVuZGVyZXIuaW5pdChwcm9maWxlKTtcclxuXHJcbi8vXHJcbi8vIEFjdGl2YXRlIG1pZGRsZXdhcmVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFwcC51c2UoYXBpUm91dGVzKTtcclxuYXBwLnVzZShyZW5kZXJlci5yZW5kZXIpO1xyXG5cclxuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBhcHAuZ2V0KCdwb3J0JykpO1xyXG59KTtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICAvLyBhY2NlcHQgdXBkYXRlIG9mIGRlcGVuZGVuY3lcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4vcm91dGVzL2FwaScsICcuL3JvdXRlcy9yZW5kZXJlciddLCAoKSA9PiB7XHJcbiAgICBhcGlSb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hcGknKTtcclxuICAgIGFwcC51c2UoYXBpUm91dGVzKTtcclxuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcclxuICAgIHJlbmRlcmVyLmluaXQoJ2RldicpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvc2VydmVyL3NlcnZlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh0dHBcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XHJcblxyXG5sZXQgcHJvZmlsZSA9ICdkZXYnO1xyXG5cclxudmFyIHJvdXRlc1JlbmRlcmVyID0ge1xyXG4gIGluaXQ6ICh0eXBlKSA9PiB7XHJcbiAgICBwcm9maWxlID0gdHlwZTtcclxuICAgIHJlbmRlcmVyLmluaXQodHlwZSk7XHJcbiAgfSxcclxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHJlcSwgcmVzLCBuZXh0KTtcclxuICB9XHJcbn07XHJcblxyXG4vL1xyXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi91dGlscy9yZW5kZXJlciddLCAoKSA9PiB7XHJcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XHJcbiAgICByZW5kZXJlci5pbml0KHByb2ZpbGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNSZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvcm91dGVzL3JlbmRlcmVyLmpzXG4gKiovIiwiLy8gTk9ERVxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuLy8gRVhURVJOQUxTXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IElzbyBmcm9tICdpc28nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT1JFXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vYXBwL3JvdXRlcyc7XHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vLi4vYXBwL2FsdCc7XHJcblxyXG5sZXQgaHRtbCA9ICcnO1xyXG5cclxudmFyIHJlbmRlcmVyID0ge1xyXG4gIGluaXQ6ICh0eXBlKSA9PiB7XHJcbiAgICBodG1sID0gdHlwZSA9PT0gJ2RldicgP1xyXG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vYXNzZXRzL2luZGV4LWRldi5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KVxyXG4gICAgICA6XHJcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9kaXN0L2luZGV4LXByb2QuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgbGV0IG1hcmt1cCA9ICcnLFxyXG4gICAgICBpc28gPSBuZXcgSXNvKCk7XHJcblxyXG4gICAgY29uc3Qgb25lSXRlbUJvb3RzdHJhcGVkID0ge1xyXG4gICAgICAnQXBwU3RvcmUnOiB7XHJcbiAgICAgICAgJ2RhdGFCeVJlc3RBcGknOiB7fSxcclxuICAgICAgICAnZGF0YSc6IHtcclxuICAgICAgICAgICdpYXFwb3I3cCc6IHtcclxuICAgICAgICAgICAgJ2lkJzogJ2lhcXBvcjdwJyxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICd0ZXh0JzogJ2ZzZnNkZidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyogVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucywgd2UgdGFrZSB0aGUgbG9jYWxzIGRhdGEgd2UgaGF2ZSBhbHJlYWR5XHJcbiAgICBmZXRjaGVkIGFuZCBzZWVkIG91ciBzdG9yZXMgd2l0aCBkYXRhLlxyXG4gICAgTmV4dCB3ZSB1c2UgcmVhY3Qtcm91dGVyIHRvIHJ1biB0aGUgVVJMIHRoYXQgaXMgcHJvdmlkZWQgaW4gcm91dGVzLmpzeFxyXG4gICAgRmluYWxseSB3ZSB1c2UgaXNvIGluIG9yZGVyIHRvIHJlbmRlciB0aGlzIGNvbnRlbnQgc28gaXQgcGlja3MgYmFjayB1cFxyXG4gICAgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBib290c3RyYXBzIHRoZSBzdG9yZXMuXHJcbiAgICBpbml0IHNlcnZlciByZW5kZXJlclxyXG4gICAgKi9cclxuICAgIGFsdC5ib290c3RyYXAoSlNPTi5zdHJpbmdpZnkocmVzLmxvY2Fscy5kYXRhIHx8IG9uZUl0ZW1Cb290c3RyYXBlZCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0Ly8gYWx0IGZsdXggZmx1c2hcclxuICAgICAgICBsZXQgY29udGVudCA9IFJlYWN0LnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlcikpO1xyXG4gICAgICAgIGlzby5hZGQoY29udGVudCwgYWx0LmZsdXNoKCkpO1xyXG5cclxuICAgICAgICByZXMuY29udGVudFR5cGUgPSAndGV4dC9odG1sOyBjaGFyc2V0PXV0ZjgnO1xyXG4gICAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGlmIChub3RGb3VuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdC8vIFJFTkRFUklORyBiYWNrIHRvIGNsaWVudFxyXG4gICAgICAgIGxldCBtYXJrdXBDb250ZW50ID0gaXNvLnJlbmRlcigpO1xyXG4gICAgICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXHJcbiAgICAgICAgbGV0IGhlYWQgPSBIZWxtZXQucmV3aW5kKCk7XHJcbiAgICAgICAgbWFya3VwID0gaHRtbC5yZXBsYWNlKCdNRVRBJywgaGVhZC5tZXRhKS5yZXBsYWNlKCdUSVRMRScsIGhlYWQudGl0bGUpLnJlcGxhY2UoJ0xJTksnLCBoZWFkLmxpbmspLnJlcGxhY2UoJ0NPTlRFTlQnLCBtYXJrdXBDb250ZW50KTtcclxuICAgICAgICAvLyBTRU5EIHJlc3BvbnNlXHJcbiAgICAgICAgcmVzLnNlbmQobWFya3VwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9kYXNoXCJcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaXNvXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vKmVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQge1JvdXRlLCBEZWZhdWx0Um91dGUsIE5vdEZvdW5kUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9BcHAvQXBwJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QnO1xyXG5pbXBvcnQgSG9tZVNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uJztcclxuaW1wb3J0IE5vdEZvdW5kU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbic7XHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvUG9zdC9Qb3N0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgPFJvdXRlIG5hbWU9J2FwcCcgcGF0aD0nLycgaGFuZGxlcj17QXBwbGljYXRpb259PlxyXG4gICAgPFJvdXRlIG5hbWU9J2hvbWUnIHBhdGg9Jy9ob21lJyBoYW5kbGVyPXtIb21lU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J2NvbnRhY3QnIHBhdGg9XCIvY29udGFjdFwiIGhhbmRsZXI9e0NvbnRhY3R9Lz5cclxuICAgIDxSb3V0ZSBuYW1lPSdwb3N0JyBwYXRoPVwiL3Bvc3QvOnBvc3RJZFwiIGhhbmRsZXI9e1Bvc3RJdGVtfS8+XHJcbiAgICA8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0hvbWVTZWN0aW9ufSAvPlxyXG4gICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmRTZWN0aW9ufSAvPlxyXG4gIDwvUm91dGU+XHJcbik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL3JvdXRlcy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgSHRtbEhlYWRlclRhZ3MgZnJvbSAnLi4vRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICAvL3JlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9naXRodWItbWFya2Rvd24tY3NzL2dpdGh1Yi1tYXJrZG93bi5jc3MnKTtcclxuICByZXF1aXJlKCcuL19BcHAuc2NzcycpO1xyXG4gIHJlcXVpcmUoJ2ZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi8uLi9pbWFnZXMvZmF2aWNvbi5pY28nKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIdG1sSGVhZGVyVGFncyAvPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cclxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnQXBwJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9BcHAvQXBwLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgSGVhZGVyTWVudSBmcm9tICcuL0hlYWRlck1lbnUnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19IZWFkZXIuc2NzcycpO1xyXG59XHJcblxyXG5sZXQgbG9nbyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3BpY3R1cmUuanBnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBsZXQgbG9nb1N0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGxvZ28gKyAnKSdcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPEhlYWRlck1lbnUgLz5cclxuXHRcdFx0XHQ8aGVhZGVyIGlkPSd1c2VyJz5cclxuICAgICAgICAgIDxMaW5rIHRvPSdhcHAnPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGlkPSd1c2VyLWxvZ28nIHN0eWxlPXtsb2dvU3R5bGV9PjwvZmlndXJlPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGgyPkpVTElFTiBWQUxFUlk8L2gyPlxyXG4gICAgICAgICAgPGgzPmRhcnVsNzU8L2gzPlxyXG5cdFx0XHRcdFx0PHVsIGlkPSd1c2VyLWxpbmtzJz5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nYnV0dG9uaXplIHRpbnknIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vZGFydWw3NScgdGFyZ2V0PSdfYmxhbmsnPkBkYXJ1bDc1PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J1dHRvbml6ZSB0aW55JyBocmVmPVwibWFpbHRvOmRhcnVsNzVAZ21haWwuY29tP3N1YmplY3Q9YmxvZ1wiPnNheSBoaTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIZWFkZXInO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fSGVhZGVyTWVudS5zY3NzJyk7XHJcbn1cclxuXHJcbmxldCBoZWFkZXJNZW51ID0gY2xhc3MgSGVhZGVyTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtzaG93OiBmYWxzZX07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbWVudUJ0bkNsYXNzID0gIXRoaXMuc3RhdGUuc2hvdyA/ICdjLWhhbWJ1cmdlciBjLWhhbWJ1cmdlci0tcm90JyA6ICdjLWhhbWJ1cmdlciBjLWhhbWJ1cmdlci0tcm90IGMtaGFtYnVyZ2VyLS1odHggaXMtYWN0aXZlJztcclxuICAgIGxldCBtZW51Q2xhc3MgPSAhdGhpcy5zdGF0ZS5zaG93ID8gJycgOiAnb3ZlcmxvcmRfYWN0aXZlJztcclxuICAgIGxldCBwb3N0cyA9IEhlYWRlck1lbnUuZ2V0UHJvcHNGcm9tU3RvcmVzKCkucG9zdHM7XHJcbiAgICBsZXQgcG9zdExpbmtzID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcG9zdHMpIHtcclxuICAgICAgbGV0IHBvc3QgPSBwb3N0c1trZXldO1xyXG4gICAgICBsZXQgcG9zdFBlcm1hbGluayA9ICcvcG9zdC8nICsgcG9zdC5wZXJtYWxpbms7XHJcbiAgICAgIHBvc3RMaW5rcy5wdXNoKDxsaSBrZXk9e2tleX0+PExpbmsgdG89e3Bvc3RQZXJtYWxpbmt9Pntwb3N0LnRpdGxlfTwvTGluaz48L2xpPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdiBpZD0nb3ZlcmxvcmQnIGNsYXNzTmFtZT17bWVudUNsYXNzfSBvbk1vdXNlTGVhdmU9e3RoaXMuX29uTW91c2VMZWF2ZS5iaW5kKHRoaXMpfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bWVudUJ0bkNsYXNzfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgPHNwYW4+dG9nZ2xlIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHVsIGlkPSdkcm9wZG93bicgY2xhc3NOYW1lPSdvbmJsb2cnPlxyXG4gICAgICAgICAge3Bvc3RMaW5rc31cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ICF0aGlzLnN0YXRlLnNob3d9KTtcclxuICB9XHJcblxyXG4gIF9vbk1vdXNlTGVhdmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFN0b3JlcygpIHtcclxuICAgIHJldHVybiBbQXBwU3RvcmVdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3RzOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBvc3RzXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmhlYWRlck1lbnUucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hlYWRlck1lbnUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvU3RvcmVzKGhlYWRlck1lbnUpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJNZW51LmpzXG4gKiovIiwiLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxuLy8gREVQRU5ERU5DWVxyXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxyXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XHJcblxyXG5sZXQgYXBwU3RvcmUgPSBtYWtlSG90KGFsdCwgY2xhc3MgQXBwU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuICAgIHRoaXMucG9zdHMgPSBbXTtcclxuICAgIHRoaXMucGFja2FnZWpzb24gPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuICAgIHRoaXMuY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJyk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvLyBodHRwOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9jb250ZXh0Lmh0bWxcclxuICAgIGxldCBtYXJrdXBGaWxlc1JlcSA9IHJlcXVpcmUuY29udGV4dCgnLi4vLi4vcG9zdHMvMjAxNScsIHRydWUsIC9eXFwuXFwvLipcXC5tZCQvKTtcclxuICAgIGxldCBtYXJrdXBGaWxlc0tleXMgPSBtYXJrdXBGaWxlc1JlcS5rZXlzKCk7XHJcblxyXG4gICAgY29uc3QgZXh0cmFjdE1ldGEgPSBmdW5jdGlvbihlbHQpIHtcclxuICAgICAgbGV0IG1ldGEgPSB7fTtcclxuICAgICAgdmFyIGRhdGVNYXRjaGVzID0gZWx0Lm1hdGNoKC8oMTl8MjApXFxkXFxkWy0gLy5dKDBbMS05XXwxWzAxMl0pWy0gLy5dKDBbMS05XXxbMTJdWzAtOV18M1swMV0pLyk7XHJcbiAgICAgIGlmIChkYXRlTWF0Y2hlcykge1xyXG4gICAgICAgIG1ldGEuZGF0ZSA9IGRhdGVNYXRjaGVzWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtZXRhLmZpbGVuYW1lID0gZWx0LnN1YnN0cmluZygyLCBlbHQubGVuZ3RoKTtcclxuICAgICAgbWV0YS5wZXJtYWxpbmsgPSBlbHQuc3Vic3RyaW5nKDIsIGVsdC5pbmRleE9mKCcubWQnKSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbWV0YS50aXRsZSA9IGVsdC5zdWJzdHJpbmcoZWx0LmluZGV4T2YoJ18nKSArIDEsIGVsdC5pbmRleE9mKCcubWQnKSkucmVwbGFjZSgvXFwtL2csICcgJyk7XHJcblxyXG4gICAgICByZXR1cm4gbWV0YTtcclxuICAgIH07XHJcblxyXG4gICAgbWFya3VwRmlsZXNLZXlzLmZvckVhY2goKGVsdCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IG1hcmt1cEZpbGVzUmVxKGVsdCk7XHJcbiAgICAgIGxldCBtZXRhcyA9IGV4dHJhY3RNZXRhKGVsdCk7XHJcbiAgICAgIGxldCBwb3N0ID0ge1xyXG4gICAgICAgIGJvZHk6IGh0bWwsXHJcbiAgICAgICAgZGF0ZTogbWV0YXMuZGF0ZSxcclxuICAgICAgICBmaWxlbmFtZTogbWV0YXMuZmlsZW5hbWUsXHJcbiAgICAgICAgcGVybWFsaW5rOiBtZXRhcy5wZXJtYWxpbmssXHJcbiAgICAgICAgdGl0bGU6IG1ldGFzLnRpdGxlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucG9zdHMucHVzaChwb3N0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucG9zdHMucmV2ZXJzZSgpO1xyXG4gIH1cclxufSwgJ0FwcFN0b3JlJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFwcFN0b3JlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9zdG9yZXMvQXBwU3RvcmUuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuXHJcbi8vIGNyZWF0ZSBhbHQgaW5zdGFuY2VcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9hbHQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbHRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFsdFwiXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gbWFrZUhvdChhbHQsIFN0b3JlKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBTdG9yZS5kaXNwbGF5TmFtZSA6IGFyZ3VtZW50c1syXTtcbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBhbHQuc3RvcmVzW25hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsdC5jcmVhdGVTdG9yZShTdG9yZSwgbmFtZSk7XG4gIH0pKCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWFrZUhvdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL21ha2VIb3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgQXBwQWN0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbHQuY3JlYXRlQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcInBlcnNvbmFsLWJsb2dcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuXHRcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhcnVsNzUvcGVyc29uYWwtYmxvZ1wiLFxuXHRcInJlcG9zaXRvcnlcIjoge1xuXHRcdFwidHlwZVwiOiBcImdpdFwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhcnVsNzUvcGVyc29uYWwtYmxvZy5naXRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwiZGV2XCI6IFwid2VicGFjayAtLWNvbmZpZyBjb25mL3dlYnBhY2stZGV2LmpzIHwgd2VicGFjay1kZXYtc2VydmVyIC0tcG9ydCA4MDgwIC0tY29uZmlnIGNvbmYvd2VicGFjay1kZXYuanMgLS1ob3QgLS1oaXN0b3J5LWFwaS1mYWxsYmFjayAtLXByb2dyZXNzIC0tY29sb3JzIC0taW5saW5lIC0tY29udGVudC1iYXNlIC4vYnVpbGRcIixcblx0XHRcImRldi1zZXJ2ZXItY2xpZW50XCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi93ZWJwYWNrIC0tcHJvZ3Jlc3MgLS13YXRjaCAtLWNvbmZpZyBjb25mL3dlYnBhY2stZGV2LXNlcnZlci5qcyB8IC4vbm9kZV9tb2R1bGVzLy5iaW4vd2VicGFjay1kZXYtc2VydmVyIC0tcG9ydCA4MDgxIC0tY29uZmlnIGNvbmYvd2VicGFjay1kZXYtc2VydmVyLmpzIC0taG90IC0taGlzdG9yeS1hcGktZmFsbGJhY2sgLS1wcm9ncmVzcyAtLWNvbG9ycyAtLWlubGluZSAtLWNvbnRlbnQtYmFzZSAuL2J1aWxkXCIsXG5cdFx0XCJkZXYtc2VydmVyXCI6IFwibm9kZSBidWlsZC9zZXJ2ZXIuanNcIixcblx0XHRcImRldi1zZXJ2ZXItZGVidWdcIjogXCJub2RlLWRlYnVnIC0tZGVidWctYnJrIGJ1aWxkL3NlcnZlci5qcyAtLWRlYnVnIC0tc291cmNlLW1hcHNcIixcblx0XHRcImJ1aWxkXCI6IFwid2VicGFjayAtLWNvbmZpZyBjb25mL3dlYnBhY2stcHJvZC5qcyAtLXByb2dyZXNzIC0tcHJvZmlsZSAtLWNvbG9yc1wiLFxuXHRcdFwic3RhcnRcIjogXCJub2RlIGRpc3Qvc2VydmVyLmpzXCIsXG5cdFx0XCJ0ZXN0XCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9tb2NoYSBhcHAvKiovKi10ZXN0LmpzIC0tY29sb3JzIC0tY29tcGlsZXJzIGpzOmJhYmVsL3JlZ2lzdGVyIC0tcmVjdXJzaXZlXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYmFiZWwtY29yZVwiOiBcIl41LjEuMTFcIixcblx0XHRcImJhYmVsLWVzbGludFwiOiBcIl4zLjEuMVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjUuMS40XCIsXG5cdFx0XCJiYWJlbC1ydW50aW1lXCI6IFwiXjUuMS4xMVwiLFxuXHRcdFwiY2xlYW4td2VicGFjay1wbHVnaW5cIjogXCJeMC4xLjJcIixcblx0XHRcImNzcy1sb2FkZXJcIjogXCJeMC4xMC4xXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJeMC4yMC4wXCIsXG5cdFx0XCJlc2xpbnQtbG9hZGVyXCI6IFwiXjAuMTEuMlwiLFxuXHRcdFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl4yLjIuMFwiLFxuXHRcdFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCI6IFwiXjAuNi4wXCIsXG5cdFx0XCJmaWxlLWxvYWRlclwiOiBcIl4wLjguMVwiLFxuXHRcdFwiaHRtbC1sb2FkZXJcIjogXCJeMC4zLjBcIixcblx0XHRcImh0bWwtd2VicGFjay1wbHVnaW5cIjogXCJeMS4yLjBcIixcblx0XHRcImpzZG9tXCI6IFwiXjIuMC4wXCIsXG5cdFx0XCJqc29uLWxvYWRlclwiOiBcIl4wLjUuMlwiLFxuXHRcdFwianN4LWxvYWRlclwiOiBcIl4wLjEzLjJcIixcblx0XHRcIm1hcmtkb3duLWxvYWRlclwiOiBcIl4wLjEuM1wiLFxuXHRcdFwibW9jaGFcIjogXCJeMi4xLjBcIixcblx0XHRcIm5vZGUtc2Fzc1wiOiBcIl4zLjEuMlwiLFxuXHRcdFwicHJpc21qc1wiOiBcIjAuMC4xXCIsXG5cdFx0XCJyZWFjdC1oZWxtZXRcIjogXCJeMS4xLjBcIixcblx0XHRcInJlYWN0LWhvdC1sb2FkZXJcIjogXCJeMS4yLjdcIixcblx0XHRcInJlYWN0LXJvdXRlclwiOiBcIl4wLjEzLjJcIixcblx0XHRcInNhc3MtbG9hZGVyXCI6IFwiMS4wLjJcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEwLjJcIixcblx0XHRcInVybC1sb2FkZXJcIjogXCJeMC41LjVcIixcblx0XHRcIndlYnBhY2tcIjogXCJeMS45LjEwXCIsXG5cdFx0XCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjogXCJeMS44LjJcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJhbHRcIjogXCJeMC4xNi4xMFwiLFxuXHRcdFwiYmFiZWxcIjogXCJeNS4xLjExXCIsXG5cdFx0XCJjbGFzc25hbWVzXCI6IFwiXjIuMS4xXCIsXG5cdFx0XCJleHByZXNzXCI6IFwiXjQuMTIuM1wiLFxuXHRcdFwiaXNvXCI6IFwiXjQuMS4wXCIsXG5cdFx0XCJsb2Rhc2hcIjogXCJeMy45LjNcIixcblx0XHRcIm1hcmtlZFwiOiBcIl4wLjMuM1wiLFxuXHRcdFwibm9kZS1mZXRjaFwiOiBcIl4xLjIuMVwiLFxuXHRcdFwib2JqZWN0LWFzc2lnblwiOiBcIl4yLjAuMFwiLFxuXHRcdFwicmVhY3RcIjogXCJeMC4xMy4yXCIsXG5cdFx0XCJzZXJ2ZS1mYXZpY29uXCI6IFwiXjIuMi4xXCIsXG5cdFx0XCJ3aGF0d2ctZmV0Y2hcIjogXCJeMC44LjFcIlxuXHR9LFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcInJlYWN0XCIsXG5cdFx0XCJmbHV4XCIsXG5cdFx0XCJpc29tb3JwaGljXCIsXG5cdFx0XCJ3ZWJwYWNrXCIsXG5cdFx0XCJraXRcIixcblx0XHRcImV4cHJlc3NcIixcblx0XHRcIm5vZGVcIixcblx0XHRcImJsb2dcIlxuXHRdLFxuXHRcImxpY2Vuc2VcIjogXCJNSVRcIlxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWNrYWdlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVsbWV0XCI6IHtcblx0XHRcInRpdGxlXCI6IFwiRGFydWwgYmxvZ1wiLFxuXHRcdFwibWV0YVwiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFwiY29udGVudFwiOiBcIkp1bGllbiBWYWzDqXJ5IGJsb2c6IGZ1bGxzdGFjayBzdHVmZnMsIE5vZGVKUywgQW5ndWxhckpTLCBSZWFjdCwgTW9uZ29EQi4uLiBhYm91dCBtZSBvciB3aGF0IGVsc2UuXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcInZpZXdwb3J0XCIsXG5cdFx0XHRcdFwiY29udGVudFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdH1cblx0XHRdLFxuXHRcdFwibGlua1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwicmVsXCI6IFwic2hvcnRjdXQgaWNvblwiLFxuXHRcdFx0XHRcImhyZWZcIjogXCIvZmF2aWNvbi5pY29cIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwiaW1hZ2UveC1pY29uXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwicmVsXCI6IFwiaWNvblwiLFxuXHRcdFx0XHRcImhyZWZcIjogXCIvZmF2aWNvbi5pY29cIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwiaW1hZ2UveC1pY29uXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiaHJlZlwiOiBcImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXlcIixcblx0XHRcdFx0XCJyZWxcIjogXCJzdHlsZXNoZWV0XCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHQvY3NzXCJcblx0XHRcdH1cblx0XHRdXG5cdH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXNzZXRzL2NvbmZpZy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi8yMDE1LTA2LTI4X215LWJsb2cubWRcIjogMjYsXG5cdFwiLi8yMDE1LTA2LTMwX25vZGVKUy1yZXF1aXJlLW1vZHVsZS5tZFwiOiAyN1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wb3N0cy8yMDE1IF5cXC5cXC8uKlxcLm1kJFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyIGlkPVxcXCJ3ZWxjb21lXFxcIj5XZWxjb21lPC9oMj5cXG48cD5IaSwgbXkgbmFtZSBpcyBKdWxpZW4sIEkgbGl2ZSBpbiBQYXJpcywgRnJhbmNlIGFuZCBjb2RlIGZvciBhIHdoaWxlIHdpdGggYSBwYXNzaW9uIGZvciB3ZWIgdGVjaG5vbG9naWVzIGJ1dCBhbHNvIGRhdGEsIHZpc3VhbGl6YXRpb24uLi48L3A+XFxuPHA+T24gdGhpcyBibG9nLCBJIHdpbGwgdHJ5IHRvIHNoYXJlIHdpdGggeW91IG15IGludGVyZXN0IGFuZCBzb21lIGV4YW1wbGVzLCB0dXRvcmlhbHMgb3Igc3Rvcmllcy48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPmFsZXJ0KCYjMzk7aGVsbG8gd29ybGQmIzM5Oyk7XFxuPC9jb2RlPjwvcHJlPlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wb3N0cy8yMDE1LzIwMTUtMDYtMjhfbXktYmxvZy5tZFxuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyIGlkPVxcXCJtb2R1bGVcXFwiPk1vZHVsZTwvaDI+XFxuPHA+VW5kZXJzdGFuZCBtb2R1bGUgY29tcG9uZW50IGxvYWRpbmcgc3lzdGVtIGlzIHF1aXRlIGltcG9ydGFudCBpbiBOb2RlSlMsIHRob3NlIHdobyB0cmllZCB0byBwbGF5IHdpdGggaXQgbWF5IGtub3cgd2hhdCBJIGFtIHRhbGtpbmcgYWJvdXQuPC9wPlxcbjxwPkhvdyBpdCB3b3Jrcywgd2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDxjb2RlPmV4cG9ydDwvY29kZT4sIDxjb2RlPm1vZHVsZS5leHBvcnRzPC9jb2RlPi48L3A+XFxuPHA+SW4gdGhpcyB0aHJlYWQsIHdlIHdpbGwgdGFrZSBhIGRlZXAgbG9vayBhdCBob3cgbm9kZSBjb3JlIGRlcGVuZGVuY3kgbWFuYWdlbWVudCB3b3Jrcy48L3A+XFxuPHA+TW9kdWxlIHN5c3RlbSBpbiBOb2RlSlMgaXMgaGFuZGxlIGJ5IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9ibG9iL21hc3Rlci9saWIvbW9kdWxlLmpzXFxcIj5Nb2R1bGUuanM8L2E+IGZpbGUuPC9wPlxcbjxwPkRlc2NyaXB0aW9uIG9mIE1vZHVsZSBBUEkgaXMgPGEgaHJlZj1cXFwiaHR0cHM6Ly9ub2RlanMub3JnL2RvY3MvbGF0ZXN0L2FwaS9tb2R1bGVzLmh0bWwjbW9kdWxlc190aGVfbW9kdWxlX29iamVjdFxcXCI+aGVyZTwvYT4sIGJ1dCB3ZSB1c2UgaXQgdmVyeSByYXJlbHkuPC9wPlxcbjxwPk1haW4gcHVycG9zZSBvZiBNb2R1bGUgaXMgdG8gaGFuZGxlIHlvdXIgY29kZSBkZXBlbmRlbmNpZXMgYnkgcHJvdmlkaW5nIGEgcnVudGltZSBjb250ZXh0LjwvcD5cXG48aDIgaWQ9XFxcImNvbnN0cnVjdG9yXFxcIj5Db25zdHJ1Y3RvcjwvaDI+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPmZ1bmN0aW9uIE1vZHVsZShpZCwgcGFyZW50KSB7XFxuICB0aGlzLmlkID0gaWQ7XFxuICB0aGlzLmV4cG9ydHMgPSB7fTtcXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+b25lIDxjb2RlPmV4cG9ydHM8L2NvZGU+IG9iamVjdCBhdHRyaWJ1dGUgaXMgY3JlYXRlZCBieSBkZWZhdWx0LjwvcD5cXG48cD5Ob3RlIHRoYXQgYWxsIHlvdXIgZGVwZW5kZW5jaWVzIG9ubHkgc2hvd3MgdGhpcyA8Y29kZT5leHBvcnRzPC9jb2RlPiBNb2R1bGUgb2JqZWN0IGF0dHJpYnV0ZSB0byB0aGVpciBwYXJlbnQgbW9kdWxlcy4gSGVyZSBqdXN0IGFuIGV4dHJhY3QgZnJvbSBNb2R1bGUgTm9kZUpTIHNvdXJjZSBjb2RlOjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+Ly8gZGlnZXN0IHlvdXIgbW9kdWxlIGNvZGUgYW5kIHRoZW4gcmV0dXJuIGV4cG9ydHMgYXR0clxcbnJldHVybiBtb2R1bGUuZXhwb3J0cztcXG48L2NvZGU+PC9wcmU+XFxuPHA+SGVyZSBzb21lIGNvbW1vbiBzY2VuYXJpb3Mgd2hlbiBjcmVhdGluZyBhIG1vZHVsZSAobm90ZSB0aGUgZG90IC4pLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+ZXhwb3J0cy5teUZuID0gZnVuY3Rpb24oKSB7XFxuXFxufVxcbmV4cG9ydHMubXlGbjIgPSBmdW5jdGlvbigpIHtcXG5cXG59XFxuPC9jb2RlPjwvcHJlPlxcbjxwPlRoaXMgZmlsbHMgeW91ciBtb2R1bGUgPGNvZGU+ZXhwb3J0czwvY29kZT4gb2JqZWN0IGF0dHJpYnV0ZS48L3A+XFxuPHA+PGNvZGU+cmV0dXJuIG1vZHVsZS5leHBvcnRzPC9jb2RlPiBkaXJlY3RpdmUgd2lsbCByZXR1cm4gc29tZXRoaW5nIGxpa2U6PC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj57XFxuICBteUZuIDogZnVuY3Rpb24oKSB7XFxuXFxuICB9LFxcbiAgbXlGbjIgOiBmdW5jdGlvbigpIHtcXG5cXG4gIH1cXG59XFxuPC9jb2RlPjwvcHJlPlxcbjxwPlNpZGUgZWZmZWN0OjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+ZXhwb3J0cyA9IHtcXG4gIGZuOiBmdW5jdGlvbigpIHtcXG5cXG4gIH0sXFxuICBmbjI6IGZ1bmN0aW9uKCkge1xcblxcbiAgfVxcbn1cXG48L2NvZGU+PC9wcmU+XFxuPHA+eW91IGV4cGVjdCA8Y29kZT5yZXR1cm4gbW9kdWxlLmV4cG9ydHM8L2NvZGU+IHJldHVybmluZyB0aGUgc2FtZSBvYmplY3Qgc2hvd24gYmVmb3JlIGJ1dCBpdCB3b24mIzM5O3QsIHlvdSBoYXZlIGp1c3QgY3JlYXRlZCBhIG5ldyBvYmplY3QgYW5kIG1vZHVsZS5leHBvcnRzIHN0aWxsIHBvaW50IHRvIGFuIGVtcHR5IG9iaiB7fTwvcD5cXG48cD5JZiB5b3Ugd2FudCB0byBiZSBiZSBzdXJlLCBqdXN0IGNhbiBzdGFydCB5b3VyIG1vZHVsZSB3aXRoIChub3RlIHRoZSBkb3QgLik8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcXG5cXG5leHBvcnRzLmZuID0gZnVuY3Rpb24oKSB7XFxuXFxufTtcXG5cXG5leHBvcnRzLmZuMiA9IGZ1bmN0aW9uKCkge1xcblxcbn07XFxuPC9jb2RlPjwvcHJlPlxcbjxwPkJ1dCBhIG1vcmUgY29udmVuaWVudCB3YXkgdG8gYXZvaWQgdGhpcyBpbmNvbnZlbmllbmNlIHdvdWxkIGJlPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj52YXIgbXlTdHVmZiA9ICYjMzk7SSBsb3ZlIE5vZGVqcyYjMzk7O1xcblxcbi8vIE9SXFxuXFxudmFyIG15U3R1ZmYgPSBmdW5jdGlvbiBkb1N0dWZmKCkge1xcblxcbn07XFxuXFxuLy8gT1JcXG5cXG52YXIgbXlTdHVmZiA9IHtcXG4gIGRvU3R1ZmY6IGZ1bmN0aW9uIGRvU3R1ZmYxKCkge1xcblxcbiAgfSxcXG4gIGRvU3R1ZmYxOiBmdW5jdGlvbiBkb1N0dWZmMSgpIHtcXG5cXG4gIH1cXG5cXG59O1xcblxcbi8vIE9SIC4uLi5cXG5cXG5tb2R1bGUuZXhwb3J0cyA9IG15U3R1ZmY7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPkJ1dCB0aGVuLCB3aGF0IGhhcHBlbmVkIHdoZW4gd2UgdXNlIHJlcXVpcmUgPzwvcD5cXG48aDIgaWQ9XFxcInJlcXVpcmVcXFwiPlJlcXVpcmU8L2gyPlxcbjxwPldoZW4gdXNpbmcgcmVxdWlyZSwgYmVoaW5kIHRoZSBzY2VuZSBhIG1vZHVsZSBjb250ZXh0IGlzIGNyZWF0ZWQgYW5kIHlvdXIgY29kZSBydW5zIGluIGl0LjwvcD5cXG48cD48Y29kZT5yZXF1aXJlPC9jb2RlPiBmdW5jdGlvbiBpcyBhdHRhY2hlZCB0byBub2RlIGdsb2JhbCA8Y29kZT5vYmplY3Q8L2NvZGU+LCBpbWFnaW5lIDxjb2RlPndpbmRvdzwvY29kZT4gb2JqZWN0IGZvciBhIGJyb3dzZXIgZW52aXJvbm1lbnQuIFNvIHdoZW4geW91IHR5cGUgPGNvZGU+cmVxdWlyZSgmIzM5O3NvbWV0aGluZyYjMzk7KTwvY29kZT4ganMgcHJvdG90eXBlIHBhdHRlcm4gbG9va3MgZm9yIGl0IGFuZCBmaW5kcyByZXF1aXJlIGZ1bmN0aW9uLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+Z2xvYmFsLnJlcXVpcmUgPSByZXF1aXJlO1xcbmdsb2JhbC5leHBvcnRzID0gc2VsZi5leHBvcnRzO1xcbjwvY29kZT48L3ByZT5cXG48cD48YSBocmVmPVxcXCJodHRwczovL25vZGVqcy5vcmcvYXBpL2dsb2JhbHMuaHRtbCNnbG9iYWxzX2dsb2JhbFxcXCI+R2xvYmFsIG9iamVjdDwvYT48L3A+XFxuPHA+VG8gcmVjYXAgd2hlbiB5b3UgdHlwZSByZXF1aXJlLCBqcyBlbmdpbmUgcmV0cmlldmVzIGdsb2JhbCBvYmplY3QgYW5kIGxvb2sgZm9yIGEgcmVxdWlyZSBuYW1lZCBmdW5jdGlvbiBhbmQgZmluZCBpdCA6KTwvcD5cXG48aDMgaWQ9XFxcImZ1bmN0aW9uXFxcIj5GdW5jdGlvbjwvaDM+XFxuPHA+PGNvZGU+cmVxdWlyZTwvY29kZT4gZnVuY3Rpb24gdGFrZSBhIG5vbiBlbXB0eSBzdHJpbmcgYXMgcGFyYW1ldGVyLCBhIG5hbWUsIGEgcGF0aC48L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPi8vIExvYWRzIGEgbW9kdWxlIGF0IHRoZSBnaXZlbiBmaWxlIHBhdGguIFJldHVybnMgdGhhdCBtb2R1bGUmIzM5O3NcXG4vLyBgZXhwb3J0c2AgcHJvcGVydHkuXFxuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24ocGF0aCkge1xcbiAgYXNzZXJ0KHBhdGgsICYjMzk7bWlzc2luZyBwYXRoJiMzOTspO1xcbiAgYXNzZXJ0KHV0aWwuaXNTdHJpbmcocGF0aCksICYjMzk7cGF0aCBtdXN0IGJlIGEgc3RyaW5nJiMzOTspO1xcbiAgcmV0dXJuIE1vZHVsZS5fbG9hZChwYXRoLCB0aGlzKTtcXG59O1xcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImV4YW1wbGVcXFwiPkV4YW1wbGU8L2gzPlxcbjxwPkxldCYjMzk7cyB0YWtlIGFuIGV4YW1wbGUuPC9wPlxcbjxwPi4vbWFpbi5qczwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+dmFyIGRlcCA9IHJlcXVpcmUoJiMzOTsuL2RlcGVuZGVuY3kmIzM5Oyk7XFxuPC9jb2RlPjwvcHJlPlxcbjxwPi4vZGVwZW5kZW5jeS5qczwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+bW9kdWxlLmV4cG9ydHMgPSAmIzM5O0kgbG92ZSBKUyYjMzk7O1xcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImxvYWRlci1yb3V0aW5lc1xcXCI+TG9hZGVyIHJvdXRpbmVzPC9oMz5cXG48cD5Nb2R1bGUgd2UgZmlyc3QgdHJ5IHRvIGxvY2F0ZSB0aGUgZmlsZSBjb250YWluaW5nIHlvdXIgY29kZSAmIzM5O2RlcGVuZGVuY3kmIzM5OyBtb2R1bGUuPC9wPlxcbjxwPkxvYWQgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggMyBwYXJhbWV0ZXJzPC9wPlxcbjx1bD5cXG48bGk+cmVxdWVzdCA6IGhlcmUgJiMzOTtkZXBlbmRlbmN5JiMzOTs8L2xpPlxcbjxsaT5wYXJlbnQ6IG51bGwgaWYgcm9vdCBtb2R1bGU8L2xpPlxcbjxsaT5pc01haW46IG1haW4gcm9vdCBmaWxlPC9saT5cXG48L3VsPlxcbjxwPkhlcmUgbXkgY29tbWVudHMgYWJvdXQgaXQ6PC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5Nb2R1bGUuX2xvYWQgPSBmdW5jdGlvbihyZXF1ZXN0LCBwYXJlbnQsIGlzTWFpbikge1xcbiAgLy8gMSZndDsgcmVzb2x2ZSBmaWxlbmFtZSBhbmQgbG9vayBmb3IgYWJzb2x1dGUgcGF0aCBvZiBmaWxlXFxuICB2YXIgZmlsZW5hbWUgPSBNb2R1bGUuX3Jlc29sdmVGaWxlbmFtZShyZXF1ZXN0LCBwYXJlbnQpO1xcbiAgLy8gMiZndDsgY2hlY2sgaW4gY2FjaGUgYnkgaWQgYW5kIHJldHVybiBpdCBpZiBmb3VuZFxcbiAgdmFyIGNhY2hlZE1vZHVsZSA9IE1vZHVsZS5fY2FjaGVbZmlsZW5hbWVdO1xcbiAgaWYgKGNhY2hlZE1vZHVsZSkge1xcbiAgICByZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XFxuICB9XFxuICAvLyAzJmd0OyBjaGVjayBpZiBuYXRpdmUgbW9kdWxlIGFuZCBjb21waWxlIGl0IGFuZCByZXR1cm4gaXQgaWYgbmVlZGVkLCBleGFtcGxlIHJlcXVpcmUoJiMzOTtmcyYjMzk7KTtcXG4gIGlmIChOYXRpdmVNb2R1bGUuZXhpc3RzKGZpbGVuYW1lKSkge1xcbiAgICAvLyBkbyBzb21lIGNvbXBpbCBzdHVmZlxcbiAgfVxcbiAgLy8gNCZndDsgY3JlYXRlIG5ldyBtb2R1bGUgd2l0aCByZWZlcmVuY2UgdG8gcGFyZW50IE1vZHVsZVxcbiAgdmFyIG1vZHVsZSA9IG5ldyBNb2R1bGUoZmlsZW5hbWUsIHBhcmVudCk7XFxuICAvLyA1Jmd0OyBwdXQgaXQgaW4gY2FjaGVcXG4gIE1vZHVsZS5fY2FjaGVbZmlsZW5hbWVdID0gbW9kdWxlO1xcbiAgLy8gNiZndDsgdGhlIE1PU1QgaW50ZXJlc3RpbmcgcGFydCwgbG9hZCBtb2R1bGUgc291cmNlIGNvZGVcXG4gIHRyeSB7XFxuICAgIG1vZHVsZS5sb2FkKGZpbGVuYW1lKTtcXG4gICAgaGFkRXhjZXB0aW9uID0gZmFsc2U7XFxuICB9IGZpbmFsbHkge1xcbiAgICBpZiAoaGFkRXhjZXB0aW9uKSB7XFxuICAgICAgZGVsZXRlIE1vZHVsZS5fY2FjaGVbZmlsZW5hbWVdO1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyA3Jmd0OyBzZW5kIGV4cG9ydHMgb2JqZWN0XFxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XFxufVxcbjwvY29kZT48L3ByZT5cXG48aDMgaWQ9XFxcImZvY3VzXFxcIj5Gb2N1czwvaDM+XFxuPHA+TWV0aG9kIHRvIGxvb2sgZm9yIDxjb2RlPmRlcGVuZGVuY3k8L2NvZGU+IHNvdXJjZSBjb2RlLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+TW9kdWxlLl9yZXNvbHZlRmlsZW5hbWUgPSBmdW5jdGlvbihyZXF1ZXN0LCBwYXJlbnQpIHtcXG4gLy8gaW50ZXJuYWwgc3R1ZmYgdG8gY29tcHV0ZSBwYXRoXFxuIHJldHVybiBmaWxlbmFtZTsgLy8gZXhhbXBsZSBoZXJlIC9teXBhdGgvbXlwcm9qZWN0L2RlcGVuZGVuY3kuanNcXG59XFxuPC9jb2RlPjwvcHJlPlxcbjxwPlRoZSBsb2FkIGZ1bmN0aW9uLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+TW9kdWxlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcXG4uLi5cXG4gIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcXG4gIHRoaXMucGF0aHMgPSBNb2R1bGUuX25vZGVNb2R1bGVQYXRocyhwYXRoLmRpcm5hbWUoZmlsZW5hbWUpKTtcXG4gIC8vICZxdW90Oy9teXBhdGgvbXlwcm9qZWN0L25vZGVfbW9kdWxlcyZxdW90O1xcbiAgLy8gJnF1b3Q7L215cGF0aC9ub2RlX21vZHVsZXMmcXVvdDtcXG4gIC8vICZxdW90Oy9ub2RlX21vZHVsZXMmcXVvdDtcXG5cXG4gIHZhciBleHRlbnNpb24gPSBwYXRoLmV4dG5hbWUoZmlsZW5hbWUpIHx8ICYjMzk7LmpzJiMzOTs7XFxuICAvLyAxJmd0OyBieSBkZWZhdWx0IG9ubHkgLmpzLCAuanNvbiwgLm5vZGUgdHlwZXMgYXJlIGhhbmRsZWQgYnkgbW9kdWxlIGxvYWRlclxcbiAgaWYgKCFNb2R1bGUuX2V4dGVuc2lvbnNbZXh0ZW5zaW9uXSkgZXh0ZW5zaW9uID0gJiMzOTsuanMmIzM5OztcXG4gIC8vIDImZ3Q7IGhlcmUganMgZXh0ZW5zaW9ucyBpcyB1c2VkIHRvIGxvYWQgZGVwZW5kZW5jeS5qc1xcbiAgTW9kdWxlLl9leHRlbnNpb25zW2V4dGVuc2lvbl0odGhpcywgZmlsZW5hbWUpO1xcbiAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcbn07XFxuPC9jb2RlPjwvcHJlPlxcbjxwPlRoZW4gaGVyZSB3ZSBnbywgd2UgaGF2ZSBmaWxlbmFtZSBwYXRoLjwvcD5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJsaW5lLW51bWJlcnMgbGFuZ3VhZ2UtamF2YXNjcmlwdFxcXCI+Ly8gTmF0aXZlIGV4dGVuc2lvbiBmb3IgLmpzXFxuTW9kdWxlLl9leHRlbnNpb25zWyYjMzk7LmpzJiMzOTtdID0gZnVuY3Rpb24obW9kdWxlLCBmaWxlbmFtZSkge1xcbiAgLy8gMSZndDsgbG9hZCBmaWxlIGNvbnRlbnQgb2YgJiMzOTtkZXBlbmRlbmN5LmpzJiMzOTtcXG4gIHZhciBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAmIzM5O3V0ZjgmIzM5Oyk7XFxuICAvLyAyJmd0OyBjb21waWxlIGl0XFxuICBtb2R1bGUuX2NvbXBpbGUoc3RyaXBCT00oY29udGVudCksIGZpbGVuYW1lKTtcXG59O1xcbjwvY29kZT48L3ByZT5cXG48cD5Db21waWxlciByb3V0aW5lPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj5Nb2R1bGUucHJvdG90eXBlLl9jb21waWxlID0gZnVuY3Rpb24oY29udGVudCwgZmlsZW5hbWUpIHtcXG4gIC8vIGhlcmUgY29udGVudCBpcyBhIG15IGRlcGVuZGVuY3kuanMgZmlsZSBpbiBhIHN0cmluZyA6XFxuICAvLyAmcXVvdDttb2R1bGUuZXhwb3J0cyA9ICYjMzk7SSBsb3ZlIEpTJiMzOTs7JnF1b3Q7XFxuICAvLyBmaWxlbmFtZVxcbiAgLy8gL215cGF0aC9teXByb2plY3QvZGVwZW5kZW5jeS5qc1xcbiAgLy8gLi4uXFxuICAvLyBzb21lIHN0dWZmXFxuICAvLyAuLi5cXG4gIC8vIHJldHJpZXZlIG1vZHVsZXMgY2FjaGVcXG4gIHJlcXVpcmUuY2FjaGUgPSBNb2R1bGUuX2NhY2hlO1xcbiAgLy8gaGVyZSBjb21lIHRoZSB0cmlja3kgcGFydFxcbiAgLy8gKioqKioqKiogSU1QT1JUQU5UICoqKioqKioqKlxcbiAgLy8gY3JlYXRlIGEgd3JhcHBlciBmdW5jdGlvbiBhcyBzdHJpbmdcXG4gIHZhciB3cmFwcGVyID0gTW9kdWxlLndyYXAoY29udGVudCk7XFxuICAvLyBpdCB3aWxsIGdpdmVzIHRoZSBmb2xsb3dpbmcgYW5vbnltb3VzIGZ1bmN0aW9uXFxuICAvLyBOT1RFOiBpdCBpcyBhIHNpbXBsZSBTVFJJTkdcXG4gIC8vXFxuICAvLyAmcXVvdDsoZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7IFxcbiAgLy8gIG1vZHVsZS5leHBvcnRzID0gJiMzOTtJIGxvdmUgSlMmIzM5OztcXG4gIC8vIH0pOyZxdW90O1xcbiAgLy9cXG4gIC8vIFRoYXQgaXMgaG93IG1hZ2ljIGhhcHBlbnMgYW5kIG1vZHVsZSBleHBvcnRzIG9iamVjdCBpcyBmaWxsLCBieSBhIHNpbXBsZSBhbm9ueW1vdXMgZnVuY3Rpb24gd3JhcHBlclxcbiAgLy9cXG4gIC8vIGhlcmUgYSBjYWxsIHRvIG5hdGl2ZSBjb2RlIHdpdGggdGhpcyBjb2RlLCBpbWFnaW5lIGV2YWwoKSBmdW5jdGlvbi5cXG4gIHZhciBjb21waWxlZFdyYXBwZXIgPSBydW5JblRoaXNDb250ZXh0KHdyYXBwZXIsIHsgZmlsZW5hbWU6IGZpbGVuYW1lIH0pO1xcbiAgLy8gbm93IHdlIGhhdmUgYSByZWFsIGpzIGZ1bmN0aW9uLCBsZXQmIzM5O3MgY2FsbCBpdFxcbiAgdmFyIGFyZ3MgPSBbc2VsZi5leHBvcnRzLCByZXF1aXJlLCBzZWxmLCBmaWxlbmFtZSwgZGlybmFtZV07XFxuICAvLyBmaW5pc2hpbmcgYnkgYXBwbHlpbmcgYWJvdmUgd3JhcHBlciBmdW5jdGlvbiBvbiBjdXJyZW50IG1vZHVsZSBwcmV2aW91c2x5IGNvbXBpbGVkLlxcbiAgcmV0dXJuIGNvbXBpbGVkV3JhcHBlci5hcHBseShzZWxmLmV4cG9ydHMsIGFyZ3MpO1xcbn1cXG48L2NvZGU+PC9wcmU+XFxuPGgzIGlkPVxcXCJjb25jbHVzaW9uXFxcIj5Db25jbHVzaW9uPC9oMz5cXG48dWw+XFxuPGxpPmEgZGVwZW5kZW5jeSBpbXBseSBhIG1vZHVsZSBvYmplY3Q8L2xpPlxcbjxsaT5hIGxvYWRpbmcgcHJvY2Vzc3VzIGxvb2tzIGZvciB5b3UgY29kZSBpbnRvIGZpbGU8L2xpPlxcbjxsaT5hIHJlcXVpcmUgY2FsbCBjaGVja3MgZmlyc3QgaW4gY2FjaGUsIG90aGVyd2lzZSBsb2FkIGludG8gY2FjaGUuPC9saT5cXG48bGk+YSBjb21waWxhdGlvbiBwaGFzZSBpbnZvbHZlZCBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gdGhhdCB3cmFwcyB5b3VyIG1vZHVsZSBjb2RlIHdpdGggMyBtYWluIHBhcmFtcyAoZXhwb3J0cyxyZXF1aXJlLG1vZHVsZSkuIEJ5IGV4ZWN1dGluZyB0aGlzIGZ1bmN0aW9uLCA8Y29kZT5leHBvcnRzPC9jb2RlPiBNb2R1bGUgb2JqZWN0IGF0dHJpYnV0ZSBpcyBmaWxsLjwvbGk+XFxuPGxpPmF0IHRoZSBlbmQgb2YgbG9hZGluZyBwcm9jZXNzIGl0IHJldHVybnMgeW91ciBtb2R1bGUgPGNvZGU+ZXhwb3J0czwvY29kZT4gYXR0cmlidXRlLjwvbGk+XFxuPC91bD5cXG48aDMgaWQ9XFxcInJlc3VsdFxcXCI+UmVzdWx0PC9oMz5cXG48cD5Zb3VyIGNvbXBpbGVkIGNvZGUgbG9va3MgbGlrZTo8L3A+XFxuPHA+Li9tYWluLmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4oZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7XFxuICB2YXIgZGVwID0gcmVxdWlyZSgmIzM5Oy4vZGVwZW5kZW5jeSYjMzk7KTtcXG59KTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+Li9kZXBlbmRlbmN5LmpzPC9wPlxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImxpbmUtbnVtYmVycyBsYW5ndWFnZS1qYXZhc2NyaXB0XFxcIj4oZnVuY3Rpb24gKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSwgX19maWxlbmFtZSwgX19kaXJuYW1lKSB7IFxcbiAgbW9kdWxlLmV4cG9ydHMgPSAmIzM5O0kgbG92ZSBKUyYjMzk7O1xcbn0pO1xcbjwvY29kZT48L3ByZT5cXG48cD5Zb3UgY2FuIGltYWdpbmUgdGhlIGZvbGxvd2luZzwvcD5cXG48cD4uL21haW4uanM8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGluZS1udW1iZXJzIGxhbmd1YWdlLWphdmFzY3JpcHRcXFwiPihmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHtcXG4gIC4vZGVwZW5kZW5jeS5qc1xcbiAgdmFyIGRlcCA9IChmdW5jdGlvbiAoZXhwb3J0cywgcmVxdWlyZSwgbW9kdWxlLCBfX2ZpbGVuYW1lLCBfX2Rpcm5hbWUpIHsgXFxuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cyA9ICYjMzk7SSBsb3ZlIEpTJiMzOTs7XFxuICB9KTtcXG59KTtcXG48L2NvZGU+PC9wcmU+XFxuPHA+SWYgeW91IHdhbnQgdG8gbG9vayBmdXJ0aGVyLCB3cml0ZSBhIHNtYWxsIHRlc3QgYW5kIGRlYnVnIGl0LjwvcD5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcG9zdHMvMjAxNS8yMDE1LTA2LTMwX25vZGVKUy1yZXF1aXJlLW1vZHVsZS5tZFxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqICdIaWdoZXIgT3JkZXIgQ29tcG9uZW50JyB0aGF0IGNvbnRyb2xzIHRoZSBwcm9wcyBvZiBhIHdyYXBwZWRcbiAqIGNvbXBvbmVudCB2aWEgc3RvcmVzLlxuICpcbiAqIEV4cGVjdHMgdGhlIENvbXBvbmVudCB0byBoYXZlIHR3byBzdGF0aWMgbWV0aG9kczpcbiAqICAgLSBnZXRTdG9yZXMoKTogU2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiBzdG9yZXMuXG4gKiAgIC0gZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKTogU2hvdWxkIHJldHVybiB0aGUgcHJvcHMgZnJvbSB0aGUgc3RvcmVzLlxuICpcbiAqIEV4YW1wbGUgdXNpbmcgb2xkIFJlYWN0LmNyZWF0ZUNsYXNzKCkgc3R5bGU6XG4gKlxuICogICAgY29uc3QgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgIHN0YXRpY3M6IHtcbiAqICAgICAgICBnZXRTdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICAgIHJldHVybiBbbXlTdG9yZV1cbiAqICAgICAgICB9LFxuICogICAgICAgIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIG15U3RvcmUuZ2V0U3RhdGUoKVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9KVxuICogICAgTXlDb21wb25lbnQgPSBjb25uZWN0VG9TdG9yZXMoTXlDb21wb25lbnQpXG4gKlxuICpcbiAqIEV4YW1wbGUgdXNpbmcgRVM2IENsYXNzOlxuICpcbiAqICAgIGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAqICAgICAgc3RhdGljIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgIHJldHVybiBbbXlTdG9yZV1cbiAqICAgICAgfVxuICogICAgICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIG15U3RvcmUuZ2V0U3RhdGUoKVxuICogICAgICB9XG4gKiAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAvLyBVc2UgdGhpcy5wcm9wcyBsaWtlIG5vcm1hbCAuLi5cbiAqICAgICAgfVxuICogICAgfVxuICogICAgTXlDb21wb25lbnQgPSBjb25uZWN0VG9TdG9yZXMoTXlDb21wb25lbnQpXG4gKlxuICogQSBncmVhdCBleHBsYW5hdGlvbiBvZiB0aGUgbWVyaXRzIG9mIGhpZ2hlciBvcmRlciBjb21wb25lbnRzIGNhbiBiZSBmb3VuZCBhdFxuICogaHR0cDovL2JpdC5seS8xYWJQa3JQXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gY29ubmVjdFRvU3RvcmVzKENvbXBvbmVudCkge1xuICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgc3RhdGljIG1ldGhvZHMuXG4gIGlmICghKDAsIF9mdW5jdGlvbnMuaXNGdW5jdGlvbikoQ29tcG9uZW50LmdldFN0b3JlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlcygpIGV4cGVjdHMgdGhlIHdyYXBwZWQgY29tcG9uZW50IHRvIGhhdmUgYSBzdGF0aWMgZ2V0U3RvcmVzKCkgbWV0aG9kJyk7XG4gIH1cbiAgaWYgKCEoMCwgX2Z1bmN0aW9ucy5pc0Z1bmN0aW9uKShDb21wb25lbnQuZ2V0UHJvcHNGcm9tU3RvcmVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdFRvU3RvcmVzKCkgZXhwZWN0cyB0aGUgd3JhcHBlZCBjb21wb25lbnQgdG8gaGF2ZSBhIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSBtZXRob2QnKTtcbiAgfVxuXG4gIC8vIFdyYXBwZXIgQ29tcG9uZW50LlxuICB2YXIgU3RvcmVDb25uZWN0aW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1N0b3JlQ29ubmVjdGlvbicsXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnQuZ2V0UHJvcHNGcm9tU3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdG9yZXMgPSBDb21wb25lbnQuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICBzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgc3RvcmUubGlzdGVuKF90aGlzLm9uQ2hhbmdlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKENvbXBvbmVudC5jb21wb25lbnREaWRDb25uZWN0KSB7XG4gICAgICAgIENvbXBvbmVudC5jb21wb25lbnREaWRDb25uZWN0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc3RvcmVzID0gQ29tcG9uZW50LmdldFN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgc3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHN0b3JlLnVubGlzdGVuKF90aGlzMi5vbkNoYW5nZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb21wb25lbnQuZ2V0UHJvcHNGcm9tU3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZnVuY3Rpb25zLmFzc2lnbikoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBTdG9yZUNvbm5lY3Rpb247XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbm5lY3RUb1N0b3Jlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZWFjaE9iamVjdCA9IGVhY2hPYmplY3Q7XG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGVhY2hPYmplY3QoZiwgbykge1xuICBvLmZvckVhY2goZnVuY3Rpb24gKGZyb20pIHtcbiAgICBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZihrZXksIGZyb21ba2V5XSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc291cmNlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGVhY2hPYmplY3QoZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgfSwgc291cmNlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvZnVuY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlck1lbnUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlck1lbnUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyTWVudS5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyTWVudS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4gIEhBTUJVUkdFUiBJQ09OUyBDT01QT05FTlRcXHJcXG5cXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qKlxcclxcbiAqIFRvZ2dsZSBTd2l0Y2ggR2xvYmFsc1xcclxcbiAqXFxyXFxuICogQWxsIHN3aXRjaGVzIHNob3VsZCB0YWtlIG9uIHRoZSBjbGFzcyBgYy1oYW1idXJnZXJgIGFzIHdlbGwgYXMgdGhlaXJcXHJcXG4gKiB2YXJpYW50IHRoYXQgd2lsbCBnaXZlIHRoZW0gdW5pcXVlIHByb3BlcnRpZXMuIFRoaXMgY2xhc3MgaXMgYW4gb3ZlcnZpZXdcXHJcXG4gKiBjbGFzcyB0aGF0IGFjdHMgYXMgYSByZXNldCBmb3IgYWxsIHZlcnNpb25zIG9mIHRoZSBpY29uLlxcclxcbiAqL1xcbi5jLWhhbWJ1cmdlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNSU7XFxuICB0b3A6IDUlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6LWluZGV4OiA1MDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBmb250LXNpemU6IDA7XFxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLmVkaXRpb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjUlOyB9XFxuXFxuLmMtaGFtYnVyZ2VyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4uYy1oYW1idXJnZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTNweDtcXG4gIGxlZnQ6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuLmMtaGFtYnVyZ2VyIHNwYW46OmJlZm9yZSxcXG4uYy1oYW1idXJnZXIgc3Bhbjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiBcXFwiXFxcIjsgfVxcblxcbi5jLWhhbWJ1cmdlciBzcGFuOjpiZWZvcmUge1xcbiAgdG9wOiAtNXB4OyB9XFxuXFxuLmMtaGFtYnVyZ2VyIHNwYW46OmFmdGVyIHtcXG4gIGJvdHRvbTogLTVweDsgfVxcblxcbi8qKlxcclxcbiAqIFN0eWxlIDFcXHJcXG4gKlxcclxcbiAqIFJvdGF0aW5nIGhhbWJ1cmdlciBpY29uIChyb3QpLCB0aGF0IHNpbXBseSByb3RhdGVzIDkwIGRlZ3JlZXMgd2hlbiBhY3RpdmF0ZWQuXFxyXFxuICogTm90aGluZyB0b28gZmFuY3ksIHNpbXBsZSB0cmFuc2l0aW9uLlxcclxcbiAqL1xcbi5jLWhhbWJ1cmdlci0tcm90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRFM0M7XFxuICB6LWluZGV4OiAxMDE7IH1cXG5cXG4uYy1oYW1idXJnZXItLXJvdCBzcGFuIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzOyB9XFxuXFxuLyogYWN0aXZlIHN0YXRlLCBpLmUuIG1lbnUgb3BlbiAqL1xcbi5jLWhhbWJ1cmdlci0tcm90LmlzLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDEwOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1yb3QuaXMtYWN0aXZlIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XFxuXFxuLyoqXFxyXFxuICogU3R5bGUgMlxcclxcbiAqXFxyXFxuICogSGFtYnVyZ2VyIHRvIFxcXCJ4XFxcIiAoaHR4KS4gVGFrZXMgb24gYSBoYW1idXJnZXIgc2hhcGUsIGJhcnMgc2xpZGVcXHJcXG4gKiBkb3duIHRvIGNlbnRlciBhbmQgdHJhbnNmb3JtIGludG8gYW4gXFxcInhcXFwiLlxcclxcbiAqL1xcbi5jLWhhbWJ1cmdlci0taHR4IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3REMwREU7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eCBzcGFuIHtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHMgMC4zczsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4IHNwYW46OmJlZm9yZSxcXG4uYy1oYW1idXJnZXItLWh0eCBzcGFuOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzLCAwLjNzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcywgMHM7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eCBzcGFuOjpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCB0cmFuc2Zvcm07IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eCBzcGFuOjphZnRlciB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTsgfVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSwgaS5lLiBtZW51IG9wZW4gKi9cXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUgc3Bhbjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHR4LmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHguaXMtYWN0aXZlIHNwYW46OmJlZm9yZSxcXG4uYy1oYW1idXJnZXItLWh0eC5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuM3M7IH1cXG5cXG4vKipcXHJcXG4gKiBTdHlsZSAzXFxyXFxuICpcXHJcXG4gKiBIYW1idXJnZXIgdG8gbGVmdC1hcnJvdyAoaHRsYSkuIEhhbWJ1cmdlciBtZW51IHRyYW5zZm9ybXMgdG8gYSBsZWZ0LXBvaW50aW5nXFxyXFxuICogYXJyb3cuIFVzdWFsbHkgaW5kaWNhdGVzIGFuIG9mZiBjYW52YXMgbWVudSBzbGlkaW5nIGluIGZyb20gbGVmdCB0aGF0XFxyXFxuICogd2lsbCBiZSBjbG9zZSBvbiByZS1jbGljayBvZiB0aGUgaWNvbi5cXHJcXG4gKi9cXG4uYy1oYW1idXJnZXItLWh0bGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyZGM2NDsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYSBzcGFuIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhIHNwYW46OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgd2lkdGggMC4zcywgdG9wIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0bGEgc3Bhbjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHdpZHRoIDAuM3MsIGJvdHRvbSAwLjNzOyB9XFxuXFxuLyogYWN0aXZlIHN0YXRlLCBpLmUuIG1lbnUgb3BlbiAqL1xcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTAzYjsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRsYS5pcy1hY3RpdmUgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUsXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICB3aWR0aDogNTAlOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExcHgpIHRyYW5zbGF0ZVkoMXB4KSByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odGxhLmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTFweCkgdHJhbnNsYXRlWSgtMXB4KSByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi8qKlxcclxcbiAqIFN0eWxlIDRcXHJcXG4gKlxcclxcbiAqIEhhbWJ1cmdlciB0byByaWdodC1hcnJvdyAoaHRyYSkuIEhhbWJ1cmdlciBtZW51IHRyYW5zZm9ybXMgdG8gYVxcclxcbiAqIHJpZ2h0LXBvaW50aW5nIGFycm93LiBVc3VhbGx5IGluZGljYXRlcyBhbiBvZmYgY2FudmFzIG1lbnUgc2xpZGluZyBpbiBmcm9tXFxyXFxuICogcmlnaHQgdGhhdCB3aWxsIGJlIGNsb3NlIG9uIHJlLWNsaWNrIG9mIHRoZSBpY29uLlxcclxcbiAqL1xcbi5jLWhhbWJ1cmdlci0taHRyYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NjUwOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhIHNwYW4ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG5cXG4uYy1oYW1idXJnZXItLWh0cmEgc3Bhbjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHdpZHRoIDAuM3MsIHRvcCAwLjNzOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhIHNwYW46OmFmdGVyIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHdpZHRoIDAuM3MsIGJvdHRvbSAwLjNzOyB9XFxuXFxuLyogYWN0aXZlIHN0YXRlLCBpLmUuIG1lbnUgb3BlbiAqL1xcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NWQwMDsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUsXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSBzcGFuOjphZnRlciB7XFxuICB3aWR0aDogNTAlOyB9XFxuXFxuLmMtaGFtYnVyZ2VyLS1odHJhLmlzLWFjdGl2ZSBzcGFuOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoMXB4KSByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi5jLWhhbWJ1cmdlci0taHRyYS5pcy1hY3RpdmUgc3Bhbjo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoLTFweCkgcm90YXRlKDQ1ZGVnKTsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDM1MHB4LCAwLCAwKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzNTBweCwgMCwgMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzUwcHgsIDAsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxMjIwO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRUJCNjQ5O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTU1LCAwLjYwNSwgMC4xOCwgMSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNTUsIDAuNjA1LCAwLjE4LCAxLjA1NSk7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNTUsIDAuNjA1LCAwLjE4LCAxLjA1NSk7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTU1LCAwLjYwNSwgMC4xOCwgMS4wNTUpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE1NSwgMC42MDUsIDAuMTgsIDEuMDU1KTsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjRjJFRkVGO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpIGEubG9nb2l6ZTpob3ZlciB7XFxuICBjb2xvcjogI0YyRUZFRjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkuc3BhY2VyIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG5uYXYjb3ZlcmxvcmQgdWwjZHJvcGRvd24gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI0FBQTZBNjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG5uYXYjb3ZlcmxvcmQub3ZlcmxvcmRfYWN0aXZlIHVsI2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duLm9uYmxvZyBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjRjJFRkVGO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duLm9uYmxvZyBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjQUFBNkE2OyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLmRyb3Bkb3duX21lc3NhZ2Uge1xcbiAgbWF4LXdpZHRoOiAxNzBweDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5kcm9wZG93bl9tZXNzYWdlIGEge1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5kcm9wZG93bl9tZXNzYWdlIGE6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblxcbm5hdiNvdmVybG9yZCB1bCNkcm9wZG93biBsaS5kcm9wZG93bl9tZXNzYWdlIGE6aG92ZXIgc3BhbiB7XFxuICBmb250LXdlaWdodDogOTAwOyB9XFxuXFxubmF2I292ZXJsb3JkIHVsI2Ryb3Bkb3duIGxpLmRyb3Bkb3duX21lc3NhZ2UgYSBzcGFuIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6ICdmcmVpZ2h0LXNhbnMtcHJvJyxzYW5zLXNlcmlmOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyTWVudS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbi8vIFxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQoKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzg4ODsgfVxcblxcbmRpdi5oZWFkZXIgI3VzZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxNDBweDtcXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZjBmMGYwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuZGl2LmhlYWRlciAjdXNlciBoMiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBjb2xvcjogIzQ3NEUzQztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogJ2ZyZWlnaHQtc2Fucy1wcm8nLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuZGl2LmhlYWRlciAjdXNlciBoMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIGNvbG9yOiAjNTk2MjREO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XFxuXFxuZGl2LmhlYWRlciAjdXNlci1sb2dvIHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDExMHB4IDExMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOUJBNDUwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XFxuXFxudWwjdXNlci1saW5rcyB7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxudWwjdXNlci1saW5rcyBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM0VUS1ctcC5qcGdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3BpY3R1cmUuanBnXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fRm9vdGVyLnNjc3MnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1zdGFyJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XHJcbiAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9Zm9yayZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Gb290ZXIucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0Zvb3Rlcic7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXHJcbmNvbnN0IG1ldGFzID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJykuaGVsbWV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEhlYWRlclRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXHJcbiAgICBsZXQgdGl0bGVUZW1wbGF0ZSA9ICclcyB8IEp1bGllbiBWYWzDqXJ5JztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IG1ldGE9e21ldGFzLm1ldGF9IGxpbms9e21ldGFzLmxpbmt9IHRpdGxlVGVtcGxhdGU9e3RpdGxlVGVtcGxhdGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkh0bWxIZWFkZXJUYWdzLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIdG1sSGVhZGVyVGFncyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6ICMwQzE3MjM7IH1cXG5cXG5oMSBhLCBoMiBhLCBoMyBhLCBoNCBhLCBoNSBhLCBoNiBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyB9XFxuXFxuaDEgYTpob3ZlciB7XFxuICBjb2xvcjogI0RGNEE3RjsgfVxcblxcbnVsIHtcXG4gIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMDtcXG4gIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwOyB9XFxuICB1bCBsaSB7XFxuICAgIGNvbG9yOiAjMTY3N0FBO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICM0RDRENEQ7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZSwgYS5idXR0b25pemUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cXG5cXG5idXR0b24uYnV0dG9uaXplLnNtYWxsLCBhLmJ1dHRvbml6ZS5zbWFsbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuYnV0dG9uLmJ1dHRvbml6ZS50aW55LCBhLmJ1dHRvbml6ZS50aW55IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5idXR0b24uYnV0dG9uaXplOmhvdmVyLCBhLmJ1dHRvbml6ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmEsIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG5hOmxpbmssIGE6dmlzaXRlZCwgYTpob3ZlciwgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XFxuXFxuYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjYzLCAwLjE0LCAwLjgyKTtcXG4gIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuNjMsIDAuMTQsIDAuODIpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC42MywgMC4xNCwgMC44Mik7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxcblxcbnVsI3VzZXItbGlua3MgbGkgYTpob3ZlciwgYS5idXR0b25pemU6aG92ZXIsIGJ1dHRvbi5idXR0b25pemU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGNEE3RjtcXG4gIGJvcmRlci1jb2xvcjogI0RGNEE3RjsgfVxcblxcbmhyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjbGVhcjogYm90aDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZjRmM2YzOyB9XFxuXFxuLyogU21hbGwgRGV2aWNlcywgVGFibGV0cyBmcm9tIGh0dHBzOi8vc2NvdGNoLmlvL3F1aWNrLXRpcHMvZGVmYXVsdC1zaXplcy1mb3ItdHdpdHRlci1ib290c3RyYXBzLW1lZGlhLXF1ZXJpZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDc1MHB4OyB9IH1cXG5cXG4vKiBNZWRpdW0gRGV2aWNlcywgRGVza3RvcHMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDc1MHB4OyB9IH1cXG5cXG4vKiBMYXJnZSBEZXZpY2VzLCBXaWRlIFNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgYm9keSB7XFxuICAgIHdpZHRoOiA3NTBweDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyP25hbWU9ZmF2aWNvbi5pY28hLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkNPTlRBQ1QgUEFHRTwvaDE+XHJcbiAgICAgICAgPHA+dGVzdCB0aGUgNDA0IHBhZ2UgPGEgaHJlZj0nL21pZGRsZW9mbm93aGVyZSc+aGVyZTwvYT48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi4vUG9zdC9Qb3N0SXRlbSc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0hvbWVTZWN0aW9uLnNjc3MnKTtcclxufVxyXG5cclxubGV0IGhvbWVTZWN0aW9uID0gY2xhc3MgSG9tZVNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHJldHJpZXZlIGRhdGEgZnJvbSBzdG9yZVxyXG4gICAgbGV0IHBvc3RzID0gSG9tZVNlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCkucG9zdHM7XHJcbiAgICBsZXQgcG9zdEl0ZW1zID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcG9zdHMpIHtcclxuICAgICAgbGV0IGtleUhyID0gJ2hyJyArIGtleTtcclxuICAgICAgcG9zdEl0ZW1zLnB1c2goPGhyIGtleT17a2V5SHJ9IC8+KTtcclxuICAgICAgcG9zdEl0ZW1zLnB1c2goPFBvc3RJdGVtIGtleT17a2V5fSBwb3N0PXtwb3N0c1trZXldfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcbiAgICAgICAgICB7cG9zdEl0ZW1zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdHM6IEFwcFN0b3JlLmdldFN0YXRlKCkucG9zdHNcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuaG9tZVNlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyhob21lU2VjdGlvbik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xyXG5pbXBvcnQgY29ubmVjdFRvU3RvcmVzIGZyb20gJ2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMnO1xyXG5cclxubGV0IHByaXNtID0gcmVxdWlyZSgncHJpc21qcycpO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fUG9zdEl0ZW0uc2NzcycpO1xyXG4gIHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3MnKTtcclxufVxyXG5cclxubGV0IHBvc3RJdGVtID0gY2xhc3MgUG9zdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XHJcbiAgICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByaXNtLmhpZ2hsaWdodEFsbCgoKSA9PiB7fSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5wYXJhbXMpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgbGV0IGRpc3F1c19zaG9ydG5hbWUgPSAnZGFydWwnOyAgICAgIFxyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRzcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOyBkc3EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyBkc3EuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICBkc3Euc3JjID0gJy8vJyArIGRpc3F1c19zaG9ydG5hbWUgKyAnLmRpc3F1cy5jb20vZW1iZWQuanMnO1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5hcHBlbmRDaGlsZChkc3EpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlICovXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByaXNtLmhpZ2hsaWdodEFsbCgoKSA9PiB7fSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBwb3N0ID0gdGhpcy5wcm9wcy5wb3N0LFxyXG4gICAgICAgIGRpc3F1c01hcmt1cCA9ICcnLFxyXG4gICAgICAgIG1hcmtkb3duQ2xhc3MgPSAnbWFya2Rvd24tYm9keSBoaWdobGlnaHQgcHJldmlldycsXHJcbiAgICAgICAgbW9yZUJ1dHRvbiA9ICcnLFxyXG4gICAgICAgIGJhY2tCdXR0b24gPSAnJyxcclxuICAgICAgICB0aW1lID0gJycsXHJcbiAgICAgICAgZWRpdFVybCA9ICcnLFxyXG4gICAgICAgIGhlbG1ldE1hcmt1cCA9ICcnLFxyXG4gICAgICAgIGVkaXRCdXR0b25NYXJrdXAgPSAnJztcclxuXHJcbiAgICBpZiAocG9zdCkge1xyXG4gICAgICBtb3JlQnV0dG9uID0gPExpbmsgY2xhc3NOYW1lPSdidXR0b25pemUgc21hbGwnIHRvPXsnL3Bvc3QvJyArIHBvc3QucGVybWFsaW5rfT5Db250aW51ZSByZWFkaW5nIOKGkjwvTGluaz47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMucGFyYW1zKSB7XHJcbiAgICAgIG1hcmtkb3duQ2xhc3MgPSAnbWFya2Rvd24tYm9keSBoaWdobGlnaHQnO1xyXG4gICAgICAvLyBmcm9tIHN0b3JlXHJcbiAgICAgIGxldCBwb3N0cyA9IFBvc3RJdGVtLmdldFByb3BzRnJvbVN0b3JlcygpLnBvc3RzO1xyXG4gICAgICBsZXQgcG9zdElkID0gdGhpcy5wcm9wcy5wYXJhbXMucG9zdElkO1xyXG4gICAgICBsZXQgdGl0bGUgPSBQb3N0SXRlbS5nZXRQcm9wc0Zyb21TdG9yZXMoKS5jb25maWcuaGVsbWV0LnRpdGxlO1xyXG4gICAgICAvLyBmaW5kIGJ5IHBlcm1hbGlua1xyXG4gICAgICBwb3N0ID0gXy5maW5kKHBvc3RzLCBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ucGVybWFsaW5rID09PSBwb3N0SWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGltZSA9IDx0aW1lIGRhdGVUaW1lPXtwb3N0LmRhdGUudG9TdHJpbmcoKX0+e3Bvc3QuZGF0ZX08L3RpbWU+O1xyXG4gICAgICBsZXQgaG9tZXBhZ2UgPSBQb3N0SXRlbS5nZXRQcm9wc0Zyb21TdG9yZXMoKS5wYWNrYWdlanNvbi5ob21lcGFnZTtcclxuICAgICAgZWRpdFVybCA9IGhvbWVwYWdlICsgJy9lZGl0L21hc3Rlci9wb3N0cy8yMDE1LycgKyBwb3N0LmZpbGVuYW1lO1xyXG4gICAgICBlZGl0QnV0dG9uTWFya3VwID0gPGEgaHJlZj17ZWRpdFVybH0gdGFyZ2V0PSdfYmxhbmsnIHRpdGxlPSdlZGl0IG1lJz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYy1oYW1idXJnZXIgZWRpdGlvbicgaHJlZj17ZWRpdFVybH0gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgPHNwYW4+ZWRpdGlvbjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9hPjtcclxuICAgICAgbGV0IHRlbXBsYXRlVGl0bGUgPSAnJXMgfCAnICsgcG9zdC50aXRsZTtcclxuICAgICAgbGV0IHBvc3RUaXRsZSA9IHRpdGxlICsgJyB8ICcgKyBwb3N0LnRpdGxlO1xyXG4gICAgICBoZWxtZXRNYXJrdXAgPSA8SGVsbWV0IHRpdGxlPXt0aXRsZX0gdGl0bGVUZW1wbGF0ZT17dGVtcGxhdGVUaXRsZX0gbWV0YT17W1xyXG4gICAgICAgIHsnbmFtZSc6ICdkZXNjcmlwdGlvbicsICdjb250ZW50JzogcG9zdFRpdGxlfSxcclxuICAgICAgICB7J3Byb3BlcnR5JzogJ29nOnR5cGUnLCAnY29udGVudCc6ICdhcnRpY2xlJ31cclxuICAgICAgXX0gLz47XHJcblxyXG4gICAgICBkaXNxdXNNYXJrdXAgPSA8ZGl2IGlkPSdkaXNxdXNfdGhyZWFkJz48L2Rpdj47XHJcbiAgICAgIGJhY2tCdXR0b24gPSA8TGluayBjbGFzc05hbWU9J2J1dHRvbml6ZSBzbWFsbCcgdG89eycvJ30+SG9tZTwvTGluaz47XHJcblxyXG4gICAgICAvL3ByZXZpZXdDbGFzcyA9ICcnO1xyXG5cclxuICAgICAgLy8gaWYgKCFwb3N0KSB7XHJcbiAgICAgIC8vICAgdG9kbyByZWRpcmVjdFxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAvLyBwYXJhbVxyXG4gICAgbGV0IHBvc3RQZXJtYWxpbmsgPSAnL3Bvc3QvJyArIHBvc3QucGVybWFsaW5rO1xyXG4gICAgbGV0IGFydGljbGVDb250YWluZXJDbGFzcyA9ICdwb3N0ICc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXthcnRpY2xlQ29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcmtkb3duLWJvZHknPlxyXG4gICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2VkaXRCdXR0b25NYXJrdXB9XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtwb3N0UGVybWFsaW5rfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21hcmtkb3duQ2xhc3N9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmJvZHl9fT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cclxuICAgICAgICAgICAge21vcmVCdXR0b259XHJcbiAgICAgICAgICAgIHtiYWNrQnV0dG9ufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7aGVsbWV0TWFya3VwfVxyXG4gICAgICAgICAge2Rpc3F1c01hcmt1cH1cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmNvbmZpZyxcclxuICAgICAgcG9zdHM6IEFwcFN0b3JlLmdldFN0YXRlKCkucG9zdHMsXHJcbiAgICAgIHBhY2thZ2Vqc29uOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLnBhY2thZ2Vqc29uXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbnBvc3RJdGVtLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdQb3N0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMocG9zdEl0ZW0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL2FwcC9jb21wb25lbnRzL1Bvc3QvUG9zdEl0ZW0uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwcmlzbWpzXCJcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fUG9zdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1Bvc3RJdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1Bvc3RJdGVtLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvUG9zdC9fUG9zdEl0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImFydGljbGUge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuYXJ0aWNsZS5wb3N0IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbi10b3A6IDBweDsgfVxcblxcbmFydGljbGUucG9zdCBwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuXFxuYXJ0aWNsZSAubWFya2Rvd24tYm9keSBhIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTFlMWUxOyB9XFxuXFxuYXJ0aWNsZSAubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI0ZGMDA0MjsgfVxcblxcbmFydGljbGUgaDEsIGFydGljbGUgaDIsIGFydGljbGUgaDMsIGFydGljbGUgaDQsIGFydGljbGUgaDUsIGFydGljbGUgaDYsIGFydGljbGUgb2wsIGFydGljbGUgdWwsIGFydGljbGUgdGFibGUsIGFydGljbGUgYmxvY2txdW90ZSwgYXJ0aWNsZSAubWFya2Rvd24tYm9keSwgLmJ1dHRvbnMge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXgtd2lkdGg6IDcwMHB4OyB9XFxuXFxuLnByZXZpZXcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDQzMHB4OyB9XFxuXFxuZGl2Lm1hcmtkb3duLWJvZHkgcDpmaXJzdC1jaGlsZDo6Zmlyc3QtbGV0dGVyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDVweCA4cHggLTlweCAwO1xcbiAgY29sb3I6ICNERjRBN0Y7IH1cXG5cXG5jb2RlOm5vdChbY2xhc3NdKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGNkJGOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1Bvc3QvX1Bvc3RJdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcmlzbS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3ByaXNtLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcmlzbS5jc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXNzZXRzL2pzL3ByaXNtL3ByaXNtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sP3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0K2dpdCtnbyZwbHVnaW5zPWxpbmUtbnVtYmVycyAqL1xcbi8qKlxcbiAqIHByaXNtLmpzIGRlZmF1bHQgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxcbiAqIEJhc2VkIG9uIGRhYmJsZXQgKGh0dHA6Ly9kYWJibGV0LmNvbSlcXG4gKiBAYXV0aG9yIExlYSBWZXJvdVxcbiAqL1xcblxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcXG5cXHRmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlO1xcblxcdGRpcmVjdGlvbjogbHRyO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0d2hpdGUtc3BhY2U6IHByZTtcXG5cXHR3b3JkLXNwYWNpbmc6IG5vcm1hbDtcXG5cXHR3b3JkLWJyZWFrOiBub3JtYWw7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcblxcblxcdC13ZWJraXQtaHlwaGVuczogbm9uZTtcXG5cXHQtbW96LWh5cGhlbnM6IG5vbmU7XFxuXFx0LW1zLWh5cGhlbnM6IG5vbmU7XFxuXFx0aHlwaGVuczogbm9uZTtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSA6Oi1tb3otc2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6LW1vei1zZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSA6Oi1tb3otc2VsZWN0aW9uIHtcXG5cXHR0ZXh0LXNoYWRvdzogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSA6OnNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06OnNlbGVjdGlvbiwgY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIDo6c2VsZWN0aW9uIHtcXG5cXHR0ZXh0LXNoYWRvdzogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbn1cXG5cXG5AbWVkaWEgcHJpbnQge1xcblxcdGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSxcXG5cXHRwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0XFx0dGV4dC1zaGFkb3c6IG5vbmU7XFxuXFx0fVxcbn1cXG5cXG4vKiBDb2RlIGJsb2NrcyAqL1xcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG5cXHRtYXJnaW46IC41ZW0gMDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xcbn1cXG5cXG4vKiBJbmxpbmUgY29kZSAqL1xcbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSB7XFxuXFx0cGFkZGluZzogLjFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAuM2VtO1xcbn1cXG5cXG4udG9rZW4uY29tbWVudCxcXG4udG9rZW4ucHJvbG9nLFxcbi50b2tlbi5kb2N0eXBlLFxcbi50b2tlbi5jZGF0YSB7XFxuXFx0Y29sb3I6IHNsYXRlZ3JheTtcXG59XFxuXFxuLnRva2VuLnB1bmN0dWF0aW9uIHtcXG5cXHRjb2xvcjogIzk5OTtcXG59XFxuXFxuLm5hbWVzcGFjZSB7XFxuXFx0b3BhY2l0eTogLjc7XFxufVxcblxcbi50b2tlbi5wcm9wZXJ0eSxcXG4udG9rZW4udGFnLFxcbi50b2tlbi5ib29sZWFuLFxcbi50b2tlbi5udW1iZXIsXFxuLnRva2VuLmNvbnN0YW50LFxcbi50b2tlbi5zeW1ib2wsXFxuLnRva2VuLmRlbGV0ZWQge1xcblxcdGNvbG9yOiAjOTA1O1xcbn1cXG5cXG4udG9rZW4uc2VsZWN0b3IsXFxuLnRva2VuLmF0dHItbmFtZSxcXG4udG9rZW4uc3RyaW5nLFxcbi50b2tlbi5jaGFyLFxcbi50b2tlbi5idWlsdGluLFxcbi50b2tlbi5pbnNlcnRlZCB7XFxuXFx0Y29sb3I6ICM2OTA7XFxufVxcblxcbi50b2tlbi5vcGVyYXRvcixcXG4udG9rZW4uZW50aXR5LFxcbi50b2tlbi51cmwsXFxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxcbi5zdHlsZSAudG9rZW4uc3RyaW5nIHtcXG5cXHRjb2xvcjogI2E2N2Y1OTtcXG5cXHRiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuNSk7XFxufVxcblxcbi50b2tlbi5hdHJ1bGUsXFxuLnRva2VuLmF0dHItdmFsdWUsXFxuLnRva2VuLmtleXdvcmQge1xcblxcdGNvbG9yOiAjMDdhO1xcbn1cXG5cXG4udG9rZW4uZnVuY3Rpb24ge1xcblxcdGNvbG9yOiAjREQ0QTY4O1xcbn1cXG5cXG4udG9rZW4ucmVnZXgsXFxuLnRva2VuLmltcG9ydGFudCxcXG4udG9rZW4udmFyaWFibGUge1xcblxcdGNvbG9yOiAjZTkwO1xcbn1cXG5cXG4udG9rZW4uaW1wb3J0YW50LFxcbi50b2tlbi5ib2xkIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRva2VuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9rZW4uZW50aXR5IHtcXG5cXHRjdXJzb3I6IGhlbHA7XFxufVxcblxcbnByZS5saW5lLW51bWJlcnMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xcblxcdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XFxufVxcblxcbnByZS5saW5lLW51bWJlcnMgPiBjb2RlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0dG9wOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRsZWZ0OiAtMy44ZW07XFxuXFx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcXG5cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG5cXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcXG5cXHRcXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcXG5cXHR9XFxuXFxuXFx0XFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuXFx0XFx0XFx0Y29sb3I6ICM5OTk7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0cGFkZGluZy1yaWdodDogMC44ZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0XFx0fVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL2Fzc2V0cy9qcy9wcmlzbS9wcmlzbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuaG9tZS1zZWN0aW9uLWFjdGlvbnMge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZERjZGRjtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LW9uZSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGMUZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtdHdvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVFN0ZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlBBR0UgTk9UIEZPVU5EPC9oMT5cclxuICAgICAgICA8cD55ZXMgaW5kZWVkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ob3RGb3VuZFNlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ05vdEZvdW5kU2VjdGlvbic7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3BlcnNvbmFsLWJsb2cvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qc1xuICoqLyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuLyplc2xpbnQtZGlzYWJsZSBuZXctY2FwKi9cclxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbi8qZXNsaW50LWVuYWJsZSBuZXctY2FwKi9cclxuXHJcbmxldCBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XHJcblxyXG5yb3V0ZXIudXNlKCcvYXBpLyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBhcGkudG9kbyhyZXEsIHJlcywgbmV4dCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cclxuLy9cclxuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vYXBpL2FwaSddLCAoKSA9PiB7XHJcbiAgICBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XHJcbiAgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvcGVyc29uYWwtYmxvZy9zZXJ2ZXIvcm91dGVzL2FwaS5qc1xuICoqLyIsImxldCBhcGkgPSB7XHJcbiAgdG9kbzogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgLy8gc2ltcGxlIGFwaSBmZXRjaCBleGFtcGxlLCBubyBvd24gREIgaGVyZSBzbyBleHRlcm5hbCBjYWxsIGlzIG1hZGUuXHJcblxyXG4gICAgICAvLyBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YlxyXG4gICAgIC8qIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChqc29uKTtcclxuICAgICAgfSk7XHJcbiAgICAgICovXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0ZXN0OiAndGVzdCd9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvdGhlcnRvZG86ICgpID0+IHtcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi9wZXJzb25hbC1ibG9nL3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==