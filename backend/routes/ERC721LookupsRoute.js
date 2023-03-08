const express = require("express");
const router = express.Router();
const ERC721LookupsController = require("../controller/ERC721LookupsController");

// Add routes here
router.post("/erc721-token-lookup", ERC721LookupsController.erc721TokenLookup);
router.post("/erc721-token-transfers-lookup", ERC721LookupsController.erc721TokenTransferLookup);

module.exports = router;