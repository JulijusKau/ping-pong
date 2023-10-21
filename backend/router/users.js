const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.get("/users", verifyToken, (req, res) => {
  dbConnection.execute(
    "SELECT id, username, highscore FROM users ORDER BY highscore DESC LIMIT 10",
    (err, result) => defaultCallback(err, result, res)
  );
});

router.get("/users/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  dbConnection.execute("SELECT * FROM users WHERE id=?", [id], (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.put("/users/:id", verifyToken, (req, res) => {
  const { body } = req;
  const { id } = req.params;

  dbConnection.execute(
    "UPDATE users SET highscore=? WHERE id=? AND ? > highscore",
    [body.highscore, id, body.highscore],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
