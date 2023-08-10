const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const Paciente = sequelize.define('pacientes', {
  idpacientes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombrepacientes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctores_doctorId: {
    type: DataTypes.STRING, // Cambiado a VARCHAR en lugar de INT
    allowNull: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.STRING, // Cambiado a VARCHAR en lugar de INT
    allowNull: true,
  },
  RFCpaciente: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  alegias: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Paciente;
