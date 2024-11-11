import express from "express";
import {
  getReporte,
  createReporte,
  getReporteById,
  updateReporte,
  deleteReporte,
} from "../controllers/reportes.js";

const router = express.Router();

router.get("/reportes", getReporte);
//https://backend-integradora.vercel.app/api/reportes
router.post("/reportes", createReporte);
// https://backend-integradora.vercel.app/api/reportes
// {
//     "FolioReporte": "FR-2023-0003",
//     "fechaCreacion": "2023-11-02 09:00:00",
//     "fechaHoraActualizacion": "2023-11-02 11:30:00",
//     "estado": "ejecucion",
//     "comentarios": "Requiere piezas de repuesto",
//     "creadorReporte": 3,
//     "tecnicoAsignado": 3,
//      "IdEquipos": 1
//   }
router.get("/reportes/:id", getReporteById);
//backend-integradora.vercel.app/api/reportes/1
router.put("/reportes/:id", updateReporte);
//https://backend-integradora.vercel.app/api/reportes
// {
//     "FolioReporte": "FR-2023-0003",
//     "fechaCreacion": "2023-11-02 09:00:00",
//     "fechaHoraActualizacion": "2023-11-02 11:30:00",
//     "estado": "ejecucion",
//     "comentarios": "Requiere piezas de repuesto",
//     "creadorReporte": 3,
//     "tecnicoAsignado": 3,
//      "IdEquipos": 1
//   }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/reportes/:id", deleteReporte);
// https://backend-integradora.vercel.app/api/reportes/1

export default router; // Exportación por defecto
