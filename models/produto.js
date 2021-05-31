'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {

    static associate(models) {
      // define association here
    }
  };
  Produto.init({
    nome: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    descricao:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    img:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue:'semfoto'
    },
    promocao:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
    desconto:{
      type:DataTypes.DECIMAL(3,2),
      allowNull:true,
    } ,
    preco: {
      type:DataTypes.DECIMAL(12,2),
      allowNull:false,
    },
    novopreco:{
      type: DataTypes.DECIMAL(12,2),
      allowNull:true,
    }
  }, {
    sequelize,
    tableName:'produtos',
    modelName: 'Produto',
  });
  return Produto;
};