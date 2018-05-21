// var express = require("express"); // should be not be needed here because of being called in other files calling this one

// var router = express.Router(); // should be not be needed here because of being called in other files calling this one

var db = require("../models");


module.exports = function (app) {

  // GET route for getting all of the Topic_1s
  app.get("/api/Topic_1s", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Topic_1.findAll({}).then(function (dbTopic_1) {
      // We have access to the Topic_1s as an argument inside of the callback function
      res.json(dbTopic_1);
      /* var topicOneOuputObject = {
          topic_1: dbTopic_1
      };
      res.render( */
    });
  });
  app.get("/api/Topic_1s/:id", function (req, res) {
    // Find one Topic_1 with the id in req.params.id and return them to the user with res.json
    db.Topic_1.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTopic_1) {
      // res.json(dbTopic_1); // based on what I have from sequelizedBurger should look like this:
      var topic1OutputObject = {
        topic_1: dbTopic_1
      };
      res.render("index", topic1OutputObject);
    }).catch((err) => {
      res.status(500).json({
        error: err.message
      });
    });
  });
  app.post("/api/Topic_1s", function (req, res) {
    // Create an topic1 with the data available to us in req.body
    console.log(req.body);
    db.Topic_1.create(req.body).then(function (dbTopic_1) {
      res.json(dbTopic_1);
    });
  });
  // PUT route for updating posts
  app.put("/api/Results", function (req, res) {
    db.Results /*Post*/.update({ //req.body,
      totalCorrectPerTopic: "" /* +1 or +0 depending on answer chosen */,
      totalTakenPerTopic: +1
    },
      {
        where: {
          // id: req.params /*body*/ .id, // specific row id will be determined by the order in which each topic is initially chosen
          topicName: "" /*topic_1 name*/
        }
      /*}).then(function (dbPost) {
        var resultsOutputObject = {
          results: dbPost
        };*/
      }).catch((err) => {
        res.status(500).json({
          error: err.message
        });
        res.json(dbPost);
      });
  });
};
