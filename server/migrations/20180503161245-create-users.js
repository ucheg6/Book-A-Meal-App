'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName:{
        type:Sequelize.STRING,
        allowNull:false,
      } ,
  
      email:{
        type: Sequelize.STRING,
        unique:true,
        allowNull:false,
  
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false,
      },
  
      role:{
        type: Sequelize.ENUM,
        values:['customer', 'caterer'],
        allowNull:false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};