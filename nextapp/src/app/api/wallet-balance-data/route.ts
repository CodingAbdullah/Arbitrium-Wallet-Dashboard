import { NextResponse } from "next/server";

// Default function for working with a POST request
export async function POST(request: Request) {
    const body = await request.json();

    // Setting options for request parameters
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        } as HeadersInit
    };

    try {
        // Make FETCH request to gather data related to Arbitrum, Ethereum
        const arbPriceResponse = await fetch('https://api.arbiscan.io/api?module=account&action=balance&address=' + body.walletAddress + "&tag=latest&apikey=" + process.env.ARBISCAN_API_KEY, options);
        const ethPriceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', options);
        
        // Conver to JSON data related to Arbitrum and Ethereum
        const arbData = await arbPriceResponse.json();
        const ethData = await ethPriceResponse.json();

        // Return the dataset
        return NextResponse.json({
            balanceInformation: arbData,
            ethPrice: ethData.ethereum.usd
        });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}