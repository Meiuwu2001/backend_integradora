import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import contactUs from "./routes/contactUS.js";
import authRoutes from "./routes/authRoutes.js";
import clientes from "./routes/clientes.js";
import equipos from "./routes/equipos.js";
import movimientosInventario from "./routes/movimientosInventario.js";
import productos from "./routes/productos.js";
import reportes from "./routes/reportes.js";
import tareas from "./routes/tareas.js";
import tecnicos from "./routes/tecnicos.js";
import ubicaciones from "./routes/ubicaciones.js";
import { swaggerSpec } from "./utils/api-docs.js";
import swaggerUI from "swagger-ui-express";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Permite todas las solicitudes desde cualquier dominio
  })
);

app.use("/api", contactUs);
app.use("/api", clientes);
app.use("/api", equipos);
app.use("/api", movimientosInventario);
app.use("/api", productos);
app.use("/api", reportes);
app.use("/api", tareas);
app.use("/api", tecnicos);
app.use("/api", ubicaciones);
app.use("/api/auth", authRoutes);

// Sirve los archivos estáticos de Swagger UI
app.use(
  "/api-docs", // Ruta donde quieres ver la documentación de la API
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, {
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css", // O puedes usar un archivo CSS local si lo prefieres
  })
);

app.get("/", (req, res) => {
  res.send(
    "Hello, from Express on Vercel!, Go to /api-docs for documentation."
  );
});

// Export the app as a handler for Vercel's serverless function
export default app;
