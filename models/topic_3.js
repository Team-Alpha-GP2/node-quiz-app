'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic_3 = sequelize.define('Topic_3s', {
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    correctAnswer: DataTypes.INTEGER,
    
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false
    }
  }, {});
  Topic_3.associate = function (models) {
    // associations can be defined here
  };
  return Topic_3;
};