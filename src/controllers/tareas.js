import connect from "../config/db.js";

export const getTarea = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM tareas;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end();
  }
};

export const createTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO tareas SET ?", [req.body]);
    res.json({ status: "ok" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
    await db.end();
  }
};

export const getTareaById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM tareas WHERE idTareas =?", [
      req.params.id,
    ]);
    if (!result.length) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(result[0]);
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end();
  }
};

export const updateTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE tareas SET? WHERE idTareas =?", [
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

export const deleteTarea = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM tareas WHERE idTareas =?", [req.params.id]);
    res.json({ status: "ok" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
    await db.end();
  }
};
