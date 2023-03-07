require("dotenv").config({ path: '../.env' });
const axios = require('axios');
const ARBISCAN_URL = require("../utils/constants").constantsList.arbiscanApiURL;
const hex2dec = require("hex2dec");

// Alchemy endpoint
exports.getGasPrice = (req, res) => {
    // Retrieve Gas Information
    const options = {
        method: 'POST',
        headers: { 
            'accept': 'application/json', 
            'content-type': 'application/json' 
        }
    };
    
    // Make a post request for gas data on Arbitrum
    axios.get(ARBISCAN_URL + "?module=proxy&action=eth_gasPrice&apikey=" + process.env.ARBISCAN_API_KEY, options)
    .then(response => {
        // Gas is given in WEI in HEX format, convert to Decimal and divide by 10^9 for GWEI evaluation
        res.status(200).json({
            chainInformation: response.data,
            gasPrice: hex2dec.hexToDec(response.data.result)/1000000000 + " Gwei"
        });
    })
    .catch(err => {
        console.error(err);
    });
}