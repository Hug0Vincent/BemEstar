'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../model/comment.js');
var Coach = require('../model/coach.js');

function getAllCoachs(req, res, next) {

    Coach.find(function (err, coachs) {
        if (err) return next(err);
        res.json(coachs);
    });
}

function addCoach(req, res, next) {
    Coach.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

function deleteAllCoach(req, res, next) {
    Coach.remove({}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

function findbyId(req, res, next) {
    Coach.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

function deleteCoachById(req, res, next) {
    Coach.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}

function getCoachByQualification(req, res, next) {
    Coach.find({ 'qualification': new RegExp(req.params.qualif, 'i') }, function (err, coachs) {
        if (err) return next(err);
        res.json(coachs);
    });
}

router.delete('/delete_all_coachs', deleteAllCoach);
router.post('/add_coach', addCoach);
router.get('/all_coach', getAllCoachs);
router.get('/:id', findbyId);
router.delete('/:id', deleteCoachById);
router.get('/coach_by_qualif/:qualif', getCoachByQualification);

module.exports = router;