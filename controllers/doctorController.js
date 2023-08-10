const Doctor = require('../models/doctor');

const doctoresController = {
  crearDoctor: async (req, res) => {
    try {
      // Obtener los datos del formulario
      const { nombreDoctor, especialidad, cedulaprofesional, usuarios_idusuarios } = req.body;

      // Crear el registro en la tabla de doctores
      const nuevoDoctor = await Doctor.create({
        nombreDoctor,
        especialidad,
        cedulaprofesional,
        usuarios_idusuarios,
      });

      res.status(201).json(nuevoDoctor);
    } catch (error) {
      console.log('Error en server', error);
      res.status(500).json({ error: 'Error en la creación del doctor.' });
    }
  },

  obtenerDoctores: async (req, res) => {
    try {
      const doctores = await Doctor.findAll();
      res.json(doctores);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista de doctores.' });
    }
  },

  obtenerDoctor: async (req, res) => {
    const doctorId = req.params.id;
    try {
      const doctor = await Doctor.findByPk(doctorId);
      if (doctor) {
        res.json(doctor);
      } else {
        res.status(404).json({ error: 'Doctor no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la información del doctor.' });
    }
  },

  actualizarDoctor: async (req, res) => {
    const doctorId = req.params.id;
    try {
      const [updatedRows] = await Doctor.update(req.body, {
        where: { doctorId: doctorId },
      });
      if (updatedRows > 0) {
        res.json({ message: 'Doctor actualizado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Doctor no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la información del doctor.' });
    }
  },

  eliminarDoctor: async (req, res) => {
    const doctorId = req.params.id;
    try {
      const deletedRows = await Doctor.destroy({
        where: { doctorId: doctorId },
      });
      if (deletedRows > 0) {
        res.json({ message: 'Doctor eliminado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Doctor no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el doctor.' });
    }
  },
};

module.exports = doctoresController;
