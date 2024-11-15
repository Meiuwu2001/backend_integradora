import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connect from "../config/db.js"; // Importamos la conexión
import { secret, expiresIn } from "../config/jwt.js";

// Registrar un usuario
export const registrar = async (req, res) => {
  const { user, password, rol } = req.body;
  const connection = await connect(); // Conectar a la DB

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = "INSERT INTO users (user, password, rol) VALUES (?, ?, ?)";
    const [result] = await connection.execute(query, [
      user,
      hashedPassword,
      rol,
    ]);

    res.status(201).json({
      mensaje: "Usuario registrado exitosamente",
      userId: result.insertId, // Enviar el idusers en la respuesta
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error al registrar usuario", error });
  } finally {
    await connection.end(); // Cerrar conexión
  }
};

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
  const { user, password } = req.body;

  try {
    const connection = await connect(); // Conectar a la DB

    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE user = ?",
      [user]
    );
    await connection.end(); // Cerrar conexión

    const usuario = rows[0];

    if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    // Crear token JWT
    const token = jwt.sign(
      { id: usuario.idusers, user: usuario.user, rol: usuario.rol },
      secret,
      {
        expiresIn,
      }
    );

    res.json({ mensaje: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ mensaje: "Error al iniciar sesión", error });
  }
};

// Middleware para verificar token
export const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(403).json({ mensaje: "Token no proporcionado" });

  jwt.verify(token, secret, (err, decoded) => {
    if (err)
      return res.status(401).json({ mensaje: "Token inválido o expirado" });
    req.usuario = decoded;
    next();
  });
};

export const updatePassword = async (req, res) => {
  try {
    const db = await connect();
    await db.query ("UPDATE users SET password = ? WHERE idusers = ?",[
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok"});
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data"});
    await db.end();

  }
};