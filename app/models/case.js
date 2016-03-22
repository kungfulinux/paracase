// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CaseSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Case', CaseSchema);
