// routes/authRoutes.js
const express = require("express");
const {
  registrar,
  iniciarSesion,
  verificarToken,
} = require("../controllers/authController");
const router = express.Router();

router.post("/registrar", registrar);
router.post("/iniciar-sesion", iniciarSesion);
router.get("/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Acceso autorizado", usuario: req.usuario });
});

module.exports = router;
