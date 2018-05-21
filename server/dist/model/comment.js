'use strict';

var mongoose = require('mongoose');
var router = require('express').Router();
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

    firstname: String,
    lastname: String,
    mail: String,
    note: Number,
    comments: String,
    coachs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    }]

});

module.exports = mongoose.model('Comment', CommentSchema);