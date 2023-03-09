const express = require("express");
const router = express.Router();
const ArbWalletController = require("../controller/ArbWalletController");

// Add routes here
router.post("/arb-transactions", ArbWalletController.getWalletTransactions);
router.post("/arb-internal-transactions", ArbWalletController.getInternalWalletTransactions);
router.post("/arb-wallet-balance", ArbWalletController.getWalletBalance);

module.exports = router;