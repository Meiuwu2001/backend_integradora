import connect from "../config/db.js"; // Importamos la conexión


export const getEquipo = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM equipos;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createEquipo = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO equipos SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getEquipoById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM equipos WHERE idEquipos =?", [
      req.params.id,
    ]);
    if (!result.length) {
      return res.status(404).json({ error: "Equipo not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteEquipo = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM equipos WHERE idEquipos =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};

