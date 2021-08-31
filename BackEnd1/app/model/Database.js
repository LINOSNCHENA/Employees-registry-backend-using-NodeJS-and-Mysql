"user strict";
var mysql = require("mysql");

// Profile Two: Password Authentification database connection

var connection1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Monze2020",
  database: "presly",
});
module.exports = connection1;

// Profile One: Data manipulation and storage  database connection

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Monze2020",
  database: "presly",
});
module.exports = connection;
