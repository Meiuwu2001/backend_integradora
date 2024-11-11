import express from "express";
import {
  getTecnico,
  createTecnico,
  getTecnicoById,
  updateTecnico,
  deleteTecnico,
} from "../controllers/tecnicos.js";

const router = express.Router();

router.get("/tecnicos", getTecnico);
//https://backend-integradora.vercel.app/api/tecnicos
router.post("/tecnicos", createTecnico);
//https://backend-integradora.vercel.app/api/tecnicos
// {
//     "Nombre": "Carlos",
//     "ApellidoPa": "López",
//     "Telefono": "555-9876",
//     "Estatus": "Inactivo"
//   }

router.get("/tecnicos/:id", getTecnicoById);
//https://backend-integradora.vercel.app/api/tecnicos/1

router.put("/tecnicos/:id", updateTecnico);
//https://backend-integradora.vercel.app/api/tecnicos/1
// {
//     "Nombre": "Juan",
//     "ApellidoPa": "Pérez",
//     "Telefono": "555-1234",
//     "Estatus": "Inactivo"
//   }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/tecnicos/:id", deleteTecnico);
//https://backend-integradora.vercel.app/api/tecnicos/1

export default router; // Exportación por defecto
