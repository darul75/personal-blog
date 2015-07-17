var path = require('path');
var http = require('http');
var express = require('express');
var require1 = require('./require1');
var require2 = require('./require2');

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
