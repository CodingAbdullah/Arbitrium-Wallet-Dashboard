const express = require("express");
const router = express.Router();
const ERC721LookupsController = require("../controller/ERC721LookupsController");

// Add routes here
router.post("/erc721-lookups", ERC721LookupsController.ERC721LookupsController);

module.exports = router;