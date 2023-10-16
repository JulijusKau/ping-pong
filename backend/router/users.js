const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.get("/users", verifyToken, (req, res) => {
  dbConnection.execute("SELECT * FROM users", (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.get("/users/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  dbConnection.execute("SELECT * FROM users WHERE id=?", [id], (err, result) =>
    defaultCallback(err, result, res)
  );
});

module.exports = router;
