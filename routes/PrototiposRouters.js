'use strict'

let express = require('express');
let controller = require('../controllers/PrototiposController');

function PrototiposRouters(io) {
    // Rutas para el controlador de usuarios
    // api.post('/Prototipos/sendMessage', controller.sendMessage(req, res, io));
    let router = express.Router();
    router.post('/Prototipos/sendMessage', (req, res) => {
        let paramsIn = req.body;
        console.log('Hola Socket');
        io.emit("message", paramsIn);

        res.status(200).send(paramsIn);

    });
    return router;
}

module.exports = PrototiposRouters;