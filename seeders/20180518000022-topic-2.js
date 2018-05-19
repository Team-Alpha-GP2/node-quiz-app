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
    return queryInterface.bulkInsert('Topic_2s', [
      {
        question: "tempQuestion1",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 1,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion2",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 2,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion3",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 3,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion4",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 4,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion5",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 1,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion6",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 2,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion7",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 1,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion8",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 2,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion9",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 3,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      },
      {
        question: "tempQuestion10",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: 4,
        createdAt: new Date(), //Sequelize.DATE,
        updatedAt: new Date() //Sequelize.NOW
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
