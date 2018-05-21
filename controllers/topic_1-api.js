var express = require("express");

var router = express.Router();

var db = require("../models");


    module.exports = function(app) {

        // GET route for getting all of the Topic_1s
        app.get("/api/Topic_1s", function(req, res) {
          // findAll returns all entries for a table when used with no options
          db.Topic_1.findAll({}).then(function(dbTopic_1) {
            // We have access to the Topic_1s as an argument inside of the callback function
            res.json(dbTopic_1);
          });
          app.get("/api/Topic_1s/:id", function(req, res) {
            // Find one Topic_1 with the id in req.params.id and return them to the user with res.json
            db.Topic_1.findOne({
              where: {
                id: req.params.id
              }
            }).then(function(dbTopic_1) {
              res.json(dbTopic_1);
            });
          });
          app.post("/api/Topic_1s", function(req, res) {
            // Create an topic1 with the data available to us in req.body
            console.log(req.body);
            db.Topic_1.create(req.body).then(function(dbTopic_1) {
              res.json(dbTopic_1);
            });
          });
         // PUT route for updating posts
  app.put("/api/Results", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
        
        })}
