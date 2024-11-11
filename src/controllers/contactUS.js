// controllers/contactUS.js
import connect from "../config/db.js";
import { Resend } from 'resend';

const resend = new Resend("re_jQriAvK3_7eQxf7jhP82Y2reX6k7NUWrE");

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

      // Enviar correo de confirmación usando Resend
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "rancheritostech@gmail.com", // Puedes usar req.body.email si deseas enviar el correo al solicitante
        subject: "Nuevo formulario de contacto recibido",
        html: `
          <h1>Nuevo formulario de contacto</h1>
          <p><strong>Nombre:</strong> ${req.body.nombre}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Mensaje:</strong> ${req.body.mensaje}</p>
        `,
      });

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
