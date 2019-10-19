"use strict";

let oracledb = require("oracledb");
let database = require("../services/database");
let dataRequest = require("../request/MovUsuariosRequest");
let paquete = "PKDAOMOVUSUARIOS.";
let bcrypt = require("bcrypt-nodejs");
let axios = require('axios')

async function create(req, res) {
  let paramsProcedure;
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;

  requestValidate = dataRequest.dataValidateCreate(paramsIn);

  if (requestValidate.length == 0) {
    paramsIn.password = bcrypt.hashSync(paramsIn.password);

    // Definimos el llamado al procedimiento de base de datos
    sql =
      "BEGIN " +
      paquete +
      "ProCreate(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    if (!paramsIn.procesos) {
      paramsIn.procesos = [];
    }

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      },
      Ps_vcError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING
      }
    };

    result = await database.executeProcedure(
      sql,
      paramsIn.c_emp,
      paramsProcedure
    );

    res.status(200).send(result);
  } else {
    res.status(200).send(requestValidate);
  }
}

async function update(req, res) {
  let paramsProcedure;
  let paramsIn = req.body;
  let requestValidate;
  let sql;

  requestValidate = dataRequest.dataValidateUpdate(paramsIn);

  if (requestValidate.length == 0) {
    paramsIn.password = bcrypt.hashSync(paramsIn.password);

    // Definimos el llamado al procedimiento de base de datos
    sql =
      "BEGIN " +
      paquete +
      "ProUpdate(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    if (!paramsIn.procesos) {
      paramsIn.procesos = [];
    }

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      },
      Ps_vcError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING
      }
    };

    result = await database.executeProcedure(
      sql,
      paramsIn.c_emp,
      paramsProcedure
    );

    res.status(200).send(result);
  } else {
    res.status(200).send(requestValidate);
  }
}

async function destroy(req, res) {
  let params = req.body;
  res.status(200).send({
    message: "update"
  });
}

/*async function findByAll(req, res) {
  let params = req.body;
  let sql;
  let paramsQuery = {};

  // Definimos el llamado al procedimiento de base de datos
  sql =
    "select * from mov_usuarios where rownum <= 100";

  // Definimos los parametros para el query
  //paramsQuery.id = 701;

  const result = await database.executeSql(sql, paramsQuery);

  res.status(200).send(result);
}*/

async function findByAll(req, res) {
  let paramsProcedure;
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;

  requestValidate = dataRequest.dataValidateFindByAll(paramsIn);

  if (requestValidate.length == 0) {
    // Definimos el llamado al procedimiento de base de datos
    sql =
      "BEGIN " +
      paquete +
      "ProFindByAll(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      },
      Ps_vcError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING
      }
    };

    result = await database.executeProcedure(
      sql,
      paramsIn.c_emp,
      paramsProcedure
    );

    res.status(200).send(result);
  } else {
    res.status(200).send(requestValidate);
  }
}

async function findById(req, res) {
  let paramsProcedure = [];
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;

  requestValidate = dataRequest.dataValidateFindById(paramsIn);

  if (requestValidate.length == 0) {
    // Definimos el llamado al procedimiento de base de datos
    sql =
      "BEGIN " +
      paquete +
      "ProFindById(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      },
      Ps_vcError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING
      }
    };

    result = await database.executeProcedure(
      sql,
      paramsIn.c_emp,
      paramsProcedure
    );

    res.status(200).send(result);
  } else {
    res.status(200).send(requestValidate);
  }
}

async function findByCriteria(req, res) {
  let paramsProcedure = [];
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;

  requestValidate = dataRequest.dataValidateFindByAll(paramsIn);

  if (requestValidate.length == 0) {
    // Definimos el llamado al procedimiento de base de datos
    sql =
      "BEGIN " +
      paquete +
      "ProFindById(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    // Definimos los parametros de entrada para la varaible Pe_JsonParams
    paramsIn.criterios = JSON.parse(paramsIn.criterios);

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      },
      Ps_vcError: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING
      }
    };

    result = await database.executeProcedure(
      sql,
      paramsIn.c_emp,
      paramsProcedure
    );

    res.status(200).send(result);
  } else {
    res.status(200).send(requestValidate);
  }
}

