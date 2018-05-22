'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic_2 = sequelize.define('Topic_2', {
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    correctAnswer: DataTypes.INTEGER,
    operatorsAliases: false
  }, {});
  Topic_2.associate = function(models) {
    // associations can be defined here
  };
  return Topic_2;
};