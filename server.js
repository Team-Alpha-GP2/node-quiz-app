var express = require("express");
var exprhbs = require("express-handlebars");
// var sequalize = require("sequalize");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at http://localhost:" + PORT);
    });
});