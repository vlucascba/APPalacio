// src/routes/index.js
const express = require('express');
const router = express.Router();
const localRoutes = require('./localRoutes');
const variedadRoutes = require('./variedadRoutes');
const ventaRoutes = require('./ventaRoutes');
const authRoutes = require('./authRoutes'); // Importa las rutas de autenticación

// Ruta principal
router.get('/', (req, res) => {
    res.send('Bienvenido a la API de EL PALACIO DEL SANDWICH');
  });
  
  // Rutas de autenticación
  router.use('/auth', authRoutes);
  
  // Rutas para Local
  router.use('/locals', localRoutes);
  
  // Rutas para Variedad
  router.use('/variedades', variedadRoutes);
  
  // Rutas para Venta
  router.use('/ventas', ventaRoutes);
  
  module.exports = router;
