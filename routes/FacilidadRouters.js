'use strict'

let express = require('express');
let controller = require('../controllers/FacilidadController');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');

// Rutas para el controlador de facilidad
api.post('/FacilidadService/cupoBrilla', controller.cupoBrilla);

module.exports = api;