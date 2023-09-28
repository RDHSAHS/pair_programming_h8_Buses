'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/bus.json', 'utf-8'))
    const mappedData = data.map( el =>{
      return {
        name: el.name,
        plateNumber: el.plateNumber,
        category: el.category,
        destination: el.destination,
        departure: el.departure,
        imageURL: el.imageURL,
        maxSeat: el.maxSeat,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    })
    return queryInterface.bulkInsert('Buses', mappedData, {})
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
    return queryInterface.bulkDelete('Buses', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
