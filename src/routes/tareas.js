const express = require("express")
const {getTarea, createTarea, getTareaById, updateTarea, deleteTarea} = require("../controllers/Tarea");

const router = express.Router();

router.get("/Tareas", getTarea)
router.post("/Tareas", createTarea)
router.get("/Tareas/:id", getTareaById)
router.put("/Tareas/:id", updateTarea)
router.delete("/Tareas/:id", deleteTarea)


module.exports = router;