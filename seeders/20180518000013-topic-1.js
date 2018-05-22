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
    /* return queryInterface.bulkInsert('Topic_1s', [
      {
        question: "What type of game system is Pathfinder RPG?",
        answer1: "Pen & Paper",
        answer2: "PC",
        answer3: "Figurines",
        answer4: "GURPs",
        correctAnswer: "Pen & Paper",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What type of game were the old Fallout games?",
        answer1: "Pen & Paper",
        answer2: "XBox",
        answer3: "ARPG",
        answer4: "RPG",
        correctAnswer: "RPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What type of game have the newer Fallout games been?",
        answer1: "Pen & Paper",
        answer2: "RPG",
        answer3: "ARPG",
        answer4: "Casual",
        correctAnswer: "ARPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "How many Might and Magic (Not Heroes) games have there been?",
        answer1: "7",
        answer2: "10",
        answer3: "15",
        answer4: "20",
        correctAnswer: "10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What type of game is an ARPG?",
        answer1: "Strategy",
        answer2: "Role-Playing",
        answer3: "Action Role-Playing",
        answer4: "Adventure Role-Playing",
        correctAnswer: "Action Role-Playing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Which game system does the Baldur's Gate series use?",
        answer1: "Pathfinder",
        answer2: "2nd Edition AD&D",
        answer3: "ShadowRun",
        answer4: "GURPs",
        correctAnswer: "2nd Edition AD&D",
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
        correctAnswer: 2,
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
    return queryInterface.bulkDelete('Topic_1s', null, {});
  }
};
