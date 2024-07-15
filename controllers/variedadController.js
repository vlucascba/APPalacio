// src/controllers/variedadController.js
const { Variedad } = require('../models');

const getAllVariedades = async (req, res) => {
  try {
    const variedades = await Variedad.findAll();
    res.json(variedades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las variedades' });
  }
};

const createVariedad = async (req, res) => {
  try {
    const nuevaVariedad = await Variedad.create(req.body);
    res.status(201).json(nuevaVariedad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la variedad' });
  }
};

const updateVariedad = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Variedad.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedVariedad = await Variedad.findOne({ where: { id: id } });
      res.status(200).json(updatedVariedad);
    } else {
      res.status(404).json({ error: 'Variedad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la variedad' });
  }
};

const deleteVariedad = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Variedad.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Variedad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la variedad' });
  }
};

module.exports = {
  getAllVariedades,
  createVariedad,
  updateVariedad,
  deleteVariedad
};
