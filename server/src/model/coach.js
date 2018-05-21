var mongoose     = require('mongoose');
var router = require('express').Router();
var Schema       = mongoose.Schema;

var CoachSchema   = new Schema({

    firstname: String,
    lastname: String,
    mail: String,
    cellphone: String,
    note: Number,
    comments: [{ 
    	type: mongoose.Schema.Types.ObjectId, 
    	ref: 'Comments' 
    }],
    certified: Boolean,
    qualification: [String],
    description:String
    

});

module.exports = mongoose.model('Coach', CoachSchema);



