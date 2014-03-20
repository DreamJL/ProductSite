// Modules
var express = require('express');
var http = require('http');

var app = express();

// Files
var appConf = require('./appConf');
var appRoutes = require('./appRoutes');

//App config
appConf.appConfig(app);

//App routes
appRoutes.appRoutes(app);

// HTTP Server initing...
var server = require('http').createServer(app);
server.listen(app.get('port'));