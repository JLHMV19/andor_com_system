const Cita = require('../models/citas');

const citasController = {
  // Crear una nueva cita
  crearCita: async (req, res) => {
    try {
      const { fechacitas, status, pacientesid, doctoresdoctorid } = req.body;

      const nuevaCita = await Cita.create({
        fechacitas,
        status,
        pacientes_idpacientes: pacientesid,
        doctores_doctorId: doctoresdoctorid,
      });

      res.status(201).json(nuevaCita);
    } catch (error) {
      console.log('Error en server', error);
      res.status(500).json({ error: 'Error en la creación de la cita.' });
    }
  },

  // Obtener todas las citas
  obtenerCitas: async (req, res) => {
    try {
      const citas = await Cita.findAll();
      res.json(citas);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista de citas.' });
    }
  },

  // Obtener información de una cita específica
  obtenerCita: async (req, res) => {
    const citaId = req.params.id;
    try {
      const cita = await Cita.findByPk(citaId);
      if (cita) {
        res.json(cita);
      } else {
        res.status(404).json({ error: 'Cita no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la información de la cita.' });
    }
  },

  // Actualizar información de una cita específica
  actualizarCita: async (req, res) => {
    const citaId = req.params.id;
    try {
      const [updatedRows] = await Cita.update(req.body, {
        where: { idcitas: citaId },
      });
      if (updatedRows > 0) {
        res.json({ message: 'Cita actualizada exitosamente.' });
      } else {
        res.status(404).json({ error: 'Cita no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la información de la cita.' });
    }
  },

  // Eliminar una cita específica
  eliminarCita: async (req, res) => {
    const citaId = req.params.id;
    try {
      const deletedRows = await Cita.destroy({
        where: { idcitas: citaId },
      });
      if (deletedRows > 0) {
        res.json({ message: 'Cita eliminada exitosamente.' });
      } else {
        res.status(404).json({ error: 'Cita no encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar la cita.' });
    }
  },
};

module.exports = citasController;
