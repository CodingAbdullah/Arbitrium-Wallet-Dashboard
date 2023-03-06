import { FC, FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Alert from '../Alert/Alert';

const WalletTokenAnalyticsPage: FC = () => {
    const styles = {
        paragraphSpace: {
            paddingTop: '2rem'
        },
        form: {
            paddingBottom: '2rem'
        }
    }

    // Set hooks
    const navigate = useNavigate();
    const walletAddress = useRef<HTMLInputElement>(null);
    const [setAlert, updateAlert] = useState<boolean>(false);

    const clearHandler = () => {
        updateAlert(false);
    }

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent abnormal form submission

        if (walletAddress.current?.value.length !== 42 || walletAddress.current?.value.substring(0, 2) !== '0x') {
            updateAlert(true);
        }
        else {
            updateAlert(false);
        }
    }

    return (
        <div className="wallet-token-analytics-page p-3">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Wallet Analytics</h1>
            </div>
            { setAlert ? <Alert type="danger" /> : null } 
            <main role="main" className="p-3 bg-light">
                <div className="jumbotron">
                    <div className="container">
                        <div style={ styles.paragraphSpace }>
                            <form style={ styles.form } onSubmit={ e => formHandler(e) }>
                                <label>Enter a <b>Wallet Address</b> for analytics:</label>
                                <input style={{ marginLeft: '0.5rem' }} type="text" ref={ walletAddress } placeholder='Enter Wallet Address' required  />
                                <br />
                                <button style={{ marginTop: '2rem' }} type="submit" className='btn btn-success'>Check Wallet</button>
                            </form>
                            <button style={{ display: 'inline' }} className='btn btn-primary' onClick={ () => navigate("/") }>Go Home</button>
                            <button style={{ marginLeft: '2rem' }} className='btn btn-warning' onClick={ clearHandler }>Clear</button>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )

}

export default WalletTokenAnalyticsPage;