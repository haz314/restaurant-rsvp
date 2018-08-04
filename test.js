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


//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all characters
  app.get("/api/tables", function(req, res) {
    return res.json(characters);
  });
  
  // Create New Reservation - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    characters.push(newcharacter);
  
    res.json(newreservation);
  });










// ** Start server to begin listening **
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
