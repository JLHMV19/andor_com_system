const express = require('express');
const cors = require('cors'); // <--- importar cors
const app = express();
const port = 3000;
const sequelize = require('./conexion.js');
const usuariosRouter = require('./routes/usuario.js');
const authController = require('./controllers/authController.js'); 
const doctoresRouter = require('./routes/doctor.js');
const pacientesRouter = require('./routes/pacientes.js');
const asistentesRouter = require('./routes/asistentes.js');
const citasRouter = require('./routes/citas.js');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar CORS
app.use(cors({
  origin: [
    'http://localhost:8100',          // tu app Ionic
    'http://localhost:4200',          // si quieres seguir permitiendo Angular
    'https://andormedproyect.web.app' // producción
  ],
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

// Routes
app.use('/usuario', usuariosRouter);
app.post('/login', authController.login);
app.use('/doctor', doctoresRouter);
app.use('/paciente', pacientesRouter);
app.use('/asistente', asistentesRouter);
app.use('/citas', citasRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Error in server:', err);
});
