let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

//lab 4 microservice route----------------------------------------------------------------

router.post("/create/lab4", (req, res) => {
  Controllers.lab4Controller.createAPIUserPost(req, res);
});

module.exports = router;