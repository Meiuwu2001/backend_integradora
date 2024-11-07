import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import contactUs from "../src/routes/contactUS.js";
import authRoutes from "../src/routes/authRoutes.js";
import clientes from "../src/routes/clientes.js";
import equipos from "../src/routes/equipos.js";
import movimientosInventario from "../src/routes/movimientosInventario.js";
import productos from "../src/routes/productos.js";
import ReportehasEquipos from "../src/routes/ReportehasEquipo.js";
import reportes from "../src/routes/reportes.js";
import tareas from "../src/routes/tareas.js";
import tecnicos from "../src/routes/tecnicos.js";
import ubicaciones from "../src/routes/ubicaciones.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json()); // Parsear JSON
app.use(cors());

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
app.use("/api/auth", authRoutes); // Enlazar rutas de autenticación

app.get("/", (req, res) => {
    res.send("Hello, Netlify!");
  });
export default app;
