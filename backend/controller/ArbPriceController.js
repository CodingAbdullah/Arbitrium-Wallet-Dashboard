require("dotenv").config({ path: '../.env' });
const COINGECKO_URL = require("../utils/constants").constantsList.coingeckoApiURL;
const ARBITRUM_URL = require("../utils/constants").constantsList.arbiscanApiURL;
const axios = require('axios');
const hex2dec = require('hex2dec');

exports.getArbitrumPrice = (req, res) => {
    const QUERY_STRING_ARBITRUM = "?ids=arbitrum&vs_currencies=usd&include_24hr_change=true";
    const API_ENDPOINT = "/simple/price";
    const ARBITRUM_GAS_URL =  "?module=proxy&action=eth_gasPrice&apikey=" + process.env.ARBISCAN_API_KEY

    axios.get(COINGECKO_URL + API_ENDPOINT + QUERY_STRING_ARBITRUM)
    .then(response => {
        axios.get(ARBITRUM_URL + ARBITRUM_GAS_URL)
        .then(gasInfo => {
            let gasValueInDec = (hex2dec.hexToDec(gasInfo.data.result))/1000000000; // Value given in WEI Hex value so, conversion to Dec value and to WEI is done
            gasInfo.data.result = gasValueInDec;

            // If price action data fetch and gas price data fetch is successful, send back modified response
            res.status(200).json({
                gasInformation: gasInfo.data,
                tokenPrice: response.data['arbitrum']
            });
        })
        .catch(err => {
            console.log(err);
            // Send back error
            res.status(400).json({
                error: err
            });
        });
    })
    .catch(err => {
        // Send back error
        console.log(err);
        res.status(400).json({
            error: err
        });
    });
}