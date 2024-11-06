import express from  "express";
import {getProducto, createProducto, getProductoById, updateProducto, deleteProducto} from "../controllers/productos.js";

const router = express.Router();

router.get("/productos", getProducto)
router.post("/productos", createProducto)
router.get("/productos/:id", getProductoById)
router.put("/productos/:id", updateProducto)
router.delete("/productos/:id", deleteProducto)


export default router;  // Exportación por defecto
