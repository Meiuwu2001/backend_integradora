import express from  "express";
import {getReporte, createReporte, getReporteById, updateReporte, deleteReporte} from "../controllers/reportes.js";

const router = express.Router();

router.get("/reportes", getReporte)
router.post("/reportes", createReporte)
router.get("/reportes/:id", getReporteById)
router.put("/reportes/:id", updateReporte)
router.delete("/reportes/:id", deleteReporte)


export default router;  // Exportación por defecto
