var mongoose     = require('mongoose');
var router = require('express').Router();
var Schema       = mongoose.Schema;

var CoachSchema   = new Schema({

    firstname: String,
    lastname: String,
    mail: String,
    cellphone: String,
    note: Number,
    certified: Boolean,
    qualification: [String],
    shortdescription: String,
    longdescription: String,
    withme: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    website:String
    

});

module.exports = mongoose.model('Coach', CoachSchema);



