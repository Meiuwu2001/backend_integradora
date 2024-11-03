const express = require("express")
const {getEquipo, createEquipo, getEquipoById, updateEquipo, deleteEquipo} = require("../controllers/equipos");

const router = express.Router();

router.get("/equipos", getEquipo)
router.post("/equipos", createEquipo)
router.get("/equipos/:id", getEquipoById)
router.put("/equipos/:id", updateEquipo)
router.delete("/equipos/:id", deleteEquipo)


module.exports = router;