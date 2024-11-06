import connect from "../config/db.js";


export const getUbicacion = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM ubicaciones;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createUbicacion = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO ubicaciones SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getUbicacionById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM Ubicacion WHERE idUbicaciones =?", [
      req.params.id,
    ]);
    if (!result.length) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const updateUbicacion = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE Ubicacion SET? WHERE idUbicaciones =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteUbicacion = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM ubicaciones WHERE idUbicaciones =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
