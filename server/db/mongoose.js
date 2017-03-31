var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.eventNames.MONGOD_URI || 'mongod://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};