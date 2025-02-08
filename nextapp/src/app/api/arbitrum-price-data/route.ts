import { NextResponse } from "next/server";

// Default function for working with a GET request
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

        // Formulate Arbitrum Price and Gas data
        const arbPriceData = await arbPriceResponse.json();

        // Return token price and gas information
        return NextResponse.json({
            tokenPrice: arbPriceData
        });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}
