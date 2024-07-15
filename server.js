// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
//const routes = require('./routes'); // Importa las rutas

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas
//app.use('/api', routes); // Usa las rutas

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }).catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
