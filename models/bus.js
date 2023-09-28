'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bus.belongsToMany(models.Passenger, { through: 'Ticket' });
      Bus.hasMany(models.Ticket)
    }
    
  }
  Bus.init({
    name: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
    category: DataTypes.STRING,
    destination: DataTypes.STRING,
    departure: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    maxSeat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};