const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const Asistente = sequelize.define('asistentes', {
  idasistentes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombreAsistente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctores_doctorId: {
    type: DataTypes.STRING, // Cambiado a VARCHAR en lugar de INT
    allowNull: false,
  },
  usuarios_idusuarios1: {
    type: DataTypes.STRING, // Cambiado a VARCHAR en lugar de INT
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Asistente;

