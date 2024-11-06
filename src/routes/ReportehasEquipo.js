import express from  "express";
import {getReportehasEquipo, createReportehasEquipo} from "../controllers/reportesHasEquipos.js";

const router = express.Router();

router.get("/ReportehasEquipos", getReportehasEquipo);
router.post("/ReportehasEquipos", createReportehasEquipo);
// router.get("/ReportehasEquipos/:id", getReportehasEquipoById);
// router.put("/ReportehasEquipos/:id", updateReportehasEquipo);
// router.delete("/ReportehasEquipos/:id", deleteReportehasEquipo);

export default router;  // Exportación por defecto
