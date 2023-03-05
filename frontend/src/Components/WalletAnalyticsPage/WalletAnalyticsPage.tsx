import React from 'react';
import { useNavigate } from 'react-router';

const WalletTokenAnalyticsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="wallet-token-analytics-page">
            <main role="main" className="mt-3 p-3 bg-light">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Wallet Analytics</h1>
                </div>
                <div className="jumbotron">
                    <div className="container">
                        <div>
                            <label>Wallet Analytics</label><button style={{marginLeft: '1rem'}} onClick={() => navigate("/wallet-analytics-result")} className='btn btn-success'>View</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default WalletTokenAnalyticsPage;