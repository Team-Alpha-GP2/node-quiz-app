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
var bodyParser = require("body-parser");
var app = express();
var PORT = 5000;

var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


  
  var quizTest =[{
    Question:'Who you with?',
    answer1:'Young Money',
    answer2:'cool',
    answer3:"who knows"
   }];

   app.get("/", function(req,res){
    res.render("home");
   });

   app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
