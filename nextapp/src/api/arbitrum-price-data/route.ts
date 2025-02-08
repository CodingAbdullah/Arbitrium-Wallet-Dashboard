import hex2dec from 'hex2dec';
import { NextResponse } from "next/server";

// Default function for working with a POST request
export async function GET() {

    // Setting options for request parameters
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        } as HeadersInit
    };
    
    // Run the requests and conditionally return data based on response
    try {
        const arbPriceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=arbitrum&vs_currencies=usd&include_24hr_change=true', options);
        const arbGasResponse = await fetch('https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice&apikey=' + process.env.ARBISCAN_API_KEY, options);
        
        // Formulate Arbitrum Price and Gas data
        const arbPriceData = await arbPriceResponse.json();
        const arbGasData = await arbGasResponse.json();

        // Extract gas information and reset its value to a decimal value
        const gasValueInDec = Number(hex2dec.hexToDec(arbGasData.result))/1000000000;
        arbGasData.result = gasValueInDec;

        // Return token price and gas information
        return NextResponse.json({
            gasInformation: arbGasData,
            tokenPrice: arbPriceData['arbitrum']
        });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}
