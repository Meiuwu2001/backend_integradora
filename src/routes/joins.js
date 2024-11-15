import express from "express";
import {
  getClienteUsuario,
  getReporteTareas,
  getTecnicosUsuarios,
  getEquipoUbicacion,
  getReportesAsignados,
  getHistorialMovimientos,
  getTecnicosActivosReportesPendientes,
  getReporteClientes,
  getTareasReporte,
  getEquiposUbicacionById,
} from "../controllers/joins.js";

const router = express.Router();
router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios);
router.get("/reportetareas/:id", getReporteTareas);
router.get("/equipoubicacion", getEquipoUbicacion);
router.get("/reportesasignados", getReportesAsignados);
router.get("/historialmovimientos/:id", getHistorialMovimientos);
router.get("/tecnicosactivosreportespendientes", getTecnicosActivosReportesPendientes);
router.get("/reportesclientes", getReporteClientes);
router.get("/tareasreportes", getTareasReporte);
router.get("/equiposenubicacion",getEquiposUbicacionById);

export default router;
