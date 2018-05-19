var express = require("express");

var router = express.Router();

var db = require("../models");


    module.exports = function(app) {

        // GET route for getting all of the Topic_3s
        app.get("/api/Topic_3s", function(req, res) {
          // findAll returns all entries for a table when used with no options
          db.Topic_3.findAll({}).then(function(dbTopic_3) {
            // We have access to the Topic_3s as an argument inside of the callback function
            res.json(dbTopic_3);
          });
          app.get("/api/Topic_3s/:id", function(req, res) {
            // Find one Topic_3 with the id in req.params.id and return them to the user with res.json
            db.Topic_3.findOne({
              where: {
                id: req.params.id
              }
            }).then(function(dbTopic_3) {
              res.json(dbTopic_3);
            });
          });
          app.post("/api/Topic_3s", function(req, res) {
            // Create an topic3 with the data available to us in req.body
            console.log(req.body);
            db.Topic_3.create(req.body).then(function(dbTopic_3) {
              res.json(dbTopic_3);
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
