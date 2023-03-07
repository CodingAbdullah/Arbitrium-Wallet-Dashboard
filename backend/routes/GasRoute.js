const express = require("express");
const router = express.Router();
const GasController = require("../controller/GasController");

// Adding routes here
router.get("/gas-track", GasController.getGasPrice);

module.exports = router;