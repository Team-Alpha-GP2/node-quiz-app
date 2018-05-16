var db = require("../models");
var avrge = require("../calcAverage");

// can figure out the exact setup but this is hopefully a start
module.exports = function (app) {
    /*app.put("/api/quizs/:id"), function (req, res) {
        avrge = calsAverage(totalCorrectPerTopic / totalTakenPerTopic);
        db.Results.update({
            totalTakenPerTopic: totalTakenPerTopic++, // increment the total taken
            totalCorrectPerTopic: totalCorrectPerTopic++, // increment the total correct as correctly answered
            totalAverageCorrectPerTopic: avrge
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            var quizOutputObject = {
                quizzes: data
            };
            res.render("<resultspage>", quizOutputObject);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            });
        });
    });
    */
}