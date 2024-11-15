import connect from "../config/db.js";

export const getTecnico = async (req, res) => {
  let db;
  try {
    db = await connect();
    const [result] = await db.query("SELECT * FROM tecnicos;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    if (db) await db.end();
  }
};

export const createTecnico = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("INSERT INTO tecnicos SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  } finally {
    if (db) await db.end();
  }
};

export const getTecnicoById = async (req, res) => {
  let db;
  try {
    db = await connect();
    const [result] = await db.query(
      "SELECT * FROM tecnicos WHERE idTecnicos = ?",
      [req.params.id]
    );
    if (!result.length) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    if (db) await db.end();
  }
};

export const updateTecnico = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("UPDATE tecnicos SET ? WHERE idTecnicos = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  } finally {
    if (db) await db.end();
  }
};

export const deleteTecnico = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("DELETE FROM tecnicos WHERE idTecnicos = ?", [
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  } finally {
    if (db) await db.end();
  }
};
