import express from "express";
import {
    getClienteUsuario 
} from "../controllers/joins.js"

const router = express.Router();

router.get("/clienteusuarios", getClienteUsuario);

export default router;