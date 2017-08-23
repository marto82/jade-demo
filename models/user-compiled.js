'use strict';

/**
 * Created by mkenarov on 10/19/16.
 *
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 5 },
  age: { type: Number, required: true, minlength: 18 },
  driver_license: { type: String, required: true }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');

//# sourceMappingURL=user-compiled.js.map