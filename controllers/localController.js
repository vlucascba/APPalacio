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

const updateLocal = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const local = await Local.findByPk(id);
    if (!local) {
      return res.status(404).json({ message: 'Local no encontrado' });
    }

    await local.update(updatedData);
    res.status(200).json({ message: 'Local actualizado', data: local });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLocal = async (req, res) => {
  const { id } = req.params;

  try {
    const local = await Local.findByPk(id);
    if (!local) {
      return res.status(404).json({ message: 'Local no encontrado' });
    }

    await local.destroy();
    res.status(200).json({ message: 'Local eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLocals,
  createLocal,
  updateLocal,
  deleteLocal
};
