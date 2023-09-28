'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Bus)
      Ticket.belongsTo(models.Passenger)
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