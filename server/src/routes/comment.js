var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comments = require('../model/comment.js');


function getAllComments(req, res, next){

    Comments.find(function (err, comment) {
        if (err) return next(err);
        res.json(comment);
    })

  }

  function addComment(req, res, next){
    Comments.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
  }


function deleteAllComments(req, res, next) {
    Comments.remove({}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

function findbyId(req, res, next) {
    Comments.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

function deleteCommentById(req, res, next) {
    Comments.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}




router.delete('/delete_all_comments',deleteAllComments);
router.post('/add_comment',addComment);
router.get('/all_comments',getAllComments);
router.get('/:id',findbyId);
router.delete('/:id',deleteCommentById);
  
module.exports = router;