'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fullName:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,

    email:{
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,

    },
    password:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    role:{
      type: DataTypes.ENUM,
      values:['customer', 'caterer'],
      allowNull:false
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here

    Users.hasMany(models.Orders, {onDelete:"CASCADE", foreignKey:"userId"});
    Users.hasMany(models.Menus, {onDelete:"CASCADE", foreignKey:"userId"});
    Users.hasMany(models.Meals, {onDelete:"CASCADE", foreignKey:"userId"});


  };
  return Users;
};