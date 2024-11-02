const connect = require("../config/db");


const getReporte = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM reportes;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const createReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO reportes SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

const getReporteById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM Reporte WHERE idReportes =?", [
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

const updateReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE Reporte SET? WHERE idReportes =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

const deleteReporte = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM reportes WHERE idReportes =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
module.exports = {
  getReporte,
  createReporte,
  getReporteById,
  updateReporte,
  deleteReporte,
};
