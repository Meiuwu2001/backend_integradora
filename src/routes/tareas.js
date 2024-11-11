import express from "express";
import {
  getTarea,
  createTarea,
  getTareaById,
  updateTarea,
  deleteTarea,
} from "../controllers/tareas.js";

const router = express.Router();

router.get("/Tareas", getTarea);
//https://backend-integradora.vercel.app/api/tareas
router.post("/Tareas", createTarea);
//https://backend-integradora.vercel.app/api/tareas
// {
//     "Titulo": "Revisión de Impresora",
//     "Descripcion": "Verificar el estado de la impresora y limpiar cabezales",
//     "Observaciones": "Se recomienda revisar cada seis meses",
//     "Estatus": "Pendiente",
//     "idReportes": 1
//   }
router.get("/Tareas/:id", getTareaById);
// https://backend-integradora.vercel.app/api/tareas/1
router.put("/Tareas/:id", updateTarea);
// https://backend-integradora.vercel.app/api/tareas/1
// {
//     "Titulo": "Revisión de Impresora",
//     "Descripcion": "Verificar el estado de la impresora y limpiar cabezales",
//     "Observaciones": "Se recomienda revisar cada seis meses",
//     "Estatus": "Pendiente",
//     "idReportes": 1
//   }
router.delete("/Tareas/:id", deleteTarea);

// https://backend-integradora.vercel.app/api/tareas/1

export default router; // Exportación por defecto
