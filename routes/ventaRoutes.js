// src/routes/ventaRoutes.js
const express = require('express');
const { getAllVentas, createVenta, updateVenta, deleteVenta } = require('../controllers/ventaController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getAllVentas);
router.post('/', authenticate, createVenta);
router.put('/:id', authenticate, updateVenta);
router.delete('/:id', authenticate, deleteVenta);

module.exports = router;
