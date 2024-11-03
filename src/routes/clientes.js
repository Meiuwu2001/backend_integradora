const express = require("express")
const {getCliente, createCliente, getClienteById, updateCliente, deleteCliente} = require("../controllers/clientes");

const router = express.Router();

router.get("/clientes", getCliente)
router.post("/clientes", createCliente)
router.get("/clientes/:id", getClienteById)
router.put("/clientes/:id", updateCliente)
router.delete("/clientes/:id", deleteCliente)


module.exports = router;