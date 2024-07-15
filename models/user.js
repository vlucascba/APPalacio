// src/models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'local' // Puede ser 'local' o 'admin'
      }
    }, {
      tableName: 'users',
      timestamps: false
    });
  
    User.associate = (models) => {
      User.belongsTo(models.Local, { foreignKey: 'localId' });
    };
  
    return User;
  };
  