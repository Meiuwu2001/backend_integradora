import connect from"../config/db.js";

// anadir un export a todos los comst de funciones principales
export const getReporte = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM reportes;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO reportes SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getReporteById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM reportes WHERE idReporte =?", [
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

export const updateReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE reportes SET? WHERE idReporte =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM reportes WHERE idReporte =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
