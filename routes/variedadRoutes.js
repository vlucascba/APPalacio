// src/routes/variedadRoutes.js
const express = require('express');
const { getAllVariedades, createVariedad, updateVariedad, deleteVariedad } = require('../controllers/variedadController');

const router = express.Router();

router.get('/', getAllVariedades);
router.post('/', createVariedad);
router.put('/:id', updateVariedad);
router.delete('/:id', deleteVariedad);

module.exports = router;
