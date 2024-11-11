// routes/authRoutes.js
import express from "express";
import {
  registrar,
  iniciarSesion,
  verificarToken,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/registrar", registrar);
// https://backend-integradora.vercel.app/api/auth/registrar
// {
//   "user": "Cliente1",
//   "password": "clientepass",
//   "rol": "cliente"
// }
router.post("/iniciar-sesion", iniciarSesion);
// https://backend-integradora.vercel.app/api/auth/iniciar-sesion
// {
//   "user": "nuevoUsuario",
//   "password": "contraseñaSegura"
// }


router.get("/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Acceso autorizado", usuario: req.usuario });
});


export default router; // Exportación por defecto
