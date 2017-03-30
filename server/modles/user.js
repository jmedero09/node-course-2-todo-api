var mongoose = require('mongoose');

var User = mongoose.model('NewUser', {
    email: {
        type: String,
        required: true,
        trim: true,
        min: 1
    },

})

module.exports = { User }