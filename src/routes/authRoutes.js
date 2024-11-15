// routes/authRoutes.js
import express from "express";
import {
  registrar,
  iniciarSesion,
  verificarToken,
  updatePassword,
  DeleteUser,
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

router.put("/update-password/:id", updatePassword);

router.delete("/delete-user/:id", DeleteUser);



export default router;
