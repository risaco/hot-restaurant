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

function Customer(customerName, phoneNumber, customerEmail, customerID) {
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.customerEmail = customerEmail;
    this.customerID = customerID;
}

// var testCustomer = new Customer("Testing", "Testing", "Testing", "Testing");

var customerArray = [];
var reservation = [];
var waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/server.js", function(req, res) {
    res.sendFile(path.join(__dirname, "server.js"));
});

app.get("/api/:tables?", function(req, res) {
    var chosen = req.params.reservation;

    return res.json(reservation);
});

app.post("/reserve", function(req, res) {
    var newCustomer = req.body;
    // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCustomer);

    customerArray.push(newCustomer);

    if (customerArray.length < 5) {
        reservation.push(newCustomer);
        console.log("Reservation confirmed!");
    } else {
        waitList.push(newCustomer);
        console.log("Sorry, reservations are full. You have been added to the waitlist.")
    }

    res.json(newCustomer);
});