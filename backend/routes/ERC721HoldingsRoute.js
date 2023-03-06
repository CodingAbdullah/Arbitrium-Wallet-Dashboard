const express = require("express");
const ERC721HoldingsController = require("../controller/ERC721HoldingsController");
const router = express.Router();

// Adding routes here
router.post("/erc721-holdings", ERC721HoldingsController.ERC721HoldingsController);

module.exports = router;