import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Alert from '../Alert/Alert';
import WalletTransactionsInfoTable from '../WalletTransactionsInfoTable/WalletTransactionsInfoTable';
import WalletInternalTransactionsInfoTable from '../WalletInternalTransactionsInfoTable/WalletInternalTransactionsInfoTable';
import axios from 'axios';
import { WalletTransactionType } from '../../utils/types/WalletTransactionType';
import { WalletInternalTransactionType } from '../../utils/types/WalletInternalTransactionType';

const WalletAnalyticsResultPage: FC = () => {
    const navigate = useNavigate();
    const [emptyAlert, updateEmptyAlert] = useState<boolean>(false);

    const [walletTransactionState, updateWalletTransactionState] = useState<WalletTransactionType>();
    const [walletInternalTransactionState, updateWalletInternalTransactionState] = useState<WalletInternalTransactionType>();

    let address = localStorage.getItem('walletAddress') === null ? "" : localStorage.getItem('walletAddress');

    useEffect(() => {
        if (address === null || address.length !== 42 || address.substring(0, 2) !== '0x'){
            localStorage.clear(); // Clear storage, if any
            navigate('/');
        }
        else {
            let options = {
                method: "GET",
                body: JSON.stringify({ address: address }),
                headers : {
                    'content-type' : 'application/json'
                }
            }

            // Update transactions state with txns request
            axios.post('http://localhost:5001/transactions', options)
            .then(response => {
                if (response.data.txns.result.length === 0) {
                    updateEmptyAlert(true);
                }
                else {
                    updateEmptyAlert(false);
                    updateWalletTransactionState(response.data.txns.result);

                }
            });

            // Update internal transactions state with internal txns request
            axios.post('http://localhost:5001/internal-transactions', options)
            .then(response => {
                if (response.data.txns.result.length === 0) {
                    updateEmptyAlert(true);
                }
                else {
                    updateEmptyAlert(false);
                    updateWalletInternalTransactionState(response.data.txns.result);
                }
            });
        }
    }, []);

        if (walletInternalTransactionState === undefined || walletTransactionState || undefined) {
            return <div>Loading...</div>
        }
        else  {
            localStorage.clear(); // Clear localStorage once data has been collected
            return (
                <div className="wallet-analytics-result-page p-3">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Wallet Analytics</h1>
                    </div>
                        { 
                            emptyAlert ? <Alert type="warning" /> : 
                            <>
                                {
                                    walletTransactionState === undefined ||  walletInternalTransactionState === undefined || emptyAlert ? null :
                                        <>
                                            <main style={{ marginTop: '5rem' }} role="main">
                                                <div style={{ marginTop: '1rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                                    <h3 className="h3">Transactions</h3>
                                                </div>
                                            </main>
                                            <WalletTransactionsInfoTable address={ address! } data={ walletTransactionState! } /> 
                                            <main style={{ marginTop: '5rem' }} role="main">
                                                <div style={{ marginTop: '1rem' }} className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                                    <h3 className="h3">Internal Transactions</h3>
                                                </div>
                                            </main>
                                            <WalletInternalTransactionsInfoTable address={ address! } data={ walletInternalTransactionState! } /> 
                                        </>
                                } 
                            </>
                        }
                </div>
            )
        }
}

export default WalletAnalyticsResultPage