const express = require("express")
const {getReportehasEquipo, createReportehasEquipo, getReportehasEquipoById, updateReportehasEquipo, deleteReportehasEquipo} = require("../controllers/ReportehasEquipos");

const router = express.Router();

router.get("/ReportehasEquipos", getReportehasEquipo)
router.post("/ReportehasEquipos", createReportehasEquipo)
// router.get("/ReportehasEquipos/:id", getReportehasEquipoById)
// router.put("/ReportehasEquipos/:id", updateReportehasEquipo)
// router.delete("/ReportehasEquipos/:id", deleteReportehasEquipo)


module.exports = router;