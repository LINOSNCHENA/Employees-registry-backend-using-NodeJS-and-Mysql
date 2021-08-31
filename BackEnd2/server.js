const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const data4Workers = require("./app/xworkers");
const dataContact = require("./app/xcontacts");
const dataFamily = require("./app/xfamily");
const data4Smart = require("./app/xsmart");

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  //  SECURITY LUMUMBA
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (request, response) => {
  response.json({ info: " WELCOME TO ORDERS PORTAL 2019" });
});

app.get("/full/accounts", data4Workers.getEmployees); // Route #1
app.get("/full/accounts/:id1", data4Workers.getEmployee); // Route #2
app.delete("/full/accounts/:id1", data4Workers.deleteEmployee); // Route #3
app.put("/full/accounts/:id", data4Workers.updateEmployee); // Route #4
app.post("/full/accounts", data4Workers.createEmployee); // Route #5

app.get("/xcontacts", dataContact.getContacts);
app.get("/xcontacts/:id2", dataContact.getContact);
app.delete("/xcontacts/:id2", dataContact.deleteContact);
app.put("/xcontacts/:id2", dataContact.updateContact);
app.post("/xcontacts/:d1", dataContact.createContact);

app.get("/xfamily", dataFamily.getFamilys);
app.get("/xfamily/:id3", dataFamily.getFamily);
app.delete("/xfamily/:id3", dataFamily.deleteFamily);
app.put("/xfamily/:id3", dataFamily.updateFamily);
app.post("/xfamily/:d1", dataFamily.createFamily);

app.get("/full/smarts", data4Smart.getEmployees);
app.get("/full/smarts/:id1", data4Smart.getEmployee);
app.delete("/full/smarts/:id1", data4Smart.deleteEmployee);
app.put("/full/smarts/:id", data4Smart.updateEmployee);
app.post("/full/smarts", data4Smart.createEmployee);

app.listen(port, () => {
  console.log(`Backend #2, Postgresql server is listenning on port ${port}.`);
});
