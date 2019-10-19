"use strict";

let oracledb = require("oracledb");
let database = require("../services/database");
let dataRequest = require("../request/SerEndpointsRequest");
let paquete = "Pkdaoserendpoints.";

async function create(req, res) {
  let paramsProcedure;
  let paramsIn = req.body;
  let requestValidate;
  let sql, result;

  requestValidate = dataRequest.dataValidateCreate(paramsIn);

  if (requestValidate.length == 0) {
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
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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

  requestValidate = dataRequest.dataValidateFindByAll(paramsIn);

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
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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

async function endpointsToObject(req, res) {
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
      "ProEndpointsToObject(:Pe_JsonParams, :Ps_ResponseClob, :Ps_nuError, :Ps_vcError); END;";

    // Definimos los parametros de entrada y salida para los procedimientos
    paramsProcedure = {
      Pe_JsonParams: JSON.stringify(paramsIn),
      Ps_ResponseClob: {
        dir: oracledb.BIND_OUT,
        type: oracledb.STRING,
        maxSize: 5000000
      },
      Ps_nuError: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      Ps_vcError: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
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

module.exports = {
  create,
  update,
  destroy,
  findByAll,
  findById,
  findByCriteria,
  endpointsToObject
};
