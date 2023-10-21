const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.post("/register", (req, res) => {
  const { body } = req;
  const { username, password, highscore } = body;

  const hashedPassword = bcrypt.hashSync(password, 12);

  dbConnection.execute(
    "INSERT INTO users (username, password, highscore) VALUES (?, ?, ?)",
    [username, hashedPassword, highscore],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.post("/login", (req, res) => {
  const { body } = req;
  const { username, password } = body;

  const incorrectCredentialResponse = () => {
    res.json({
      message: "Incorrect username or password",
    });
  };

  if (!username || !password) {
    incorrectCredentialResponse();
    return;
  }

  dbConnection.execute(
    "SELECT * FROM users WHERE username=?",
    [username],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialResponse();
      } else {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        const { id, username } = user;

        if (isPasswordCorrect) {
          const token = jwt.sign({ id, username }, process.env.JWT_SECRET);
          res.json({
            message: "Successfully logged in!",
            token,
          });
        } else {
          incorrectCredentialResponse();
        }
      }
    }
  );
});

router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
