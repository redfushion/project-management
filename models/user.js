'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Objetive, {
      foreignKey : 'userId',
      onDelete: 'CASCADA'
    });
    User.hasMany(models.Task, {
      foreignKey : 'userId',
      onDelete: 'CASCADA'
    });
    User.hasMany(models.Project, {
      foreignKey : 'userId',
      onDelete: 'CASCADA'
    });
  };
  return User;
};