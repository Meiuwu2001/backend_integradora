const express = require("express")
const {getUbicacion, createUbicacion, getUbicacionById, updateUbicacion, deleteUbicacion} = require("../controllers/ubicacion");

const router = express.Router();

router.get("/ubicacion", getUbicacion)
router.post("/ubicacion", createUbicacion)
router.get("/ubicacion/:id", getUbicacionById)
router.put("/ubicacion/:id", updateUbicacion)
router.delete("/ubicacion/:id", deleteUbicacion)


module.exports = router;