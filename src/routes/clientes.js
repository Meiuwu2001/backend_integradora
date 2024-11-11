// routes/clientes.js
import express from "express";
import {
  getCliente,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
} from "../controllers/clientes.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: API para manejo de clientes
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   Nombre:
 *                     type: string
 *                   ApellidoPa:
 *                     type: string
 *                   ApellidoMa:
 *                     type: string
 *                   Telefono:
 *                     type: string
 *                   CorreoElectronico:
 *                     type: string
 */
router.get("/clientes", getCliente);

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clientes]
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
 *               ApellidoMa:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               CorreoElectronico:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado con éxito.
 *       400:
 *         description: Error en la creación del cliente.
 */
router.post("/clientes", createCliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente obtenido con éxito.
 *       404:
 *         description: Cliente no encontrado.
 */
router.get("/clientes/:id", getClienteById);

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualiza un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
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
 *               ApellidoMa:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               CorreoElectronico:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito.
 *       404:
 *         description: Cliente no encontrado.
 */
router.put("/clientes/:id", updateCliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito.
 *       404:
 *         description: Cliente no encontrado.
 */
router.delete("/clientes/:id", deleteCliente);

export default router;
