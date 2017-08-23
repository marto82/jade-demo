'use strict';

/**
 * Created by mkenarov on 10/19/16.
 *
 */

var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  model: { type: String, required: true, minlength: 3 },
  year: { type: Number, required: true },
  owner_name: { type: String, required: true, minlength: 5 }
});

mongoose.model('Car', carSchema);

module.exports = mongoose.model('Car');

//# sourceMappingURL=car-compiled.js.map