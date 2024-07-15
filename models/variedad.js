// src/models/variedad.js
module.exports = (sequelize, DataTypes) => {
  const Variedad = sequelize.define('Variedad', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'variedad',
    timestamps: false
  });

  Variedad.associate = (models) => {
    Variedad.belongsTo(models.Local, { foreignKey: 'localId' });
  };

  return Variedad;
};
