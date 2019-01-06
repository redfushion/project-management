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
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Objective, {
      foraingKey: 'objectiveId',
      onDelete: 'CASCADE'
    });
    Task.belongsTo(models.User,{
      foraingKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};