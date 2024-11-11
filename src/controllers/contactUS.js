// controllers/contactUS.js
import connect from "../config/db.js";

import { Resend } from "resend";

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
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="text-align: center; color: #007bff;">Nuevo formulario de contacto</h1>
            <p style="font-size: 16px;">Hola, has recibido un nuevo mensaje de contacto con los siguientes detalles:</p>
      
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Nombre:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.body.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Apellidos:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.body.apellidos}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.body.telefono}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.body.correo}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Mensaje:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.body.mensaje}</td>
              </tr>
            </table>
      
            <p style="font-size: 14px; color: #666; margin-top: 20px; text-align: center;">
              Gracias por utilizar nuestros servicios.
            </p>
          </div>
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
