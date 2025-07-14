const express = require('express');

const professionalController = require("../controllers.professional");

const router = express.Router();

//GET  /feed /post
router.get("/", professionalController.getProfessionalsData);
//localhost:8080/professionals
module.exports = router;