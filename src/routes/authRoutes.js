// routes/authRoutes.js
import express from "express";
import {
  registrar,
  iniciarSesion,
  verificarToken,
  updatePassword,
  DeleteUser,
  getUserById,
  verificarRol,
} from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: API para manejo de autenticación
 */

/**
 * @swagger
 * /api/auth/registrar:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: Nombre de usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *               rol:
 *                 type: string
 *                 description: Rol del usuario (por ejemplo, cliente).
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito.
 *       400:
 *         description: Error en el registro del usuario.
 */
router.post("/registrar", registrar);

/**
 * @swagger
 * /api/auth/iniciar-sesion:
 *   post:
 *     summary: Inicia sesión para un usuario registrado
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: Nombre de usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *       401:
 *         description: Credenciales incorrectas.
 */
router.post("/iniciar-sesion", iniciarSesion);

/**
 * @swagger
 * /api/auth/perfil:
 *   get:
 *     summary: Obtiene el perfil del usuario autenticado
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 usuario:
 *                   type: object
 *                   description: Información del usuario autenticado.
 *       403:
 *         description: Acceso no autorizado.
 */
router.get("/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Acceso autorizado", usuario: req.usuario });
});

/**
 * @swagger
 * /auth/update-password/{id}:
 *   put:
 *     summary: Actualiza la contraseña de un usuario
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: Nueva contraseña del usuario.
 *     responses:
 *       200:
 *         description: Contraseña actualizada con éxito.
 *       403:
 *         description: Acceso no autorizado.
 *       500:
 *         description: Error al actualizar la contraseña.
 */
router.put("/update-password/:id", verificarToken, updatePassword);

/**
 * @swagger
 * /auth/delete-user/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito.
 *       403:
 *         description: Acceso no autorizado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete("/delete-user/:id", verificarToken, DeleteUser);

/**
 * @swagger
 * /auth/getUser/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información del usuario obtenida con éxito.
 *       403:
 *         description: Acceso no autorizado.
 *       500:
 *         description: Error al obtener el usuario.
 */
router.get("/getUser/:id", verificarToken, getUserById);

export default router;
