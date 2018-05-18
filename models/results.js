'use strict';

var currentAverage = function(correct, taken) {
  var average;
  if (!((correct === 0) && (taken === 0))) {
    return average = correct1 / taken1;
  }
  else {
    return 100.00;
  }
};
// var currentAverage2 = function(correct2, taken2) {
//   var average;
//   return average = correct2 / taken2;
// };
// var currentAverage3 = function(correct3, taken3) {
//   var average;
//   return average = correct3 / taken3;
// }
module.exports = (sequelize, DataTypes) => {
  var Results = sequelize.define('Results', {
    topicName: DataTypes.STRING,
    totalTakenPerTopic: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalCorrectPerTopic: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalAverageCorrectPerTopic: {
      type: DataTypes.DECIMAL,
      defaultValue: currentAverage(totalCorrectPerTopic, totalTakenPerTopic)
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
  Results.associate = function (models) {
    // associations can be defined here
  };
  return Results;
};