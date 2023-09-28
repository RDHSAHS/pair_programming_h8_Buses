'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.belongsTo(models.User)
      Passenger.belongsToMany(models.Bus, {through: 'Ticket'})
      Passenger.hasMany(models.Ticket)
      
    }
    get formattedDate(){
      const newDate = this.dateOfBirth.toISOString().split('T')[0]
      // console.log(newDate);
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