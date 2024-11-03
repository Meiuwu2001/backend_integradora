const express = require("express")
const {getProducto, createProducto, getProductoById, updateProducto, deleteProducto} = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProducto)
router.post("/productos", createProducto)
router.get("/productos/:id", getProductoById)
router.put("/productos/:id", updateProducto)
router.delete("/productos/:id", deleteProducto)


module.exports = router;