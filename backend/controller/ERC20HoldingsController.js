require("dotenv").config({ path: '../.env' });
const MORALIS_URL = require("../utils/constants").constantsList.moralisApiURL;
const axios = require("axios");

exports.getERC20Holdings = (req, res) => {
    const { walletAddress } = JSON.parse(req.body.body);

    const options = {
        method: 'GET',
        headers : {
            'content-type': 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }   

    // Fetch ERC20 Token Holdings belonging to user
    axios.get(MORALIS_URL + walletAddress + '/erc20?chain=arbitrum', options)
    .then(response => {
        res.status(200).json({
            holdings: response.data
        });
    })
    .catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.getERC20Transfers = (req, res) => {
    const { walletAddress } = req.body.body;

    const options = {
        method: 'GET',
        headers : {
            'content-type' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Pass in address and chain values, fetch ERC20 Token Transfers per wallet
    axios.get(MORALIS_URL + walletAddress + '/erc20/transfers?chain=arbitrum', options) 
    .then(response => {
        res.status(200).json({
            transfers: response.data
        });
    })
    .catch(err => {
        res.status(400).json({
            error: err
        });
    })
}