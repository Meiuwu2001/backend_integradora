const connect = require("../config/db");


const getTecnico = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM tecnicos;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const createTecnico = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO tecnicos SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

const getTecnicoById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM Tecnico WHERE idTecnicos =?", [
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

const updateTecnico = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE Tecnico SET? WHERE idTecnicos =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

const deleteTecnico = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM tecnicos WHERE idTecnicos =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
module.exports = {
  getTecnico,
  createTecnico,
  getTecnicoById,
  updateTecnico,
  deleteTecnico,
};
