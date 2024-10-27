const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connect = require("../config/db"); // Importamos la conexión
const { secret, expiresIn } = require("../config/jwt");

// Registrar un usuario
exports.registrar = async (req, res) => {
  const { user, password, rol } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const connection = await connect(); // Conectar a la DB

    const query = "INSERT INTO users (user, password, rol) VALUES (?, ?, ?)";
    const [result] = await connection.execute(query, [
      user,
      hashedPassword,
      rol,
    ]);

    await connection.end(); // Cerrar conexión

    res
      .status(201)
      .json({
        mensaje: "Usuario registrado exitosamente",
        userId: result.insertId,
      });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error al registrar usuario", error });
  }
};

// Iniciar sesión
exports.iniciarSesion = async (req, res) => {
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
exports.verificarToken = (req, res, next) => {
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
