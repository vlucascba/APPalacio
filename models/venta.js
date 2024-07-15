// src/models/venta.js
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    localId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Local',
        key: 'id'
      }
    }
  }, {
    tableName: 'venta',
    timestamps: false
  });

  Venta.associate = (models) => {
    Venta.belongsTo(models.Local, { foreignKey: 'localId' });
  };

  return Venta;
};
