"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Cargamos las rutas
let userRouters = require("./routes/UserRouters");
let movUsuariosRouters = require("./routes/MovUsuariosRouters");
let serEndpointsRouters = require("./routes/SerEndpointsRouters");
let facilidadRouters = require("./routes/FacilidadRouters");
let prototiposRouters = require("./routes/PrototiposRouters");

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('Socket IO escuchando en *:3000');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuramos las cabeceras http
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas base
app.use("/api", userRouters);
app.use("/api", movUsuariosRouters);
app.use("/api", serEndpointsRouters);
app.use("/api", facilidadRouters);
app.use("/api", prototiposRouters);

module.exports = app;
