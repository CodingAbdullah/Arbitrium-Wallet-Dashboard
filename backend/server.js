require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();
const cors = require('cors');
const ArbERC20HoldingsRoute = require('./routes/ArbERC20HoldingsRoute');
const ArbERC721HoldingsRoute = require("./routes/ArbERC721HoldingsRoute");
const ArbERC721LookupsRoute = require('./routes/ArbERC721LookupsRoute');
const ArbGasTrackerRoute = require("./routes/ArbGasRoute");
const ArbPriceRoute = require('./routes/ArbPriceRoute');
const ArbWalletRoute = require("./routes/ArbWalletRoute");

// Spinning up a node server
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening to PORT " + process.env.PORT || 8080);
});

 // Enable CORS & add other Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// Add Routes
app.use("/", ArbERC721HoldingsRoute);
app.use("/", ArbERC20HoldingsRoute);
app.use("/", ArbERC721LookupsRoute);
app.use("/", ArbGasTrackerRoute);
app.use("/", ArbWalletRoute);
app.use("/", ArbPriceRoute);

// ERC-721 Holdings, Transfers
// ERC-721 Lookups (Arbitrum)
// ERC-20 Holdings, Transfers
// Wallet Txns, Internal, etc..