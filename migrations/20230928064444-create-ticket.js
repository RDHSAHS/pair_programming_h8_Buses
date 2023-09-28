'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      seatNumber: {
        type: Sequelize.STRING
      },
      departureDate: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.STRING
      },
      BusId: {
        type: Sequelize.INTEGER,
        references : {
          model :'Buses',
          key : 'id'
        }
      },
      PassengerId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Passengers',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tickets', {});
  }
};