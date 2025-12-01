"use strict";
let Models = require("../models"); // matches index.js

const getUserPosts = (req, res) => {
  // finds all posts for a given user and populates with user details
  Models.Post.find({ userId: req.params.uid })
    .populate({ path: "author" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUserPost = (req, res) => {
  new Models.Post({ ...req.body, author: req.params.id })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUserPost = (req, res) => {
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUserPost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUserPosts,
  createUserPost,
  updateUserPost,
  deleteUserPost,
};
