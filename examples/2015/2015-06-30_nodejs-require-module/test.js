console.log('toto');

var dep = require('./dep');

console.log('titi');

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
