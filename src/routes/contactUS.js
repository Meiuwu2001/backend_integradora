// routes/contactUs.js
import express from "express";
import contactControllers from "../controllers/contactUS.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ContactUS
 *   description: API para el manejo de mensajes de contacto
 */

/**
 * @swagger
 * /api/contactUs:
 *   get:
 *     summary: Obtiene todos los mensajes de contacto
 *     tags: [ContactUS]
 *     responses:
 *       200:
 *         description: Lista de mensajes de contacto obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   apellidos:
 *                     type: string
 *                   correo:
 *                     type: string
 *                   telefono:
 *                     type: string
 *                   mensaje:
 *                     type: string
 */
router.get("/contactUs", contactControllers.getContactUS);

/**
 * @swagger
 * /api/contactUs/{id}:
 *   get:
 *     summary: Obtiene un mensaje de contacto por ID
 *     tags: [ContactUS]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del mensaje de contacto
 *     responses:
 *       200:
 *         description: Mensaje de contacto obtenido con éxito.
 *       404:
 *         description: Mensaje de contacto no encontrado.
 */
router.get("/contactUs/:id", contactControllers.getContactUSById);

/**
 * @swagger
 * /api/contactUs:
 *   post:
 *     summary: Crea un nuevo mensaje de contacto
 *     tags: [ContactUS]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               correo:
 *                 type: string
 *               telefono:
 *                 type: string
 *               mensaje:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mensaje de contacto creado con éxito.
 *       400:
 *         description: Error en la creación del mensaje de contacto.
 */
router.post("/contactus", contactControllers.createContactUS);

/**
 * @swagger
 * /api/contactUs/{id}:
 *   put:
 *     summary: Actualiza un mensaje de contacto por ID
 *     tags: [ContactUS]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del mensaje de contacto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               correo:
 *                 type: string
 *               telefono:
 *                 type: string
 *               mensaje:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensaje de contacto actualizado con éxito.
 *       404:
 *         description: Mensaje de contacto no encontrado.
 */
router.put("/contactUs/:id", contactControllers.updateContactUS);

/**
 * @swagger
 * /api/contactUs/{id}:
 *   delete:
 *     summary: Elimina un mensaje de contacto por ID
 *     tags: [ContactUS]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del mensaje de contacto
 *     responses:
 *       200:
 *         description: Mensaje de contacto eliminado con éxito.
 *       404:
 *         description: Mensaje de contacto no encontrado.
 */
router.delete("/contactUs/:id", contactControllers.deleteContactUS);

export default router;
