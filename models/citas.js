const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const Cita = sequelize.define('citas', {
  idcitas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechacitas: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pacientes_idpacientes: {
    type: DataTypes.STRING, // Cambiado a varchar
    allowNull: true, // Puedes ajustar esto según tu lógica
  },
  doctores_doctorId: {
    type: DataTypes.STRING, // Cambiado a varchar
    allowNull: true, // Puedes ajustar esto según tu lógica
  },
}, {
  sequelize,
  modelName: 'Cita',
  timestamps: false
});

module.exports = Cita;

