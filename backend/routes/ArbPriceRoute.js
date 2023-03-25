const express = require("express");
const router = express.Router(); // Adding router
const ArbPriceController = require("../controller/ArbPriceController");

// Adding routes for information
router.get("/arb-price-lookup-information", ArbPriceController.getArbitrumPrice);

module.exports = router;