'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    nome: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    avatar:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    senha:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'usuarios',
    modelName: 'Usuario',
  });
  return Usuario;
};