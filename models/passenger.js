'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    static associate(models) {
      Passenger.belongsTo(models.User)
      Passenger.belongsToMany(models.Bus, {through: 'Ticket'})
      Passenger.hasMany(models.Ticket)
      
    }
    get formattedDate(){
      const newDate = this.dateOfBirth.toISOString().split('T')[0]
      return newDate
    }
  }
  
  Passenger.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    UserId : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};