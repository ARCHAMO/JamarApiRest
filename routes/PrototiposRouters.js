'use strict'

let express = require('express');
let controller = require('../controllers/PrototiposController');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');

// Rutas para el controlador de usuarios
api.post('/Prototipos/sendMessage', controller.sendMessage);

module.exports = api;