const express = require("express");
const router = express.Router();

// const posts = require("../data/posts");
// const users = require("../data/users");
const comments = require("../data/comments");
const error = require("../utilities/error");


router
  .route("/")
  .get((req, res, next) => {
    res.json(comments);
  })
  .post((req, res) => {
    const userId = req.body.userID;
    if (!userId) {
      next(error(400, "user not found"));
    }

    const newComment = {
      id: comments[comments.length - 1].id + 1,
      userId: req.body.userId,
      postId: req.body.postId,
      body: req.body.message,
    };
    comments.push(newComment);
    res.status(201).json(newUser);
  })
  .patch(() => {})
  .delete(() => {});

module.exports = router;
