const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = 5000;

const usersRouter = require("./router/users.js");
const authenticationRouter = require("./router/authentication");

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(authenticationRouter);

app.listen(port, () => {
  console.log(`Congratulations your Server is running on port: ${port}`);
});
