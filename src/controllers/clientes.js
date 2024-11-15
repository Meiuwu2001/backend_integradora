import connect from "../config/db.js"; // Importamos la conexión

export const getClientes = async (req, res) => {
  let db;
  try {
    db = await connect();
    const [result] = await db.query("SELECT * FROM clientes;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data" });
  } finally {
    if (db) await db.end(); // Asegúrate de cerrar la conexión siempre
  }
};

export const createCliente = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("INSERT INTO clientes SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  } finally {
    if (db) await db.end(); // Asegúrate de cerrar la conexión siempre
  }
};

export const getClienteById = async (req, res) => {
  let db;
  try {
    db = await connect();
    const [result] = await db.query(
      "SELECT * FROM clientes WHERE idClientes =?",
      [req.params.id]
    );
    if (!result.length) {
      return res.status(404).json({ error: "Cliente not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data" });
  } finally {
    if (db) await db.end(); // Asegúrate de cerrar la conexión siempre
  }
};

export const updateCliente = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("UPDATE clientes SET ? WHERE idClientes =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  } finally {
    if (db) await db.end(); // Asegúrate de cerrar la conexión siempre
  }
};

export const deleteCliente = async (req, res) => {
  let db;
  try {
    db = await connect();
    await db.query("DELETE FROM clientes WHERE idClientes =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  } finally {
    if (db) await db.end(); // Asegúrate de cerrar la conexión siempre
  }
};
