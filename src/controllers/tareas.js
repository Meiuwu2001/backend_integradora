const connect = require("../config/db");


const getTarea = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM tareas;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const createTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO tareas SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

const getTareaById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM Tarea WHERE idTareas =?", [
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

const updateTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE Tarea SET? WHERE idTareas =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

const deleteTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM tareas WHERE idTareas =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
module.exports = {
  getTarea,
  createTarea,
  getTareaById,
  updateTarea,
  deleteTarea,
};
