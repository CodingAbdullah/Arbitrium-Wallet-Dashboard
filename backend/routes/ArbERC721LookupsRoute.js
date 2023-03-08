const express = require("express");
const router = express.Router();
const ArbERC721LookupsController = require("../controller/ArbERC721LookupsController");

// Add routes here
router.post("/arb-erc721-token-lookup", ArbERC721LookupsController.erc721TokenLookup);
router.post("/arb-erc721-token-transfers-lookup", ArbERC721LookupsController.erc721TokenTransferLookup);

module.exports = router;