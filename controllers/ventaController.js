// src/controllers/ventaController.js
const { Venta } = require('../models');

const getAllVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVenta = async (req, res) => {
  try {
    const venta = await Venta.create(req.body);
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Otros métodos CRUD (update, delete) pueden ser agregados aquí

module.exports = {
  getAllVentas,
  createVenta
};
