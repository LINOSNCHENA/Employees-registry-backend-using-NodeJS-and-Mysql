require("dotenv").config();
require("./model/bookingData");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("AT-Home connection #1 successful!"));

const administrators = require("./validation/validator");

//////////////////////////////////////////////// REGISTER
app.post("/signup", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./model/adminConnected");
  dbFunctions.createUser(req, res);
});

app.post("/login", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./model/adminConnected");
  dbFunctions.loginUser(req, res);
});

const PORT1 = process.env.PORT1 || 8080;
app.listen(PORT1, () =>
  console.log(`BackEnd3 -ADMINDATA- is listening on Port-1 : ${PORT1}`)
);
