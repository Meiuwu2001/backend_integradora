import connect from "../config/db.js"; // Importamos la conexión

export const getCliente = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM clientes;");
    res.json(result);
    await db.end(); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end(); 
  }
};

export const createCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO clientes SET ?", [req.body]);
    res.json({ status: "ok" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
    await db.end();
  }
};

export const getClienteById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query(
      "SELECT * FROM clientes WHERE idClientes =?",
      [req.params.id]
    );
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

export const updateCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE clientes SET? WHERE idClientes =?", [
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

export const deleteCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM clientes WHERE idClientes =?", [req.params.id]);
    res.json({ status: "ok" });
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
    await db.end();
  }
};
