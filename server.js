///** Dependencies
/**
 * var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
 */

///** Setup Express
/**
 * var app = express();
var PORT = 3000;
 */

///** Express data parsing
/**
 * app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 */

///** Restaurant data
/**
 * ARRAY OF OBJECTS[{
 *  name, phone, email, id}]
 * Two of them
 * reservations
 *  - let numTables = 5;
 * then go waitlist 
 */

///** Routes
// 1. Create GET routes
// root aka home
// tables aka view current tables
// reserve aka make reservation
// button points to end point

/**
 * // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});
 */


// 2. Create POST routes
// Create New reservation - takes in JSON input
/**
 * Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
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
 */

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
