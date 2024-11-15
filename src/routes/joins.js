import express from "express";
import {
  getClienteUsuario,
  getReporteTareas,
  getTecnicosUsuarios,
  getEquipoUbicacion,
} from "../controllers/joins.js";

const router = express.Router();
router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios);
router.get("/reportetareas/:id", getReporteTareas);
router.get("/equipoubicacion", getEquipoUbicacion);

export default router;
