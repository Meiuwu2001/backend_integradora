const express = require("express")
const {getReporte, createReporte, getReporteById, updateReporte, deleteReporte} = require("../controllers/reportes");

const router = express.Router();

router.get("/reportes", getReporte)
router.post("/reportes", createReporte)
router.get("/reportes/:id", getReporteById)
router.put("/reportes/:id", updateReporte)
router.delete("/reportes/:id", deleteReporte)


module.exports = router;