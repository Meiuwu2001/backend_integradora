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
router.post("/clientes", createCliente);
router.get("/clientes/:id", getClienteById);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);

export default router; // Exportación por defecto
