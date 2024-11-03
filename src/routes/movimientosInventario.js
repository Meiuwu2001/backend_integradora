const express = require("express")
const {getMovimientos_inventario, createMovimientosInventario, getMovimientoInventarioById, updateMovimientoInventario, deleteMovimiento} = require("../controllers/movimientosInventario");

const router = express.Router();

router.get("/movimientosInventario", getMovimientos_inventario)
router.post("/movimientosInventario", createMovimientosInventario)
router.get("/movimientosInventario/:id", getMovimientoInventarioById)
router.put("/movimientosInventario/:id", updateMovimientoInventario)
router.delete("/movimientosInventario/:id", deleteMovimiento)


module.exports = router;