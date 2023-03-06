const express = require("express");
const router = express.Router();
const WalletController = require("../controller/WalletController");

// Add routes here
router.post("/transactions", WalletController.WalletController);

module.exports = router;