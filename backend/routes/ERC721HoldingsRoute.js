const express = require("express");
const router = express.Router();
const ERC721HoldingsController = require("../controller/ERC721HoldingsController");

// Adding routes here
router.post("/get-erc721-holdings", ERC721HoldingsController.getERC721Holdings);
router.post("/get-erc721-transfers", ERC721HoldingsController.getERC721Transfers);

module.exports = router;