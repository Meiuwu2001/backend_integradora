const connect = require("../config/db");


const getCliente = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM clientes;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const createCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO clientes SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

const getClienteById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM cliente WHERE idClientes =?", [
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

const updateCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE cliente SET? WHERE idClientes =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM clientes WHERE idClientes =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
module.exports = {
  getCliente,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
};
