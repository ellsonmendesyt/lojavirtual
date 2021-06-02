'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      subtitulo: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      img: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      noCarro: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      preco: {
        type: Sequelize.DECIMAL(5,2),
        allowNull:false,
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
    await queryInterface.dropTable('Produtos');
  }
};