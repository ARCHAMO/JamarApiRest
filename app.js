"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Cargamos las rutas
let userRouters = require("./routes/UserRouters");
let movUsuariosRouters = require("./routes/MovUsuariosRouters");
let serEndpointsRouters = require("./routes/SerEndpointsRouters");
let facilidadRouters = require("./routes/FacilidadRouters");
let prototiposRouters = require("./routes/PrototiposRouters");

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

// Configuracion e inicio SocketIO
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message", (arg) => {
    console.log(arg); // world
    socket.emit("message", arg);
  });
});

server.listen(3000, () => {
  console.log('Socket IO escuchando en *:3000');
});

io.on('message', (socket) => {
  console.log(socket);
});

io.on("connection", (socket) => {
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
});

// Rutas base
app.use("/api", userRouters);
app.use("/api", movUsuariosRouters);
app.use("/api", serEndpointsRouters);
app.use("/api", facilidadRouters);
app.use("/api", prototiposRouters);

module.exports = app;
