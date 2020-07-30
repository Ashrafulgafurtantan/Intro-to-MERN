const express = require("express");
const User = require("../models/blogPost");

const router = express.Router();

router.get("/", function (req, res) {
  User.find(function (err, blacks) {
    if (err) {
      console.log(err);
    } else {
      for (var i = 0; i < blacks.length; i++) {
        console.log(blacks[i].title);
      }
      res.json(blacks);
    }
  });
});
router.get("/name", function (req, res) {
  const data = {
    username: "Gafur",
    age: 39,
  };
  res.json(data);
});

router.post("/save", function (req, res) {
  console.log("body = ", req.body);
  const newUser = new User(req.body);
  newUser.save();
  res.json({
    msg: "We reseved your message",
  });
});

module.exports = router;
