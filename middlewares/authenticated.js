'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');
let secret = 'clave_secreta_mi_token';
let database = require("../services/database");

function ensureAuth(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'La petición no tiene la cabacera de autenticación'
        });
    }

    let token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                message: 'El token ha expirado'
            });
        }
    } catch (ex) {
        return res.status(404).send({
            message: 'El token no es valido'
        });
    }

    req.user = payload;

    next();
}

async function validateApiKey(req, res, next) {
    let params = req.body;
    let sql;
    let paramsQuery = {};

    //Validaciones iniciales de datos
    if(!params.c_emp || !params.api_key || params.c_emp == '' || params.api_key == '') {
        return res.status(404).send({
            message: 'Api key no es valida'
        });
    }

    // Definimos el llamado al procedimiento de base de datos
    sql =  " Select id, ser_aplicaciones_id, ser_clientes_id, api_key, fecha_generacion, fecha_finalizacion, estado ";
    sql += " From   Ser_Api_Token ";
    sql += " Where id is Not Null ";
    sql += " and api_key = :api_key";
    sql += " and estado = :estado";
          
    // Definimos los parametros para el query
    paramsQuery.api_key = params.api_key;
    paramsQuery.estado = 'AC';

    const result = await database.executeSql(sql, params.c_emp, paramsQuery);

    if(result.success && result.data.length === 1) {
        next();
    } else {
        return res.status(404).send({
            message: 'Api key no es valida'
        });
    }

}


module.exports = {
    ensureAuth,
    validateApiKey,
};

/*exports.ensureAuth = function (req, res, next) {

    if(!req.headers.authorization){
        return res.status(403).send({
           message: 'La petición no tiene la cabacera de autenticación'
        });
    }

    let token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()){
            return res.status(401).send({
               message: 'El token ha expirado'
            });
        }
    } catch (ex) {
        return res.status(404).send({
           message: 'El token no es valido'
        });
    }

    req.user = payload;

    next();
};*/