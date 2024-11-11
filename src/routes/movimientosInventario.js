import express from "express";
import {
  getMovimientos_inventario,
  createMovimientosInventario,
  getMovimientoInventarioById,
  updateMovimientoInventario,
  deleteMovimiento,
} from "../controllers/movimientosInventario.js";

const router = express.Router();

router.get("/movimientosInventario", getMovimientos_inventario);
// https://backend-integradora.vercel.app/api/movimientosInventario
router.post("/movimientosInventario", createMovimientosInventario);
// https://backend-integradora.vercel.app/api/movimientosInventario
// {
//     "idEquipo": 1,
//     "idProducto": 1,
//     "idUbicacion": 1,
//     "cantidad": 3,
//     "tipoMovimiento": "Entrada",
//     "fechaMovimiento": "2024-11-10 10:30:00"
//   }
router.get("/movimientosInventario/:id", getMovimientoInventarioById);
// https://backend-integradora.vercel.app/api/movimientosInventario/1
router.put("/movimientosInventario/:id", updateMovimientoInventario);
// https://backend-integradora.vercel.app/api/movimientosInventario/1
// {
//     "idEquipo": 1,
//     "idProducto": 1,
//     "idUbicacion": 1,
//     "cantidad": 3,
//     "tipoMovimiento": "Salida",
//     "fechaMovimiento": "2024-11-10 10:30:00"
//   }

//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/movimientosInventario/:id", deleteMovimiento);
//https://backend-integradora.vercel.app/api/movimientosInventario/1

export default router; // Exportación por defecto
