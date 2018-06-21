'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    title:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    description:{
     type: DataTypes.STRING,
      allowNull:false,
    } ,
    price:{
     type: DataTypes.DECIMAL,
      allowNull:false,
    },
    imgUrl:{
     type: DataTypes.STRING,
     allowNull:false,

    } 
  }, {});
  Meals.associate = function(models) {
    // associations can be defined here
    Meals.belongsTo(models.Users, {onDelete:"CASCADE", foreignKey:"userId"});
    Meals.hasMany(models.Menus, {onDelete:"CASCADE", foreignKey:"mealId"});
    Meals.hasMany(models.Orders, {onDelete:"CASCADE", foreignKey:"mealId"});
  
  };
  return Meals;
};