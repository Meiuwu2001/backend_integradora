import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import contactUs from "./routes/contactUS.js";
import authRoutes from "./routes/authRoutes.js";
import clientes from "./routes/clientes.js";
import equipos from "./routes/equipos.js";
import movimientosInventario from "./routes/movimientosInventario.js";
import productos from "./routes/productos.js";
import ReportehasEquipos from "./routes/ReportehasEquipo.js";
import reportes from "./routes/reportes.js";
import tareas from "./routes/tareas.js";
import tecnicos from "./routes/tecnicos.js";
import ubicaciones from "./routes/ubicaciones.js";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/.netlify/functions/server", router);

app.use("/api", contactUs);
app.use("/api", clientes);
app.use("/api", equipos);
app.use("/api", movimientosInventario);
app.use("/api", productos);
app.use("/api", ReportehasEquipos);
app.use("/api", reportes);
app.use("/api", tareas);
app.use("/api", tecnicos);
app.use("/api", ubicaciones);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Netlify!");
});

export default app;
