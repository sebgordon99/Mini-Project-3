"use strict";
let Models = require("../models"); // matches index.js

const createAPIUserPost = async (req, res) => {
  try {
    //fetch disney API
    const response = await fetch("https://api.disneyapi.dev/character");
    const json = await response.json();

    const characters = json.data;
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const imageUrl = randomCharacter.imageUrl;

    const newPost = new Models.Post({
      title: req.body.title,
      description: req.body.description,
      image_url: imageUrl,
      author: req.params.id
    });

    const saved = await newPost.save();

    res.send({ result: 200, data: saved });

  } catch (err) {
    console.error(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

module.exports = {
  createAPIUserPost,
};