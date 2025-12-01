"use strict";
let Models = require("../models"); // matches index.js

const getUserComments = (req, res) => {
  Models.Comment.find({ userId: req.params.uid })
    .populate({ path: "author" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUserComment = (req, res) => {
  new Models.Comment(req.body)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUserComment = (req, res) => {
  console.log(req.body);
  Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUserComment = (req, res) => {
  Models.Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUserComments,
  createUserComment,
  updateUserComment,
  deleteUserComment,
};
