import express from "express";
import {
    getClienteUsuario,
    getReporteTareas,
    getTecnicosUsuarios,
    getReporteTareas
} from "../controllers/joins.js"

const router = express.Router();

router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios);
router.get("/reportestareas", getReporteTareas)

export default router;