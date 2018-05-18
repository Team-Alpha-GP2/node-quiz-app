'use strict';
module.exports = (sequelize, DataTypes) => {
  var Results = sequelize.define('Results', {
    topicName: DataTypes.STRING,
    totalTakenPerTopic: DataTypes.INTEGER,
    totalCorrectPerTopic: DataTypes.INTEGER,
    totalAverageCorrectPerTopic: DataTypes.DECIMAL
  }, {});
  Results.associate = function(models) {
    // associations can be defined here
  };
  return Results;
};