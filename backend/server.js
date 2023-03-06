const express = require("express");
const app = express();

// Spinning up a node server
app.listen(process.env.PORT || 8080, () => {
    console.log("Listening to PORT " + process.env.PORT || 8080);
});


// ERC-721 Holdings, Transfers
// ERC-721 Lookups (arbitrum)
// ERC-20 Holdings, Transfers
// Wallet txns, internal, etc..
