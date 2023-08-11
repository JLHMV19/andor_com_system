const Asistente = require('../models/asistente');

const asistentesController = {
  crearAsistente: async (req, res) => {
    try {
      // Obtener los datos del formulario
      const { nombreAsistente, doctores_doctorId, usuarios_idusuarios1 } = req.body;

      // Crear el registro en la tabla de asistentes
      const nuevoAsistente = await Asistente.create({
        nombreAsistente,
        doctores_doctorId,
        usuarios_idusuarios1,
      });

      res.status(201).json(nuevoAsistente);
    } catch (error) {
      console.log('Error en server', error);
      res.status(500).json({ error: 'Error en la creación del asistente.' });
    }
  },

  obtenerAsistentes: async (req, res) => {
    try {
      const asistentes = await Asistente.findAll();
      res.json(asistentes);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista de asistentes.' });
    }
  },

  obtenerAsistente: async (req, res) => {
    const asistenteId = req.params.id;
    try {
      const asistente = await Asistente.findByPk(asistenteId);
      if (asistente) {
        res.json(asistente);
      } else {
        res.status(404).json({ error: 'Asistente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la información del asistente.' });
    }
  },

  actualizarAsistente: async (req, res) => {
    const asistenteId = req.params.id;
    try {
      const [updatedRows] = await Asistente.update(req.body, {
        where: { idasistentes: asistenteId },
      });
      if (updatedRows > 0) {
        res.json({ message: 'Asistente actualizado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Asistente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la información del asistente.' });
    }
  },

  eliminarAsistente: async (req, res) => {
    const asistenteId = req.params.id;
    try {
      const deletedRows = await Asistente.destroy({
        where: { idasistentes: asistenteId },
      });
      if (deletedRows > 0) {
        res.json({ message: 'Asistente eliminado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Asistente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el asistente.' });
    }
  },
};

module.exports = asistentesController;

