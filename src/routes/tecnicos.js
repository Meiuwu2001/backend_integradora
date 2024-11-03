const express = require("express")
const {getTecnico, createTecnico, getTecnicoById, updateTecnico, deleteTecnico} = require("../controllers/tecnicos");

const router = express.Router();

router.get("/tecnicos", getTecnico)
router.post("/tecnicos", createTecnico)
router.get("/tecnicos/:id", getTecnicoById)
router.put("/tecnicos/:id", updateTecnico)
router.delete("/tecnicos/:id", deleteTecnico)


module.exports = router;