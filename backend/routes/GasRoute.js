const express = require("express");
const router = express.Router();
const GasController = require("../controller/GasController");

// Adding routes here
router.post("/gas-track", GasController.GasController);

module.exports = router;