exports.id = 0;
exports.modules = {

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var __moduleBindings = ["test"];
	 /* TEST */ if (true) {
		 module.hot.data = {hotCall: ""};
	 module.hot.dispose(function(data){
		 data.msg = "hot hot";
		 });
		 module.hot.accept([3,4], function() {
		 console.log(module.hot.data);
		  });
	 module.hot.decline(3); }

	var path = __webpack_require__(8);
	var http = __webpack_require__(7);
	var express = __webpack_require__(6);
	var require1 = __webpack_require__(3);
	var require2 = __webpack_require__(4);

	// https://github.com/expressjs/generator/blob/master/templates/js/app.js
	// http://stackoverflow.com/questions/10378690/remove-route-mappings-in-nodejs-express/28369539#28369539

	var app = express();

	var app2 = express();

	console.log(app == app2);

	var router = express.Router();

	app.set('port', process.env.PORT || 3000);

	app.use(function (req, res, next) {
	  console.log('Timddde: %d', Date.now());
	  require1.do("someStuffddd");
	  next();
	})

	function test() {

	}

	require1.do("tdddddest");

	http.createServer(app).listen(app.get('port'), function() {
	  console.log('Express server listening on port ' + app.get('port'));
	});

	console.log('main module');


	/* TEST */

/***/ }

};