// routes/ubicaciones.js
import express from "express";
import {
  getUbicacion,
  createUbicacion,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
} from "../controllers/ubicaciones.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ubicacion
 *   description: API para la gestión de ubicaciones
 */

/**
 * @swagger
 * /api/ubicacion:
 *   get:
 *     summary: Obtiene todas las ubicaciones
 *     tags: [Ubicacion]
 *     responses:
 *       200:
 *         description: Lista de ubicaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/ubicacion", getUbicacion);

/**
 * @swagger
 * /api/ubicacion:
 *   post:
 *     summary: Crea una nueva ubicación
 *     tags: [Ubicacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Ciudad:
 *                 type: string
 *               Estado:
 *                 type: string
 *               CodigoPostal:
 *                 type: string
 *               Direccion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ubicación creada exitosamente.
 *       400:
 *         description: Error al crear la ubicación.
 */
router.post("/ubicacion", createUbicacion);

/**
 * @swagger
 * /api/ubicacion/{id}:
 *   get:
 *     summary: Obtiene una ubicación por ID
 *     tags: [Ubicacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación obtenida exitosamente.
 *       404:
 *         description: Ubicación no encontrada.
 */
router.get("/ubicacion/:id", getUbicacionById);

/**
 * @swagger
 * /api/ubicacion/{id}:
 *   put:
 *     summary: Actualiza una ubicación por ID
 *     tags: [Ubicacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ubicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Ciudad:
 *                 type: string
 *               Estado:
 *                 type: string
 *               CodigoPostal:
 *                 type: string
 *               Direccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ubicación actualizada exitosamente.
 *       404:
 *         description: Ubicación no encontrada.
 */
router.put("/ubicacion/:id", updateUbicacion);

/**
 * @swagger
 * /api/ubicacion/{id}:
 *   delete:
 *     summary: Elimina una ubicación por ID
 *     tags: [Ubicacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación eliminada exitosamente.
 *       404:
 *         description: Ubicación no encontrada.
 */
router.delete("/ubicacion/:id", deleteUbicacion);

export default router;
