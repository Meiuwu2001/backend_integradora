// controllers/contactUS.js
import connect from "../config/db.js";

const contactControllers = {
  getContactUS: async (req, res) => {
    try {
      const db = await connect();
      const [result] = await db.query("SELECT * FROM contactus;");
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getContactUSById: async (req, res) => {
    try {
      const db = await connect();
      const [result] = await db.query(
        "SELECT * FROM contactus WHERE IdContactUS = ?",
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
  },

  createContactUS: async (req, res) => {
    try {
      const db = await connect();
      await db.query("INSERT INTO contactus SET ?", [req.body]);
      res.json({ status: "ok" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating data" });
    }
  },

  updateContactUS: async (req, res) => {
    try {
      const db = await connect();
      await db.query("UPDATE contactus SET ? WHERE IdContactUS = ?", [
        req.body,
        req.params.id,
      ]);
      res.json({ status: "ok" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while updating data" });
    }
  },

  deleteContactUS: async (req, res) => {
    try {
      const db = await connect();
      await db.query("DELETE FROM contactus WHERE IdContactUS = ?", [
        req.params.id,
      ]);
      res.json({ status: "ok" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting data" });
    }
  },
};

export default contactControllers;
