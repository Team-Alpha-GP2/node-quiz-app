'use strict';
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
      type: DataTypes.DECIMAL
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    }
  }, {
  });
  Results.associate = function (models) {
    // associations can be defined here
  };
  return Results;
};