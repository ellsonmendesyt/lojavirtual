'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrosel extends Model {
 
    static associate(models) {
      // define association here
    }
  };
  Carrosel.init({
    img: DataTypes.STRING,
    titulo: DataTypes.STRING,
    subtitulo: DataTypes.STRING
  }, {
    sequelize,
    tableName:'carroseis',
    modelName: 'Carrosel',
  });
  return Carrosel;
};