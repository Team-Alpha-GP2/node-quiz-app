'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic_3 = sequelize.define('Topic_3', {
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    correctAnswer: DataTypes.INTEGER
  }, {});
  Topic_3.associate = function(models) {
    // associations can be defined here
  };
  return Topic_3;
};