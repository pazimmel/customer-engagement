var express = require('express');
var path = require('path');
var config = require('./config');
var req = require('request');

var app = express();
var global_config = '';

app.use(express.static(__dirname + '/dist'));

function IS_LOCAL() {
    return !process.env.NODE_ENV;
}

var ipaddress =  global_config.ipaddress || '0.0.0.0';
var port = global_config.port || '8000';

app.listen(port, ipaddress, function () {
    console.log((new Date()) + ' Server is listening to ' + ipaddress + ':' + port);
});
