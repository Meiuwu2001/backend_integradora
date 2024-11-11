// routes/equipos.js
import express from "express";
import {
  getEquipo,
  createEquipo,
  getEquipoById,
  updateEquipo,
  deleteEquipo,
} from "../controllers/equipos.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Equipos
 *   description: API para el manejo de equipos
 */

/**
 * @swagger
 * /api/equipos:
 *   get:
 *     summary: Obtiene todos los equipos
 *     tags: [Equipos]
 *     responses:
 *       200:
 *         description: Lista de equipos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   Estatus:
 *                     type: string
 *                   NumeroEquipo:
 *                     type: string
 *                   NumeroSerie:
 *                     type: string
 *                   IdProductos:
 *                     type: integer
 *                   idUbicaciones:
 *                     type: integer
 */
router.get("/equipos", getEquipo);

/**
 * @swagger
 * /api/equipos:
 *   post:
 *     summary: Crea un nuevo equipo
 *     tags: [Equipos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Estatus:
 *                 type: string
 *               NumeroEquipo:
 *                 type: string
 *               NumeroSerie:
 *                 type: string
 *               IdProductos:
 *                 type: integer
 *               idUbicaciones:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Equipo creado con éxito.
 *       400:
 *         description: Error en la creación del equipo.
 */
router.post("/equipos", createEquipo);

/**
 * @swagger
 * /api/equipos/{id}:
 *   get:
 *     summary: Obtiene un equipo por ID
 *     tags: [Equipos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del equipo
 *     responses:
 *       200:
 *         description: Equipo obtenido con éxito.
 *       404:
 *         description: Equipo no encontrado.
 */
router.get("/equipos/:id", getEquipoById);

/**
 * @swagger
 * /api/equipos/{id}:
 *   put:
 *     summary: Actualiza un equipo por ID
 *     tags: [Equipos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del equipo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Estatus:
 *                 type: string
 *               NumeroEquipo:
 *                 type: string
 *               NumeroSerie:
 *                 type: string
 *               IdProductos:
 *                 type: integer
 *               idUbicaciones:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Equipo actualizado con éxito.
 *       404:
 *         description: Equipo no encontrado.
 */
router.put("/equipos/:id", updateEquipo);

/**
 * @swagger
 * /api/equipos/{id}:
 *   delete:
 *     summary: Elimina un equipo por ID
 *     tags: [Equipos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del equipo
 *     responses:
 *       200:
 *         description: Equipo eliminado con éxito.
 *       404:
 *         description: Equipo no encontrado.
 */
router.delete("/equipos/:id", deleteEquipo);

export default router;
