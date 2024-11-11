// routes/movimientosInventario.js
import express from "express";
import {
  getMovimientos_inventario,
  createMovimientosInventario,
  getMovimientoInventarioById,
  updateMovimientoInventario,
  deleteMovimiento,
} from "../controllers/movimientosInventario.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movimientos de Inventario
 *   description: API para manejar los movimientos de inventario
 */

/**
 * @swagger
 * /api/movimientosInventario:
 *   get:
 *     summary: Obtiene todos los movimientos de inventario
 *     tags: [Movimientos de Inventario]
 *     responses:
 *       200:
 *         description: Lista de movimientos de inventario obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   idEquipo:
 *                     type: integer
 *                   idProducto:
 *                     type: integer
 *                   idUbicacion:
 *                     type: integer
 *                   cantidad:
 *                     type: integer
 *                   tipoMovimiento:
 *                     type: string
 *                   fechaMovimiento:
 *                     type: string
 *                     format: date-time
 */
router.get("/movimientosInventario", getMovimientos_inventario);

/**
 * @swagger
 * /api/movimientosInventario:
 *   post:
 *     summary: Crea un nuevo movimiento de inventario
 *     tags: [Movimientos de Inventario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idEquipo:
 *                 type: integer
 *               idProducto:
 *                 type: integer
 *               idUbicacion:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               tipoMovimiento:
 *                 type: string
 *               fechaMovimiento:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Movimiento de inventario creado exitosamente.
 *       400:
 *         description: Error al crear el movimiento de inventario.
 */
router.post("/movimientosInventario", createMovimientosInventario);

/**
 * @swagger
 * /api/movimientosInventario/{id}:
 *   get:
 *     summary: Obtiene un movimiento de inventario por ID
 *     tags: [Movimientos de Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del movimiento de inventario
 *     responses:
 *       200:
 *         description: Movimiento de inventario obtenido exitosamente.
 *       404:
 *         description: Movimiento de inventario no encontrado.
 */
router.get("/movimientosInventario/:id", getMovimientoInventarioById);

/**
 * @swagger
 * /api/movimientosInventario/{id}:
 *   put:
 *     summary: Actualiza un movimiento de inventario por ID
 *     tags: [Movimientos de Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del movimiento de inventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idEquipo:
 *                 type: integer
 *               idProducto:
 *                 type: integer
 *               idUbicacion:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               tipoMovimiento:
 *                 type: string
 *               fechaMovimiento:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Movimiento de inventario actualizado exitosamente.
 *       404:
 *         description: Movimiento de inventario no encontrado.
 */
router.put("/movimientosInventario/:id", updateMovimientoInventario);

/**
 * @swagger
 * /api/movimientosInventario/{id}:
 *   delete:
 *     summary: Elimina un movimiento de inventario por ID
 *     tags: [Movimientos de Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del movimiento de inventario
 *     responses:
 *       200:
 *         description: Movimiento de inventario eliminado exitosamente.
 *       404:
 *         description: Movimiento de inventario no encontrado.
 */
router.delete("/movimientosInventario/:id", deleteMovimiento);

export default router;
