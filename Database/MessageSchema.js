var mongoose = require('mongoose');
var schema = mongoose.Schema;

//Create schema for database
var MessageSchema = new schema({
    message: String,
    time: String,
    timeSort: Number
})

//Create model from the schema
var Message = mongoose.model('Message', MessageSchema);

