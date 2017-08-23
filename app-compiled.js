/**
 * Created by mkenarov on 10/19/16.
 *
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var port = 3000;

var app = express();

app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, './views')));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index);

app.get('/users', users);
app.get('/users/add', users);
app.get('/users/search', users);

app.get('/cars', users);
app.get('/cars/add', users);
app.get('/cars/search', users);

app.listen(port, function () {
  console.log('Running jade-demo on port ' + port);
});

//# sourceMappingURL=app-compiled.js.map