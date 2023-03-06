require("dotenv").config({ path: '.env' });
const express = require("express");
const app = express();
const cors = require('cors');
const ERC20HoldingsRoute = require('./routes/ERC20HoldingsRoute');
const ERC721HoldingsRoute = require("./routes/ERC721HoldingsRoute");
const ERC721LookupsRoute = require('./routes/ERC721LookupsRoute');
const GasTrackerRoute = require("./routes/GasRoute");
const WalletRoute = require("./routes/WalletRoute");

// Spinning up a node server
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening to PORT " + process.env.PORT || 8080);
});

 // Enable CORS & add other Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// Add Routes
app.use("/", ERC721HoldingsRoute);
app.use("/", ERC20HoldingsRoute);
app.use("/", ERC721LookupsRoute);
app.use("/", GasTrackerRoute);
app.use("/", WalletRoute);

// ERC-721 Holdings, Transfers
// ERC-721 Lookups (Arbitrum)
// ERC-20 Holdings, Transfers
// Wallet Txns, Internal, etc..