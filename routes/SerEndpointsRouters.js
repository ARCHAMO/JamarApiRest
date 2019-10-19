'use strict'

let express = require('express');
let controller = require('../controllers/SerEndpointsController');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');

// Rutas para el controlador de usuarios
api.post('/SerEndpointsService/create', [md_auth.validateApiKey], controller.create);
api.post('/SerEndpointsService/update', [md_auth.validateApiKey], controller.update);
api.post('/SerEndpointsService/findByAll', [md_auth.validateApiKey], controller.findByAll);
api.post('/SerEndpointsService/findById', [md_auth.validateApiKey], controller.findById);
api.post('/SerEndpointsService/findByCriteria', [md_auth.validateApiKey], controller.findByCriteria);
api.post('/SerEndpointsService/destroy', [md_auth.validateApiKey], controller.destroy);
api.post('/SerEndpointsService/endpointsToObject', controller.endpointsToObject);

module.exports = api;