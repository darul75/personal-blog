var path = require('path');
var http = require('http');
var express = require('express');
var require1 = require('./require1');
var require2 = require('./require2');

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

require1.do("test");

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

console.log('main module');
