"use strict";

let app = require("./app");
let port = process.env.PORT || 3977;
let database = require("./services/database");

const dbConfigCol = require("./config/databaseCOL");
const defaultThreadPoolSize = 4;

// Increase thread pool size by poolMax
process.env.UV_THREADPOOL_SIZE = dbConfigCol.hrPool.poolMax + defaultThreadPoolSize;

app.listen(port, function() {
  console.log("Servidor escuchando en http://localhost:" + port);
  async function start() {
    try {
      //console.log("Iniciando comunicacion con las Base de datos");
      //await database.initialize();
    } catch (err) {
      console.log("Error");
      console.error(err);
      process.exit(1); // Non-zero failure code
    }
  }
  start();
});
