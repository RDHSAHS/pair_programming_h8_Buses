'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/ticket.json', 'utf-8'))
    const mappedData = data.map( el =>{
      return {
        code: el.code,
        price: el.price,
        seatNumber: el.seatNumber,
        departureDate: el.departureDate,
        time: el.time,
        BusId: el.BusId,
        PassengerId: el.PassengerId,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    })
    return queryInterface.bulkInsert('Tickets', mappedData, {})
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
    return queryInterface.bulkDelete('Tickets', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
