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

export const verificarRol = (rolesPermitidos) => (req, res, next) => {
  const { rol } = req.usuario; // El rol está en el token decodificado
  if (!rolesPermitidos.includes(rol)) {
    return res.status(403).json({ mensaje: "No tienes permisos para acceder" });
  }
  next();
};

// Middleware para verificar token
export const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extraer el token

  if (!token)
    return res.status(403).json({ mensaje: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token, secret); // Reemplaza 'clave_secreta' con la clave usada para firmar
    req.usuario = decoded; // Asigna la información decodificada al request
    next();
  } catch (err) {
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const password = req.body.password;
    const db = await connect();
    const hashedPassword = bcrypt.hashSync(password, 10);
    await db.query("UPDATE users SET password = ? WHERE idusers = ?", [
      hashedPassword,
      req.params.id,
    ]);
    res.json({ status: "ok" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
    await db.end();
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const db = await connect();
    const id = req.params.id;
    await db.query("DELETE FROM users WHERE idusers = ?", [id]);
    res.json({ status: "Succesful Deleted" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
    await db.end();
  }
};

export const getUserById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT user FROM users WHERE idusers =?", [
      req.params.id,
    ]);
    res.json(result[0]);
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while getting data" });
    await db.end();
  }
};
