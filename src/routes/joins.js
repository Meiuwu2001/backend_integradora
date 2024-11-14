import express from "express";
import {
    getClienteUsuario,
    getTecnicosUsuarios
} from "../controllers/joins.js"

const router = express.Router();

router.get("/clienteusuarios", getClienteUsuario);
router.get("/tecnicosusuarios", getTecnicosUsuarios)

export default router;