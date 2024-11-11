import express from "express";
import {
  getEquipo,
  createEquipo,
  getEquipoById,
  updateEquipo,
  deleteEquipo,
} from "../controllers/equipos.js";

const router = express.Router();

router.get("/equipos", getEquipo);
// https://backend-integradora.vercel.app/api/equipos
router.post("/equipos", createEquipo);
// https://backend-integradora.vercel.app/api/equipos
// {
//   "Estatus": "Activo",
//   "NumeroEquipo": "EQ0011",
//   "NumeroSerie": "NS0011231",
//   "IdProductos": 1,
//   "idUbicaciones": 1
// }
router.get("/equipos/:id", getEquipoById);
// https://backend-integradora.vercel.app/api/clientes/2
router.put("/equipos/:id", updateEquipo);
// https://backend-integradora.vercel.app/api/equipos/1
// {
//   "Estatus": "Inactivo",
//   "NumeroEquipo": "EQ0011",
//   "NumeroSerie": "NS0011231",
//   "IdProductos": 1,
//   "idUbicaciones": 1
// }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/equipos/:id", deleteEquipo);
// https://backend-integradora.vercel.app/api/equipos/1

export default router; // Exportación por defecto
