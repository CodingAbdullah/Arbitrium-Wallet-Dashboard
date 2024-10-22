import { FC } from 'react';

const ArbPriceLookupPage: FC = () => {
    return (
        <main role="main" className="ml-sm-auto p-3" style={{ textAlign: 'center' }}>
            <h1 className="h2">Price Lookup</h1>
            <hr />
            <p className='lead text-muted'><i>Link Here to view price action: <a style={{ color: 'black' }} href="https://ethereumdashboard.dev/prices/arbitrum" target="_blank" rel="noreferrer"><b>Arbitrum Price</b></a></i></p>
        </main>
    )
}

export default ArbPriceLookupPage;