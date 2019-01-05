'use strict';
module.exports = (sequelize, DataTypes) => {
  const Objective = sequelize.define('Objective', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deadLine: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {});
  Objective.associate = function(models) {
    Objective.hasMany(models.Task, {
     foreignKey: 'objectiveId',
     as: 'objectiveTask'
    });
    Objective.belongsTo(models.Project, {
       foreignKey: 'projectId',
       onDelete: 'CASCADE'
     });
     Objective.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

  };
  return Objective;
};
