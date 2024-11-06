import express from "express";
import {
  getEquipo,
  createEquipo,
  getEquipoById,
  updateEquipo,
  deleteEquipo,
} from "../controllers/equipos.js";

const router = express.Router();

router.get("/equipos", getEquipo);
router.post("/equipos", createEquipo);
router.get("/equipos/:id", getEquipoById);
router.put("/equipos/:id", updateEquipo);
router.delete("/equipos/:id", deleteEquipo);

export default router; // Exportación por defecto
