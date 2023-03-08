const express = require("express");
const router = express.Router();
const ArbERC721HoldingsController = require("../controller/ArbERC721HoldingsController");

// Adding routes here
router.post("/get-arb-erc721-holdings", ArbERC721HoldingsController.getERC721Holdings);
router.post("/get-arb-erc721-transfers", ArbERC721HoldingsController.getERC721Transfers);

module.exports = router;