import express from "express";
import {
  getCliente,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
} from "../controllers/clientes.js";

const router = express.Router();

router.get("/clientes", getCliente);
// https://backend-integradora.vercel.app/api/clientes
router.post("/clientes", createCliente);
// https://backend-integradora.vercel.app/api/clientes
// {
//   "Nombre": "Carla",
//   "ApellidoPa": "Ramírez",
//   "ApellidoMa": "Sánchez",
//   "Telefono": "5551122334",
//   "CorreoElectronico": "Carla.ramirez@example.com"
// }
router.get("/clientes/:id", getClienteById);
// https://backend-integradora.vercel.app/api/clientes/2
router.put("/clientes/:id", updateCliente);
// https://backend-integradora.vercel.app/api/clientes/2
// {
//   "Nombre": "Carlos",
//   "ApellidoPa": "Ramírez",
//   "ApellidoMa": "Sánchez",
//   "Telefono": "5551122334",
//   "CorreoElectronico": "carlos.ramirez_updated@example.com"
// }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body

router.delete("/clientes/:id", deleteCliente);
// https://backend-integradora.vercel.app/api/clientes/2

export default router; // Exportación por defecto
