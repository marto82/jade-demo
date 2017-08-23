/**
 * Created by mkenarov on 10/19/16.
 *
 */
'use strict'

let express = require('express')
let mongoose = require('mongoose')
let path = require('path')
let bodyParser = require('body-parser')

let index = require('./routes/index')
let users = require('./routes/users')

const port = 3000

let app = express()

app.use(express.static('./public'))
app.use(express.static(path.join(__dirname, './views')))
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', index)

app.get('/users', users)
app.get('/users/add', users)
app.get('/users/search', users)

app.get('/cars', users)
app.get('/cars/add', users)
app.get('/cars/search', users)

app.listen(port, () => {
    console.log('Running jade-demo on port ' + port)
})


