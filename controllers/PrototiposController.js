"use strict";

function sendMessage(io) {
  let paramsIn = req.body;

  io.on('connection', (socket) => {
    socket.emit("message", paramsIn);
  });

  res.status(200).send(paramsIn);

}

module.exports = {
  sendMessage,
};
