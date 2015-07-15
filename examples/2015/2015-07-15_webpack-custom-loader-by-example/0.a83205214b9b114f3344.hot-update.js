exports.id = 0;
exports.modules = [
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* TEST */ if (true) {
	 if (module.parent == null) {
	 	module.hot.accept(function(e){ });  } else {
	 module.hot.accept([], function() {
	  }); } }

	module.exports = {
		do: function(tododddzzzzdddeeeeddddddd) {
	    console.log("do");
	    this.doAgainAgain();
	    this.doNotAgainAgain();
		},
	  doAgain: function() {
	    console.log("do it");
	  },
	  doAgainAgain: function() {
	    console.log("titi");
	  },
	  doNotAgainAgain: function() {
	    console.log("tudddtu");
	  }

	};


	/* TEST */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* TEST */ if (true) {
	 if (module.parent == null) {
	 	module.hot.accept(function(e){ });  } else {
	 module.hot.accept([], function() {
	  }); } }

	module.exports = 'requiddddddddddzzzdddre 2';


	/* TEST */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* TEST */ if (true) {
	 if (module.parent == null) {
	 	module.hot.accept(function(e){ }); require1 = __webpack_require__(1);
	require1.do("someStuffddd");
	require1.do("someStuffddd");
	require1.do("dddd");
	require2 = __webpack_require__(2);
	 } else {
	 module.hot.accept([1,2], function() {
	 require1 = __webpack_require__(1);
	require1.do("someStuffddd");
	require1.do("someStuffddd");
	require1.do("dddd");
	require2 = __webpack_require__(2);
	 }); } }

	var path = __webpack_require__(6);
	var http = __webpack_require__(5);
	var express = __webpack_require__(4);
	var require1 = __webpack_require__(1);
	var require2 = __webpack_require__(2);

	var app = express();
	var router = express.Router();

	app.set('port', process.env.PORT || 3000);
	//app.use(express.static(publicPath));

	// router.use('/', function(req, res, next) {
	//   require1.do("someStuffddd");
	//   res.status(200).send({test: 'test'});
	// });

	app.use(function (req, res, next) {
	  console.log('Timddde: %d', Date.now());
	  require1.do("someStuffddd");
	  next();
	})

	require1.do("dddd");

	http.createServer(app).listen(app.get('port'), function() {
	  console.log('Express server listening on port ' + app.get('port'));
	});

	console.log('main module');


	/* TEST */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }
];