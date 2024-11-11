// routes/tecnicos.js
import express from "express";
import {
  getTecnico,
  createTecnico,
  getTecnicoById,
  updateTecnico,
  deleteTecnico,
} from "../controllers/tecnicos.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tecnicos
 *   description: API para la gestión de técnicos
 */

/**
 * @swagger
 * /api/tecnicos:
 *   get:
 *     summary: Obtiene todos los técnicos
 *     tags: [Tecnicos]
 *     responses:
 *       200:
 *         description: Lista de técnicos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/tecnicos", getTecnico);

/**
 * @swagger
 * /api/tecnicos:
 *   post:
 *     summary: Crea un nuevo técnico
 *     tags: [Tecnicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               ApellidoPa:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               Estatus:
 *                 type: string
 *     responses:
 *       201:
 *         description: Técnico creado exitosamente.
 *       400:
 *         description: Error al crear el técnico.
 */
router.post("/tecnicos", createTecnico);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *   get:
 *     summary: Obtiene un técnico por ID
 *     tags: [Tecnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del técnico
 *     responses:
 *       200:
 *         description: Técnico obtenido exitosamente.
 *       404:
 *         description: Técnico no encontrado.
 */
router.get("/tecnicos/:id", getTecnicoById);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *   put:
 *     summary: Actualiza un técnico por ID
 *     tags: [Tecnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del técnico
 *     requestBody:
 *       required: true
 *       content:
         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               ApellidoPa:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               Estatus:
 *                 type: string
 *     responses:
 *       200:
 *         description: Técnico actualizado exitosamente.
 *       404:
 *         description: Técnico no encontrado.
 */
router.put("/tecnicos/:id", updateTecnico);

/**
 * @swagger
 * /api/tecnicos/{id}:
 *   delete:
 *     summary: Elimina un técnico por ID
 *     tags: [Tecnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del técnico
 *     responses:
 *       200:
 *         description: Técnico eliminado exitosamente.
 *       404:
 *         description: Técnico no encontrado.
 */
router.delete("/tecnicos/:id", deleteTecnico);

export default router;
