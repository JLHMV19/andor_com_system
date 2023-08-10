const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');
const bcrypt = require('bcrypt');

const Doctor = sequelize.define('doctores', {
  doctorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombreDoctor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarios_idusuarios: {
    type: DataTypes.STRING, // Cambiado a VARCHAR en lugar de INT
    allowNull: false,
  },
  cedulaprofesional: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Doctor;

