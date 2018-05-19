'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topicName: {
        type: Sequelize.STRING
      },
      totalTakenPerTopic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      totalCorrectPerTopic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      totalAverageCorrectPerTopic: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 100.00
      },
      createdAt: {
        type: Sequelize.DATE(3),
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Results');
  }
};
