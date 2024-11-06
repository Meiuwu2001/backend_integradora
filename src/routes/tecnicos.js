import express from  "express";
import {getTecnico, createTecnico, getTecnicoById, updateTecnico, deleteTecnico} from "../controllers/tecnicos.js";

const router = express.Router();

router.get("/tecnicos", getTecnico)
router.post("/tecnicos", createTecnico)
router.get("/tecnicos/:id", getTecnicoById)
router.put("/tecnicos/:id", updateTecnico)
router.delete("/tecnicos/:id", deleteTecnico)


export default router;  // Exportación por defecto
