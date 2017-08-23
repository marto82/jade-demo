/**
 * Created by mkenarov on 10/19/16.
 *
 */

let mongoose = require('mongoose')

let carSchema = mongoose.Schema({
    model: {type: String, required: true, minlength: 3},
    year: {type: Number, required: true},
    owner_name: {type: String, required: true, minlength:5}
})

mongoose.model('Car', carSchema)

module.exports = mongoose.model('Car')

