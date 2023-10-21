const mysql = require("mysql2");

const mysqlConfigBase = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const dbConnection = mysql.createConnection({
  ...mysqlConfigBase,
  database: "",
});

dbConnection.query("CREATE DATABASE IF NOT EXISTS ping_pong", (err) => {
  if (err) throw err;
  console.log("Database ping_pong created");

  dbConnection.query("USE ping_pong", (err) => {
    if (err) throw err;

    const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT NOT NULL AUTO_INCREMENT UNIQUE,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      highscore INT NOT NULL,
      primary key (id),
      unique key (username)
    )
    `;
    dbConnection.query(usersTableQuery, (err) => {
      if (err) throw err;
      console.log("Users table created");
    });
  });
});

module.exports = {
  dbConnection,
};
