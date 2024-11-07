import express from "express";
const router = express.Router();

import {
  getContactUS,
  getContactUSById,
  createContactUS,
  updateContactUS,
  deleteContactUS,
} from "../controllers/contactUS.js";

router.get("/contactUs", getContactUS);

router.get("/contactUs/:id", getContactUSById);

router.post("/contactUs", createContactUS);

router.put("/contactUs/:id", updateContactUS);

router.delete("/contactUs/:id", deleteContactUS);

export default router; // Exportación por defecto
