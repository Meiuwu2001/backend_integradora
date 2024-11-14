import express from "express";
import {
    getClienteUsuario,
    getReporteTareas,
    getTecnicosUsuarios,
    
} from "../controllers/joins.js"

const router = express.Router();

router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios);
router.get("/reportetareas/:id", getReporteTareas)

export default router;