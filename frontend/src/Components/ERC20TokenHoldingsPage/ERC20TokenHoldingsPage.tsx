import { FC, FormEvent, useRef, useState } from 'react';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router';

const ERC720HoldingsPage: FC = () => {
    // Set up hooks and state
    const navigate = useNavigate();
    const walletAddress = useRef<HTMLInputElement>(null);
    const [alert, updateAlert] = useState<boolean>(false);

    // Adding Handlers
    const clearHandler = () => {
        updateAlert(false);
    }

    const walletHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (walletAddress.current?.value.length !== 42 && walletAddress.current?.value.substring(0, 2) !== '0x') {
            updateAlert(true);
        }
        else {

        }
    }

    return (
        <div className="erc-20-token-page">
            <main role="main" className="p-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2>ERC-20 Token Holdings</h2>
                </div>
                { alert ? <Alert type="danger" /> : null }
                <div className="jumbotron bg-light">
                    <div className="container">
                        <form onSubmit={ walletHandler }>
                            <label style={{ marginRight: '0.5rem' }}>Enter <b>Wallet Address</b> for ERC20 Token Holdings: </label>
                            <input style={{ marginTop: '2rem' }} type="text" placeholder="Enter Wallet Address" required />
                            <br />
                            <button style={{ marginTop: '1rem' }} type="submit" className="btn btn-success">View Holdings</button>
                        </form>
                        <button style={{ marginTop: '2rem', display: 'inline' }} className='btn btn-primary' onClick={ () => navigate("/") }>Go Home</button>
                        <button style={{ marginTop: '2rem', marginLeft: '2rem' }} className='btn btn-warning' onClick={ clearHandler }>Clear</button>
                    </div>
                </div>
            </main>
        </div>  
    )
}

export default ERC720HoldingsPage;