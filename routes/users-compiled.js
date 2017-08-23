'use strict';

var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
  res.render('users');
});

router.get('/users/add', function (req, res, next) {
  res.render('add_user');
});

router.get('/users/search', function (req, res, next) {
  res.render('search_user');
});

module.exports = router;

//# sourceMappingURL=users-compiled.js.map