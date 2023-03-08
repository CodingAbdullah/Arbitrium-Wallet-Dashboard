const express = require("express");
const router = express.Router();
const ArbERC20HoldingsController = require("../controller/ArbERC20HoldingsController");

// Adding routes here
router.post("/get-arb-erc20-holdings", ArbERC20HoldingsController.getERC20Holdings);
router.post("/get-arb-erc20-transfers", ArbERC20HoldingsController.getERC20Transfers);

module.exports = router;