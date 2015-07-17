exports.id = 0;
exports.modules = {

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __moduleBindings = [];
	 /* TEST */ if (true) {
		 module.hot.data = {hotCall: ""};
	 module.hot.dispose(function(data){
		 data.msg = "hot hot";
		 });
		 module.hot.accept([], function() {
		 console.log(module.hot.data);
		  });
	 module.hot.decline(3); }

	module.exports = {
		do: function(hello) {
	    console.log("ddddddd");
	    this.doAgainAgain();
	    this.doNotAgainAgain();
		},
	  doAgain: function() {
	    console.log("none it");
	  },
	  doAgainAgain: function() {
	    console.log("titi");
	  },
	  doNotAgainAgain: function() {
	    console.log("tudddddtdddu");
	  }

	};


	/* TEST */

/***/ }

};