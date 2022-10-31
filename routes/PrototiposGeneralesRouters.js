'use strict'

let express = require('express');
let controller = require('../controllers/PrototiposGeneralesController');
let api = express.Router();

// Rutas para el controlador de usuarios
api.post('/prototiposgenerales/ckeditor', [], controller.ckeditor);

module.exports = api;