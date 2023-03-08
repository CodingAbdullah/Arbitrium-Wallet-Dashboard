require("dotenv").config({ path: '../.env' });
const MORALIS_URL = require("../utils/constants").constantsList.moralisApiURL;
const axios = require('axios');

exports.getERC721Holdings = (req, res) => {
    const { walletAddress } = JSON.parse(req.body.body); // Get address for request to Moralis
        
    // Pass in API key for backend request
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        } 
    }
    
    // Pass in address and chain values
    axios.get(MORALIS_URL + walletAddress + '/nft?chain=arbitrum&format=decimal', options)
    .then(response => {
            console.log(response.data);
            res.status(200).json({
                holdings: response.data
            });
        }
    )
    .catch(err => {
            res.status(400).json({
                information: err
            });
        }
    );
}  

exports.getERC721Transfers = (req, res) => {
    const { walletAddress } = JSON.parse(req.body.body); // Get address for request to Moralis

    // Pass in API key for backend request
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        } 
    }
    
    // Pass in address and chain values
    axios.get(MORALIS_URL + walletAddress + '/nft/transfers?chain=arbitrum&format=decimal&direction=both', options)
    .then(response => {
            console.log(response.data);
            res.status(200).json({
                transfers: response.data
            });
        }
    )
    .catch(err => {
            res.status(400).json({
                information: err
            });
        }
    );
}