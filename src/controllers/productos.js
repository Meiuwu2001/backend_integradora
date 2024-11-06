import  connect from "../config/db.js";


export const getProducto = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM productos;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createProducto = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO productos SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM productos WHERE idProductos =?", [
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

export const updateProducto = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE productos SET? WHERE idProductos =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM productos WHERE idProductos =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
