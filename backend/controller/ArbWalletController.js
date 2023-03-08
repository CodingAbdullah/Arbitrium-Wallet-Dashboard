require("dotenv").config({ path: '../.env' });
const axios  = require("axios");
const ARBISCAN_URL = require("../utils/constants").constantsList.arbiscanApiURL;

exports.getWalletTransactions = (req, res) => {
    const { walletAddress } = JSON.parse(req.body.body);

    // Main transactions of a particular wallet on the Arbitum network
    axios.get(ARBISCAN_URL + '?module=account&action=txlist&address=' + walletAddress + 
                '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=' + process.env.ARBISCAN_API_KEY)
    .then(response => {
        console.log(response.data);
        res.status(200).json({
            txns: response.data
        });
    })
    .catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.getInternalWalletTransactions = (req, res) => {
    const { walletAddress } = JSON.parse(req.body.body);

    // Internal transactions of a particular wallet on the Arbitrum network
    axios.get(ARBISCAN_URL + '?module=account&action=txlistinternal&address=' + walletAddress + 
                '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=' + process.env.ARBISCAN_API_KEY)
    .then(response => {
        console.log(response.data);
        res.status(200).json({
            txns: response.data
        });
    })
    .catch(err => {
        res.status(400).json({
            error: err
        });
    });
}