// routes/authRoutes.js
import express from "express";
import {
  registrar,
  iniciarSesion,
  verificarToken,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/registrar", registrar);
router.post("/iniciar-sesion", iniciarSesion);
router.get("/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Acceso autorizado", usuario: req.usuario });
});

export default router; // Exportación por defecto
