// routes/tareas.js
import express from "express";
import {
  getTarea,
  createTarea,
  getTareaById,
  updateTarea,
  deleteTarea,
} from "../controllers/tareas.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tareas
 *   description: API para la gestión de tareas
 */

/**
 * @swagger
 * /api/tareas:
 *   get:
 *     summary: Obtiene todas las tareas
 *     tags: [Tareas]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/tareas", getTarea);

/**
 * @swagger
 * /api/tareas:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Titulo:
 *                 type: string
 *               Descripcion:
 *                 type: string
 *               Observaciones:
 *                 type: string
 *               Estatus:
 *                 type: string
 *               idReportes:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 *       400:
 *         description: Error al crear la tarea.
 */
router.post("/tareas", createTarea);

/**
 * @swagger
 * /api/tareas/{id}:
 *   get:
 *     summary: Obtiene una tarea por ID
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea obtenida exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.get("/tareas/:id", getTareaById);

/**
 * @swagger
 * /api/tareas/{id}:
 *   put:
 *     summary: Actualiza una tarea por ID
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Titulo:
 *                 type: string
 *               Descripcion:
 *                 type: string
 *               Observaciones:
 *                 type: string
 *               Estatus:
 *                 type: string
 *               idReportes:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.put("/tareas/:id", updateTarea);

/**
 * @swagger
 * /api/tareas/{id}:
 *   delete:
 *     summary: Elimina una tarea por ID
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.delete("/tareas/:id", deleteTarea);

export default router;
