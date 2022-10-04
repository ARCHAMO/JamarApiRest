"use strict";

async function sendMessage(req, res) {
  let paramsIn = req.body;

  let io = req.app.get("socketio");
  io.emit("message", paramsIn);

  res.status(200).send(paramsIn);

}

module.exports = {
  sendMessage
};
