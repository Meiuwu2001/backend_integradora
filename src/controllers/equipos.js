import connect from "../config/db.js"; // Importamos la conexión

export const getEquipo = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM equipos;");
    res.json(result);
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end(); 
  }
};

export const getEquipoUbicacion = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query(
      "SELECT e.IdEquipos, p.modelo, p.categoria, p.marca, e.numeroSerie, e.numeroEquipo, e.estatus, ub.nombre, ub.ciudad, ub.estado, ub.codigoPostal, ub.direccion FROM productos p RIGHT JOIN equipos e ON p.idProductos = e.idProductos  LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones"
    );
    res.json(result);
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end(); 
  }
};

export const createEquipo = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO equipos SET ?", [req.body]);
    res.json({ status: "ok" });
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
    await db.end(); 
  }
};

export const getEquipoById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query(
      "SELECT * FROM equipos WHERE idEquipos =?",
      [req.params.id]
    );
    if (!result.length) {
      return res.status(404).json({ error: "Equipo not found" });
    }
    res.json(result[0]);
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end(); 
  }
};

export const updateEquipo = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE equipos SET? WHERE idEquipos =?", [
      req.body,
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

export const deleteEquipo = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM equipos WHERE idEquipos =?", [req.params.id]);
    res.json({ status: "ok" });
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
    await db.end(); 
  }
};
