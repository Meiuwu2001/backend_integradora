const express = require("express");
const router = express.Router();

const ContactUsController = require("../controllers/contactUS");

router.get("/contactUs", ContactUsController.getContactUS);

router.get("/contactUs/:id", ContactUsController.getContactUSById);

router.post("/contactUs", ContactUsController.createContactUS);

router.put("/contactUs/:id", ContactUsController.updateContactUS);

router.delete("/contactUs/:id", ContactUsController.deleteContactUS);


module.exports = router;


