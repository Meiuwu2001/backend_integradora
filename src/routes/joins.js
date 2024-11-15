import express from "express";
import {
  getClienteUsuario,
  getReporteTareas,
  getTecnicosUsuarios,
  getEquipoUbicacion,
  getReportesAsignados,
} from "../controllers/joins.js";

const router = express.Router();
router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios);
router.get("/reportetareas/:id", getReporteTareas);
router.get("/equipoubicacion", getEquipoUbicacion);
router.get("/reportesasignados", getReportesAsignados)

export default router;
