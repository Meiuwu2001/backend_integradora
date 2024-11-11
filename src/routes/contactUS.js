import express from "express";
import contactControllers from "../controllers/contactUS.js";

const router = express.Router();

router.get("/contactUs", contactControllers.getContactUS);
router.get("/contactUs/:id", contactControllers.getContactUSById);
router.post("/contactus", contactControllers.createContactUS);
router.put("/contactUs/:id", contactControllers.updateContactUS);
router.delete("/contactUs/:id", contactControllers.deleteContactUS);

export default router;

