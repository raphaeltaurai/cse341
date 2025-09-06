const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

//GET  /feed /post
router.get("/", professionalController.getData);
//localhost:8800/professionals
module.exports = router;