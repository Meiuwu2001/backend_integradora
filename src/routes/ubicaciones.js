import express from  "express";
import {getUbicacion, createUbicacion, getUbicacionById, updateUbicacion, deleteUbicacion} from "../controllers/ubicaciones.js";

const router = express.Router();

router.get("/ubicacion", getUbicacion)
router.post("/ubicacion", createUbicacion)
router.get("/ubicacion/:id", getUbicacionById)
router.put("/ubicacion/:id", updateUbicacion)
router.delete("/ubicacion/:id", deleteUbicacion)


export default router;  // Exportación por defecto
