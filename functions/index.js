import app from "../app.js";
import serverless from "serverless-http";

const port = process.env.PORT || 5000;

let handler;

// Si estamos en un entorno serverless, exportamos el handler
if (process.env.NODE_ENV === "production") {
  handler = serverless(app);
} else {
  // En entornos locales, iniciamos el servidor
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

// Exportar handler en un módulo ES
export { handler }; // Cambié module.exports.handler a export { handler }