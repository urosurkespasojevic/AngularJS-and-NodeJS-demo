var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
    
    firstName : {type: String},
    
    lastName : {type: String},
    
    email : {type: String},
    
    username : {type: String},
    
    password : {type: String}
    
});

module.exports = mongoose.model('User', userModel);