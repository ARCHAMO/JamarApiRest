'use strict'

let express = require('express');
let controller = require('../controllers/MovUsuariosController');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir: './uploads/movusuarios'});

// Rutas para el controlador de usuarios
api.post('/MovUsuariosService/loginUser', [md_auth.validateApiKey], controller.loginUser);
api.post('/MovUsuariosService/create', [md_auth.validateApiKey], controller.create);
api.post('/MovUsuariosService/update', [md_auth.validateApiKey], controller.update);
api.post('/MovUsuariosService/upload-imagen/:id', [md_upload], controller.uploadImagen);
api.get('/MovUsuariosService/get-imagen/:imageFile', controller.getImagen);
api.post('/MovUsuariosService/findByAll', controller.findByAll);
api.post('/MovUsuariosService/findById', [md_auth.validateApiKey], controller.findById);
api.post('/MovUsuariosService/destroy', [md_auth.validateApiKey], controller.destroy);

api.post('/MovUsuariosService/cupoBrilla', controller.cupoBrilla);

module.exports = api;