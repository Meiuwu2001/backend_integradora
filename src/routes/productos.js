import express from "express";
import {
  getProducto,
  createProducto,
  getProductoById,
  updateProducto,
  deleteProducto,
} from "../controllers/productos.js";

const router = express.Router();

router.get("/productos", getProducto);
// https://backend-integradora.vercel.app/api/productos
router.post("/productos", createProducto);
// https://backend-integradora.vercel.app/api/productos
// {
//     "modelo": "ModeloY",
//     "Categoria": "Electrodomésticos",
//     "Marca": "MarcaB",
//     "Tipo": "Tipo2",
//     "Existencia": 30,
//     "Caracteristicas": "Otra característica del producto"
//   }
router.get("/productos/:id", getProductoById);
// https://backend-integradora.vercel.app/api/productos/1
router.put("/productos/:id", updateProducto);
// https://backend-integradora.vercel.app/api/productos/1
// {
//     "modelo": "ModeloY",
//     "Categoria": "Electrodomésticos",
//     "Marca": "MarcaB",
//     "Tipo": "Tipo2",
//     "Existencia": 30,
//     "Caracteristicas": "Otra característica del producto"
//   }
//En los update el Json puede ir con los campos que sean siempre y cuando esten en la BD, la consulta
//se crea depenediento del Request Body
router.delete("/productos/:id", deleteProducto);
// https://backend-integradora.vercel.app/api/productos/1

export default router; // Exportación por defecto
