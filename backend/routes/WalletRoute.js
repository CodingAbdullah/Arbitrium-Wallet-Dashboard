const express = require("express");
const router = express.Router();
const WalletController = require("../controller/WalletController");

// Add routes here
router.post("/transactions", WalletController.getWalletTransactions);
router.post("/internal-transactions", WalletController.getWalletTransactions);

module.exports = router;