const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("../models/User");

const users = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "npm" },
  { id: 3, name: "yunhoe" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find(function (err, users) {
    if (err) return res.status(500).send({ error: "db failure" });
    res.json(users);
  });
});

router.get("/:id/:name", function (req, res, next) {
  console.log(req.params);
  let user = users.find((u) => u.id === parseInt(req.params.id));
  res.send(user);
});

module.exports = router;
