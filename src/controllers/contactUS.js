import connect from "../config/db.js";



export const getContactUS = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query("SELECT * FROM contactus;");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const createContactUS = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO contactus SET ?", [req.body]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};

export const getContactUSById = async (req, res) => {
  try {
    const db = await connect();
    const [result] = await db.query(
      "SELECT * FROM contactus WHERE IdContactUS =?",
      [req.params.id]
    );
    if (!result.length) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const updateContactUS = async (req, res) => {
  try {
    const db = await connect();
    await db.query("UPDATE contactus SET? WHERE IdContactUS =?", [
      req.body,
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating data" });
  }
};

export const deleteContactUS = async (req, res) => {
  try {
    const db = await connect();
    await db.query("DELETE FROM contactus WHERE IdContactUS =?", [
      req.params.id,
    ]);
    res.json({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
};
