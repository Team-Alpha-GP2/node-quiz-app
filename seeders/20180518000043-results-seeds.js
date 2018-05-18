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
      //  totalAverageCorrectPerTopic: 100.00
       createdAt: Sequelize.DATE, // new Date,
       updatedAt: Sequelize.DATE
    },
     {
       topicName: "Topic 2",
       totalTakenPerTopic: 0,
       totalCorrectPerTopic: 0
      //  totalAverageCorrectPerTopic: 100.00
      //  createdAt: Sequelize.DATE,
      //  updatedAt: Sequelize.DATE
    },
     {
       topicName: "Topic 3",
       totalTakenPerTopic: 0,
       totalCorrectPerTopic: 0
      //  totalAverageCorrectPerTopic: 100.00
      //  createdAt: Sequelize.DATE,
      //  updatedAt: Sequelize.DATE
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
