const Paciente = require('../models/paciente');

const pacientesController = {
  crearPaciente: async (req, res) => {
    try {
      // Obtener los datos del formulario
      const { nombrepacientes, doctores_doctorId, usuarios_idusuarios, RFCpaciente, direccion, alegias } = req.body;

      // Crear el registro en la tabla de pacientes
      const nuevoPaciente = await Paciente.create({
        nombrepacientes,
        doctores_doctorId,
        usuarios_idusuarios,
        RFCpaciente,
        direccion,
        alegias,
      });

      res.status(201).json(nuevoPaciente);
    } catch (error) {
      console.log('Error en server', error);
      res.status(500).json({ error: 'Error en la creación del paciente.' });
    }
  },

  obtenerPacientes: async (req, res) => {
    try {
      const pacientes = await Paciente.findAll();
      console.log(pacientes);
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista de pacientes.' });
    }
  },

  obtenerPaciente: async (req, res) => {
    const pacienteId = req.params.id;
    try {
      const paciente = await Paciente.findByPk(pacienteId);
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({ error: 'Paciente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la información del paciente.' });
    }
  },

  actualizarPaciente: async (req, res) => {
    const pacienteId = req.params.id;
    try {
      const [updatedRows] = await Paciente.update(req.body, {
        where: { idpacientes: pacienteId },
      });
      if (updatedRows > 0) {
        res.json({ message: 'Paciente actualizado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Paciente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la información del paciente.' });
    }
  },

  eliminarPaciente: async (req, res) => {
    const pacienteId = req.params.id;
    try {
      const deletedRows = await Paciente.destroy({
        where: { idpacientes: pacienteId },
      });
      if (deletedRows > 0) {
        res.json({ message: 'Paciente eliminado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Paciente no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el paciente.' });
    }
  },
};

module.exports = pacientesController;
