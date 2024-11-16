// routes/reportes.js
import express from "express";
import {
  getReporte,
  createReporte,
  getReporteById,
  updateReporte,
  deleteReporte,
} from "../controllers/reportes.js";
import { verificarToken } from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reportes
 *   description: API para la gestión de reportes
 */

/**
 * @swagger
 * /api/reportes:
 *   get:
 *     summary: Obtiene todos los reportes
 *     tags: [Reportes]
 *     responses:
 *       200:
 *         description: Lista de reportes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/reportes", verificarToken, getReporte);

/**
 * @swagger
 * /api/reportes:
 *   post:
 *     summary: Crea un nuevo reporte
 *     tags: [Reportes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FolioReporte:
 *                 type: string
 *               fechaCreacion:
 *                 type: string
 *                 format: date-time
 *               fechaHoraActualizacion:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: string
 *               comentarios:
 *                 type: string
 *               creadorReporte:
 *                 type: integer
 *               tecnicoAsignado:
 *                 type: integer
 *               IdEquipos:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Reporte creado exitosamente.
 *       400:
 *         description: Error al crear el reporte.
 */
router.post("/reportes", verificarToken, createReporte);

/**
 * @swagger
 * /api/reportes/{id}:
 *   get:
 *     summary: Obtiene un reporte por ID
 *     tags: [Reportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del reporte
 *     responses:
 *       200:
 *         description: Reporte obtenido exitosamente.
 *       404:
 *         description: Reporte no encontrado.
 */
router.get("/reportes/:id", verificarToken, getReporteById);

/**
 * @swagger
 * /api/reportes/{id}:
 *   put:
 *     summary: Actualiza un reporte por ID
 *     tags: [Reportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del reporte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FolioReporte:
 *                 type: string
 *               fechaCreacion:
 *                 type: string
 *                 format: date-time
 *               fechaHoraActualizacion:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: string
 *               comentarios:
 *                 type: string
 *               creadorReporte:
 *                 type: integer
 *               tecnicoAsignado:
 *                 type: integer
 *               IdEquipos:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Reporte actualizado exitosamente.
 *       404:
 *         description: Reporte no encontrado.
 */
router.put("/reportes/:id", verificarToken, updateReporte);

/**
 * @swagger
 * /api/reportes/{id}:
 *   delete:
 *     summary: Elimina un reporte por ID
 *     tags: [Reportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del reporte
 *     responses:
 *       200:
 *         description: Reporte eliminado exitosamente.
 *       404:
 *         description: Reporte no encontrado.
 */
router.delete("/reportes/:id", verificarToken, deleteReporte);

export default router;
