"use strict";

let axios = require('axios')
let dataRequest = require("../request/FacilidadRequest");

async function cupoBrilla(req, res) {
  let result;
  let requestValidate;
  let paramsIn = req.body;
  let paramsQuery = {};

  requestValidate = dataRequest.dataValidateCupoBrilla(paramsIn);

  if (requestValidate.length == 0) {
    if (paramsIn.tipo_consulta === 'CEDULA') {
      paramsQuery.document_number = paramsIn.tipo_documento + ' ' + paramsIn.n_ide;
    } else {
      paramsQuery.address = paramsIn.direccion;
    }

    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

    axios({
        method: 'get',
        url: 'https://13.66.190.199:7890/api/v1/quota',
        headers: {
          'Authorization': 'Secret qRIo24ZcQ2dcX1u4ka6ZBGdXMew6+wvV5bdQzHZFNhHOuB5fZ6E6P4uNH/TFHUd9',
          'Content-Type': 'application/json'
        },
        params: paramsQuery
      })
      .then(response => {
        result = {
          success: true,
          message: 'Consulta realizada con exito.',
          data: response.data.data
        };
        res.status(200).send(result);
      })
      .catch(error => {
        result = {
          success: false,
          message: error.message
        };
        res.status(200).send(result);
      })
  } else {
    res.status(200).send(requestValidate);
  }
}

module.exports = {
  cupoBrilla
};