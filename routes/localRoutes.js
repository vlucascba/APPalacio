// src/routes/localRoutes.js
const express = require('express');
const { getAllLocals, createLocal, updateLocal, deleteLocal } = require('../controllers/localController');

const router = express.Router();

router.get('/', getAllLocals);
router.post('/', createLocal);
router.put('/:id', updateLocal);
router.delete('/:id', deleteLocal);

module.exports = router;