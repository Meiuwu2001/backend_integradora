import express from  "express";
import {getTarea, createTarea, getTareaById, updateTarea, deleteTarea} from "../controllers/tareas.js";

const router = express.Router();

router.get("/Tareas", getTarea)
router.post("/Tareas", createTarea)
router.get("/Tareas/:id", getTareaById)
router.put("/Tareas/:id", updateTarea)
router.delete("/Tareas/:id", deleteTarea)


export default router;  // Exportación por defecto
