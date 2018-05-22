// var express = require("express"); // should be not be needed here because of being called in other files calling this one

// var router = express.Router(); // should be not be needed here because of being called in other files calling this one

var db = require("../models");

var currentCorrectAnswer = require("../currentCorrectAnswer.js");

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
      var originalAnswerOrder = [
        dbTopic_1.answer1,
        dbTopic_1.answer2,
        dbTopic_1.answer3,
        dbTopic_1.answer4
      ];

      for (var x = 0; x < 3; x++) {
        var tempNum1, tempNum2, tempNum3, tempNum4
        if (x === 0) {
          tempNum = Math.floor(Math.random() * 4);
        }

        if (x === 1) {
          tempNum2 = tempNum1;
          while (tempNum2 === tempNum1) {
            tempNum2 = Math.floor(Math.random() * 4);
          }
        }

        if (x === 2) {
          tempNum3 = tempNum1;
          while ((tempNum3 === tempNum1) || (tempNum3 === tempNum2)) {
            tempNum3 = Math.floor(Math.random() * 4);
          }
        }

        if (x === 4) {
          tempNum4 = tempNum1;
          while ((tempNum4 === tempNum1) || (tempNum4 === tempNum2) || (tempNum4 === tempNum3)) {
            tempNum4 = Math.floor(Math.random() * 4);
          }
        }
      }

      var randomizedAnswerOrder = {
        answer1: originalAnswerOrder[tempNum1],
        answer2: originalAnswerOrder[tempNum2],
        answer3: originalAnswerOrder[tempNum3],
        answer4: originalAnswerOrder[tempNum4]
      }

      var topic1OutputObject = {
        topic_1: {
          question: dbTopic_1.question,
          answer1: randomizedAnswerOrder.answer1,
          answer2: randomizedAnswerOrder.answer2,
          answer3: randomizedAnswerOrder.answer3,
          answer4: randomizedAnswerOrder.answer4
        }
      };
      currentCorrectAnswer = dbTopic_1.correctAnswer;
      res.render("index", topic1OutputObject);
    }).catch((err) => {
      res.status(500).json({
        error: err.message
      });
    });
  });
  app.post("/api/Topic_1s", function (req, res) {
    // Create an topic1 with the data available to us in req.body
    /*console.log(req.body);
    db.Topic_1.create(req.body).then(function (dbTopic_1) {
      res.json(dbTopic_1);
    });*/
    db.Topic_1.create({
      question: req.body.question,
      answer1: req.body.answer
    })
  });
  // PUT route for updating posts
  app.put("/api/Results", function (req, res) {
    if (req.body.chodenAnswer === currentCorrectAnswer) {
      db.Results /*Post*/.update({ //req.body,
        totalCorrectPerTopic: +1 /* +1 or +0 depending on answer chosen */,
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
      }

      else {
        db.Results /*Post*/.update({ //req.body,
          totalCorrectPerTopic: +0 /* +1 or +0 depending on answer chosen */,
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
        }
    });
};
