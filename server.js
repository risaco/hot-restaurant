var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  function Customer (customerName, phoneNumber, customerEmail, customerID) {
      this.customerName = customerName;
      this.phoneNumber = phoneNumber;
      this.customerEmail = customerEmail;
      this.customerID = customerID;
  }

  var customerArray = [];
  var reservation = [];
  var waitList = [];

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

