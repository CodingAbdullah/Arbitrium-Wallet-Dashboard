import { FC } from 'react';

const ArbPriceLookupPage: FC = () => {
    return (
        <main role="main" className="ml-sm-auto p-3" style={{ textAlign: 'center' }}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center p-2 pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Price Lookup</h1>
            </div>
            <p>Link Here to view historical: <a style={{ color: 'black' }} href="https://ethwdashboard.xyz/prices/arbitrum" target="_blank" rel="noreferrer"><b>Arbitrum Price</b></a></p>
        </main>
    )
}

export default ArbPriceLookupPage;