var express = require("express");
// var sequalize = require("sequalize");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var exprhbs = require("express-handlebars");
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./controllers/quizController.js")(app);
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at http://localhost:" + PORT);
    });
});