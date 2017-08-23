'use strict'

let express = require('express')
let router = express.Router()
let car = require('../models/car')

router.get('/cars', (req, res, next) => {
    res.render('cars')
});

router.get('/cars/add', (req, res, next) => {
    res.render('add_car')
})

router.get('/cars/search', (req, res, next) => {
    res.render('search_car')
})


module.exports = router