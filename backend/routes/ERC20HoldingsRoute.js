const express = require("express");
const router = express.Router();
const ERC20HoldingsController = require("../controller/ERC20HoldingsController");

// Adding routes here
router.post("/erc20-holdings", ERC20HoldingsController.getERC20Holdings);
router.post("/erc20-transfers", ERC20HoldingsController.getERC20Transfers);

module.exports = router;