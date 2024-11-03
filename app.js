const express = require("express");
const contactUs = require("./src/routes/contactUS.js");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes.js");
const clientes = require("./src/routes/clientes");
const equipos = require("./src/routes/equipos");
const movimientosInventario = require("./src/routes/movimientosInventario");
const productos = require("./src/routes/productos");
const ReportehasEquipos = require("./src/routes/ReportehasEquipos");
const reportes = require("./src/routes/reportes");
const tareas = require("./src/routes/tareas");
const tecnicos = require("./src/routes/tecnicos");
const ubicaciones = require("./src/routes/ubicaciones");

const app = express();

app.use(express.json());
app.use(bodyParser.json()); // Parsear JSON


app.use("/api", contactUs);
app.use("/api", clientes);
app.use("/api", equipos);
app.use("/api", movimientosInventario);
app.use("/api", productos);
app.use("/api", ReportehasEquipos);
app.use("/api", reportes);
app.use("/api", tareas);
app.use("/api", tecnicos);
app.use("/api", ubicaciones);
app.use("/api/auth", authRoutes); // Enlazar rutas de autenticación
module.exports = app;
