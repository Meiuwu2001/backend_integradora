const express = require("express");
const contactUs = require("./src/routes/contactUS.js");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes.js");

const app = express();

app.use(express.json());

app.use("/api/contactus", contactUs);

app.use(bodyParser.json()); // Parsear JSON
app.use("/api/auth", authRoutes); // Enlazar rutas de autenticación
module.exports = app;
