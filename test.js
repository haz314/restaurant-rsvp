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
app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});
// Create GET view route
app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
// Displays all characters route
app.get("/api/tables", function (req, res) {
    return res.json(characters);
});

// ** POST Routes ** 
// Create POST route for new table
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

// ** Start server to begin listening **
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
