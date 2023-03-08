const express = require("express");
const router = express.Router();
const ArbGasController = require("../controller/ArbGasController");

// Adding routes here
router.get("/arb-gas-track", ArbGasController.getGasPrice);

module.exports = router;