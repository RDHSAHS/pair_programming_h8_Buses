'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      Ticket.belongsTo(models.Passenger)
      Ticket.belongsTo(models.Bus)
    }
  }
  Ticket.init({
    code: DataTypes.STRING,
    price: DataTypes.INTEGER,
    seatNumber: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    time: DataTypes.STRING,
    BusId: DataTypes.INTEGER,
    PassengerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};