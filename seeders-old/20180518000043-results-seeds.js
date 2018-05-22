'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Results", [
      {
        topicName: "Topic 1",
        totalTakenPerTopic: 0,
        totalCorrectPerTopic: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Topic 2",
        totalTakenPerTopic: 0,
        totalCorrectPerTopic: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Topic 3",
        totalTakenPerTopic: 0,
        totalCorrectPerTopic: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
        timestamps: true
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Results', null, {});
  }
};
