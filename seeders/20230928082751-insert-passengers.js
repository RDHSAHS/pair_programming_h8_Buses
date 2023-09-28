'use strict';
const fs =require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/passenger.json', 'utf-8'))
    const mappedData = data.map( el =>{
      return {
        firstName: el.firstName,
        lastName: el.lastName,
        dateOfBirth: el.dateOfBirth,
        UserId: el.UserId,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    })
    return queryInterface.bulkInsert('Passengers', mappedData, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Passengers', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
