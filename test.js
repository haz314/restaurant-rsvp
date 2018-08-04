// ** Dependencies **
const bodyParser = require('body-parser');
const path = require('path');
const express = require("express");

// ** Setup Express **
const app = express();
const PORT = process.env.PORT || 3000;

// ** SETUP Express data parsing **
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ** Variable Library
let numTables = 5;
let tables = [
    {
        name: null,
        phone: null,
        email: null,
        uniqueID: null,
        tableID: 1
    }
];
let waitList = [
    {
        name: null,
        phone: null,
        email: null,
        uniqueID: null,
        waitID: 1
    }
];

// ** GET Routes **
// Create GET home route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
// Create GET make route
app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});
// Create GET view route
app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
// Displays all tables route
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
// Displays all wait list route
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// ** POST Routes ** 
// Create POST route for new table
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    let newTable = req.body;

    console.log(newTable);

    // Check for open tables
    if (tables.length < numTables) {
        // Add reservation
        tables.push(newTable);
        res.json(newTable);
    } else {
        // Wait reservation
        waitList.push(newTable);
        res.json(newTable);
    }
});

// ** Start server to begin listening **
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
