'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    }
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Task.associate = function(models) {
    Task.beLongTo(models.Objetive, {
      foraingKey: 'objectiveId',
      onDelete: 'CASCADE'
    });
    Task.beLongTo(models.User,{
      foraingKey: 'userId',
      as: 'CASCADE'
    });
  };
  return Task;
};