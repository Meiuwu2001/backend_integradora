import express from "express";
import {
  getUbicacion,
  createUbicacion,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
} from "../controllers/ubicaciones.js";

const router = express.Router();

router.get("/ubicacion", getUbicacion);
//https://backend-integradora.vercel.app/api/ubicacion
router.post("/ubicacion", createUbicacion);

//https://backend-integradora.vercel.app/api/ubicacion/
// {
//     "Nombre": "Sucursal Sur",
//     "Ciudad": "Guadalajara",
//     "Estado": "Jalisco",
//     "CodigoPostal": "45678",
//     "Direccion": "Avenida Vallarta 789"
//   }

router.get("/ubicacion/:id", getUbicacionById);

//https://backend-integradora.vercel.app/api/ubicacion/1

router.put("/ubicacion/:id", updateUbicacion);
//https://backend-integradora.vercel.app/api/ubicacion/1
// {
//     "Nombre": "Sucursal Sur",
//     "Ciudad": "Guadalajara",
//     "Estado": "Jalisco",
//     "CodigoPostal": "45678",
//     "Direccion": "Avenida Vallarta 789"
//   }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/ubicacion/:id", deleteUbicacion);
// https://backend-integradora.vercel.app/api/ubicacion

export default router; // Exportación por defecto
