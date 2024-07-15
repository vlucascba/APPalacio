// src/models/local.js
module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'local',
    timestamps: false
  });

  Local.associate = (models) => {
    Local.hasMany(models.Venta, { foreignKey: 'localId' });
  };

  return Local;
};
