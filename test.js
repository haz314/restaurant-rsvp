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

// ** Start server to begin listening **
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
