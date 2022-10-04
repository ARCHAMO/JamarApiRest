"use strict";

let oracledb = require("oracledb");
let database = require("../services/database");
let dataRequest = require("../request/SerEndpointsRequest");
let paquete = "Pkdaoserendpoints.";

async function sendMessage(req, res) {
  let paramsIn = req.body;

  res.status(200).send(paramsIn);

}

module.exports = {
  sendMessage
};
