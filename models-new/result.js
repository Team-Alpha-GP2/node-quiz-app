'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    topicName: DataTypes.STRING,
    totalCorrectPerTopic: DataTypes.INTEGER,
    totalTakenPerTopic: DataTypes.INTEGER,
    totalAverageCorrectPerTopic: DataTypes.DECIMAL
  }, {});
  Result.associate = function(models) {
    // associations can be defined here
  };
  return Result;
};