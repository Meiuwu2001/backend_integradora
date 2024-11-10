import connect from "../config/db.js";


export const getMovimientos_inventario = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM movimientos_inventario;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createMovimientosInventario = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO movimientos_inventario SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getMovimientoInventarioById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM movimientos_inventario WHERE idMovimiento =?", [
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

export const updateMovimientoInventario = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE movimientos_inventario SET? WHERE idMovimiento =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteMovimiento = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM movimientos_inventario WHERE idMovimiento =?", [req.params.id]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};

