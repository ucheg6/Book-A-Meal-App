'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    quantity:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,
    amount:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,
    status: {
      type: DataTypes.ENUM('delivered', 'cancelled', 'pending'),
      defaultValue: 'pending',
    },
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Meals, {onDelete:"CASCADE", foreignKey:"mealId"});
    Orders.belongsTo(models.Users, {onDelete:"CASCADE", foreignKey:"userId"});
   
    
  };
  return Orders;
};