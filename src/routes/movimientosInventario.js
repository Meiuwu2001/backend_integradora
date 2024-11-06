import express from  "express";
import {getMovimientos_inventario, createMovimientosInventario, getMovimientoInventarioById, updateMovimientoInventario, deleteMovimiento} from "../controllers/movimientosInventario.js";

const router = express.Router();

router.get("/movimientosInventario", getMovimientos_inventario)
router.post("/movimientosInventario", createMovimientosInventario)
router.get("/movimientosInventario/:id", getMovimientoInventarioById)
router.put("/movimientosInventario/:id", updateMovimientoInventario)
router.delete("/movimientosInventario/:id", deleteMovimiento)


export default router;  // Exportación por defecto
