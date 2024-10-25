const express = require("express");
const contactUs = require("./src/routes/contactUS.js");
const app = express();

app.use(express.json());
app.use(contactUs);
module.exports = app;
