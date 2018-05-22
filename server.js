var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public")); // needed with the public facing folders
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req,res){
    res.render("home");
});

// require("./controllers/quizController.js")(app);  // leaving in incase we turn the quizController back on as the one for results

app.get("/quizForm", function(req,res){
    res.render("quizForm");
});
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at http://localhost:" + PORT);
    });
});