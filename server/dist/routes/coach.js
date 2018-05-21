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

function getCoachByName(req, res, next) {
    Coach.find({ 'firstname': new RegExp(req.params.name, 'i') }, function (err, coachs) {
        if (err) return next(err);
        res.json(coachs);
    });
}

function updateNote(req, res, next) {

    Coach.findById(req.params.id, function (err, coach) {
        if (coach) {
            if (err) res.send(err);
            coach.note = req.body.note;
            coach.save(function (err) {
                if (err) res.send(err);

                res.json({ message: 'Note updated!' });
            });
        } else {
            res.json({ message: 'Coach not found' });
        }
    });
}

router.delete('/delete_all_coachs', deleteAllCoach);
router.post('/add_coach', addCoach);
router.get('/all_coach', getAllCoachs);
router.get('/coach_by_name/:name', getCoachByName);
router.get('/:id', findbyId);
router.delete('/:id', deleteCoachById);
router.get('/coach_by_name/:name', getCoachByName);
router.put('/update_note/:id', updateNote);

module.exports = router;