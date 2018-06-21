'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    title: DataTypes.STRING,
    allowNull: false,
  }, {});

  Menus.associate = (models) => {
    // associations can be defined here
    Menus.belongsTo(models.Meals, {onDelete:"CASCADE", foreignKey:"mealID"});
    Menus.belongsTo(models.Users, {onDelete:"CASCADE", foreignKey:"userID"});
  
  };
  return Menus;
};