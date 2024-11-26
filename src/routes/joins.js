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
  getTecnicoById,
  getClienteById,
  ClienteEquipoUbicacion,
  EquipoById,
  ubicacionCliente,
} from "../controllers/joins.js";
import { verificarToken } from "../controllers/authController.js";

const router = express.Router();
router.get("/clienteusuarios", verificarToken, getClienteUsuario);
router.get("/tecnicosusuarios", verificarToken, getTecnicosUsuarios);
router.get("/reportetareas/:id", verificarToken, getReporteTareas);
router.get("/equipoubicacion", verificarToken, getEquipoUbicacion);
router.get("/reportesCreados", verificarToken, getReportesAsignados);
router.get(
  "/historialmovimientos/:id",
  verificarToken,
  getHistorialMovimientos
);
router.get(
  "/tecnicosreportes/:id",
  verificarToken,
  getTecnicosActivosReportesPendientes
);
router.get("/reportesclientes/:id", verificarToken, getReporteClientes);
router.get("/tareasreportes/:id", verificarToken, getTareasReporte);
router.get("/equiposenubicacion/:id", verificarToken, getEquiposUbicacionById);

router.get("/clienteById/:id", verificarToken, getClienteById);
router.get("/tecnicoById/:id", verificarToken, getTecnicoById);

router.get("/ClienteEquipoUbicacion/:id", verificarToken, ClienteEquipoUbicacion);

router.get("/ubicacionCliente/:id", verificarToken, ubicacionCliente);

router.get("/equipobyiduser/:id", verificarToken, EquipoById);


export default router;
