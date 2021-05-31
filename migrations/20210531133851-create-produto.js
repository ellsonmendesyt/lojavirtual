'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      descricao:{
        type:Sequelize.TEXT,
        allowNull:false,
      },
      img:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:'semfoto',
      },
      promocao:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
      },
      desconto:{
        type:Sequelize.DECIMAL(3,2),
        allowNull:true,
      } ,
      preco: {
        type:Sequelize.DECIMAL(12,2),
        allowNull:false,
      },
      novopreco:{
        type: Sequelize.DECIMAL(12,2),
        allowNull:true,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};