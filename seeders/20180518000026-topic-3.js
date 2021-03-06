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
    /* return queryInterface.bulkInsert('Topic_3s', [
      {
        question: "tempQuestion1",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion2",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion3",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion4",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion5",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion6",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion7",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion8",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion9",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "tempQuestion10",
        answer1: "tempAnswer1",
        answer2: "tempAnswer2",
        answer3: "tempAnswer3",
        answer4: "tempAnswer4",
        correctAnswer: "tempAnswer4",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]) */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Topic_3s', null, {});
  }
};
