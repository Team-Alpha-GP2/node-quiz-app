var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exprhbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quizForm", function (req, res) {
    res.sendFile(path.join(__dirname, "quizForm.html"));
});

// app.listen(PORT, function () {
    // console.log("App listening on PORT " + PORT);
// });
// var sequalize = require("sequalize");

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at http://localhost:" + PORT);
    });
});
