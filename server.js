var express = require("express");
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
    res.render("quizForm");
   });

   app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });