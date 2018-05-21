'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic_2 = sequelize.define('Topic_2s', {
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    answer4: DataTypes.STRING,
    correctAnswer: {
      type: DataTypes.INTEGER/*,
      defaultValue: {
        gte: 1,
        lte: 4
      }*/
    },
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
  Topic_2.associate = function (models) {
    // associations can be defined here
  };
  return Topic_2;
};
