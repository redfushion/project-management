'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
            type: DataTypes.STRING,
            allowNull: false
    },
    description:{ 
            type:DataTypes.STRING, 
            allowNull: false
    },
    owner:{ 
            type:DataTypes.STRING
    },
    deadline:{ 
            type:DataTypes.DATE,
            allowNull: false
    },
    status:{ 
            type:DataTypes.INTEGER,
            allowNull: false
    }
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADA'
    });

    Project.hasMany(models.Objetive, {
      foreignKey: 'projectId',
      onDelete: 'CASCADA'
    });
  };
  return Project;
};