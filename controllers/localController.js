// src/controllers/localController.js
const { Local } = require('../models');

const getAllLocals = async (req, res) => {
  try {
    const locals = await Local.findAll();
    res.json(locals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLocal = async (req, res) => {
  try {
    const local = await Local.create(req.body);
    res.status(201).json(local);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Otros métodos CRUD (update, delete) pueden ser agregados aquí

module.exports = {
  getAllLocals,
  createLocal
};
