'use strict'

let express = require('express')
let router = express.Router()

router.get('/users', (req, res, next) => {
  res.render('users')
})

router.get('/users/add', (req, res, next) => {
  res.render('add_user')
})

router.get('/users/search', (req, res, next) => {
  res.render('search_user')
})

module.exports = router
