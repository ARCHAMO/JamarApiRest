const oracledb = require("oracledb");
const dbConfigPan = require("../config/databasePAN");
const dbConfigCol = require("../config/databaseCOL");

async function initialize() {
  const poolCol = await oracledb.createPool(dbConfigCol.hrPool);
  console.log("Pool de Conexion con Colombia realizado");
  const poolPan = await oracledb.createPool(dbConfigPan.hrPool);
  console.log("Pool de Conexion con Panama realizado");
}

function executeProcedure(statement, pais, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;

    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;

    try {
      conn = await oracledb.getConnection(pais);

      const result = await conn.execute(statement, binds, opts);

      if (result.outBinds.Ps_nuError != 0) {
        resolve({
          sucess: false,
          nuError: result.outBinds.Ps_nuError,
          message: result.outBinds.Ps_vcError
        });
      } else {
        resolve(JSON.parse(result.outBinds.Ps_ResponseClob));
      }
    } catch (err) {
      resolve({
        sucess: false,
        nuError: err.errorNum,
        message: err.message
      });
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

function executeSql(statement, pais, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;

    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;

    try {
      conn = await oracledb.getConnection(pais);

      const result = await conn.execute(statement, binds, opts);

      resolve({
        success: true,
        message: "ok",
        data: result.rows
      });
    } catch (err) {
      resolve({
        success: false,
        nuError: err.errorNum,
        message: err.message
      });
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

module.exports.initialize = initialize;
module.exports.executeProcedure = executeProcedure;
module.exports.executeSql = executeSql;