async function loginUser(req, res) {
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;
  let paramsQuery = {};

  requestValidate = dataRequest.dataValidateLoginUser(paramsIn);

  if (requestValidate.length == 0) {
    // Validamos si el usuario existe
    sql =
      "Select id, usuario, password, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, procesos, rol, grupo From Mov_Usuarios WHere usuario = :usuario";

    paramsQuery.usuario = paramsIn.usuario;

    result = await database.executeSql(sql, paramsIn.c_emp, paramsQuery);

    if (result.success) {
      result = result.data[0];

      if (result.PASSWORD) {
        if (paramsIn.password == result.PASSWORD) {
          result.PROCESOS = JSON.parse(result.PROCESOS);
          res.status(200).send({
            success: true,
            message: "Acceso autorizado",
            data: result
          });
        } else {
          res.status(200).send({
            success: false,
            message: "Usuario y/o contraseña no incorrectos."
          });
        }
        /*if (bcrypt.compareSync(paramsIn.password, result.PASSWORD)) {
          result.PROCESOS = JSON.parse(result.PROCESOS);
          res.status(200).send({
            success: true,
            message: "Acceso autorizado",
            data: result
          });
        } else {
          res.status(200).send({
            success: false,
            message: "Usuario y/o contraseña no incorrectos."
          });
        }*/
      } else {
        res.status(200).send({
          success: false,
          message: "Usuario y/o contraseña no incorrectos."
        });
      }
    } else {
      res.status(200).send(result);
    }
  } else {
    res.status(200).send(requestValidate);
  }
}

async function uploadImagen(req, res) {
  let userId = req.params.id;
  let fileName = "No subido";

  if (req.files) {
    let filePath = req.files.imagen.path;
    let fileSplit = filePath.split("\\");
    let fileName = fileSplit[2];

    let extSplit = fileName.split(".");
    let fileExt = extSplit[1];

    if (
      fileExt.toLowerCase() == "png" ||
      fileExt.toLowerCase() == "jpg" ||
      fileExt.toLowerCase() == "gif"
    ) {
      User.findByIdAndUpdate(
        userId, {
          imagen: fileName
        },
        (err, userUpdate) => {
          if (!userUpdate) {
            res.status(404).send({
              message: "No se ha podido actualizar el usuario"
            });
          } else {
            res.status(200).send({
              user: userUpdate,
              imagen: fileName
            });
          }
        }
      );
    } else {
      res.status(200).send({
        message: "Extension de archivo no valida."
      });
    }
  } else {
    res.status(200).send({
      message: "No has subido ninguna imagen."
    });
  }
}

async function getImagen(req, res) {
  let imageFile = req.params.imageFile;
  let pathFile = "./uploads/users/" + imageFile;
  fs.exists(pathFile, function (exists) {
    if (exists) {
      res.sendFile(path.resolve(pathFile));
    } else {
      res.status(200).send({
        message: "No existe imagen con ese nombre..."
      });
    }
  });
}

async function cupoBrilla(req, res) {
  let result;
  let paramsIn = req.body;
  let paramsQuery = {};
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

  if(paramsIn.tipo_consulta === 'CEDULA') {
    paramsQuery.document_number = paramsIn.tipo_documento + ' ' + paramsIn.n_ide;
  } else {
    paramsQuery.address = paramsIn.direccion;
  }

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
        sucess: true,
        message: 'Consulta realizada con exito.',
        data: response.data.data
      };
      res.status(200).send(result);
    })
    .catch(error => {
      result = {
        sucess: false,
        message: error.message
      };
      res.status(200).send(result);
    })
}

module.exports = {
  create,
  update,
  destroy,
  findByAll,
  findById,
  findByCriteria,
  loginUser,
  uploadImagen,
  getImagen,
  cupoBrilla
};