var path = require("path");

module.exports = function (app) {
    app.get("quizForm", function (req, res) {
        res.sendFile(path.join(__dirname + '/../views/layouts/home.handlebars'));
    });
};