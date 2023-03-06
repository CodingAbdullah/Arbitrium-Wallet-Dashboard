const express = require("express");
const router = express.Router();
const GasController = require("../controller/GasController");

// Adding routes here
router.get("/gas-track", GasController.GasController);

module.exports = router;