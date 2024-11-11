// routes/productos.js
import express from "express";
import {
  getProducto,
  createProducto,
  getProductoById,
  updateProducto,
  deleteProducto,
} from "../controllers/productos.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para la gestión de productos
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   modelo:
 *                     type: string
 *                   Categoria:
 *                     type: string
 *                   Marca:
 *                     type: string
 *                   Tipo:
 *                     type: string
 *                   Existencia:
 *                     type: integer
 *                   Caracteristicas:
 *                     type: string
 */
router.get("/productos", getProducto);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *               Categoria:
 *                 type: string
 *               Marca:
 *                 type: string
 *               Tipo:
 *                 type: string
 *               Existencia:
 *                 type: integer
 *               Caracteristicas:
 *                 type: string
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Error al crear el producto.
 */
router.post("/productos", createProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente.
 *       404:
 *         description: Producto no encontrado.
 */
router.get("/productos/:id", getProductoById);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *               Categoria:
 *                 type: string
 *               Marca:
 *                 type: string
 *               Tipo:
 *                 type: string
 *               Existencia:
 *                 type: integer
 *               Caracteristicas:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 */
router.put("/productos/:id", updateProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 */
router.delete("/productos/:id", deleteProducto);

export default router;
