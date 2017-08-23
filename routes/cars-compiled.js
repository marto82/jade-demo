'use strict';

var express = require('express');
var router = express.Router();
var car = require('../models/car');

router.get('/cars', function (req, res, next) {
    res.render('cars');
});

router.get('/cars/add', function (req, res, next) {
    res.render('add_car');
});

router.get('/cars/search', function (req, res, next) {
    res.render('search_car');
});

module.exports = router;

//# sourceMappingURL=cars-compiled.js.map