import { FC, FormEvent, useRef, useState } from 'react';
import { useNavigate } from "react-router";
import Alert from '../Alert/Alert';

const ERC721TokenHoldingsPage: FC = () => {
    // Set up state and hooks
    const [alert, updateAlert] = useState<boolean>(false);
    const walletAddress = useRef<string>("");
    const navigate = useNavigate();

    // Clear and Form handlers
    const clearHandler = () => {
        updateAlert(false);
    }

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (walletAddress.current.length !== 42 || walletAddress.current.substring(0, 2) !== '0x'){
            updateAlert(true);
        }
        else {

        }
    }
    
    return (
        <div className='erc-721-token-holdings-page'>
            <main role="main" className="p-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">ERC-721 Token Holdings</h1>
                </div>
                { alert ? <Alert type='danger' /> : null }
                <div className="jumbotron bg-light p-3">
                    <div className="container">
                        <form onSubmit={ (e) => formHandler(e) }>
                            <label>Enter <b>wallet address</b> for list of ERC-721 Holdings and Transfers:</label>
                            <input style={{ marginLeft: '0.5rem' }} type='text' placeholder='Enter Wallet Address' />
                            <br />
                            <button style={{ marginTop: '1rem' }} type='submit' className='btn btn-success'>View Holdings</button>
                        </form>
                        <button style={{ marginTop: '2rem', display: 'inline' }} className='btn btn-primary' onClick={ () => navigate("/") }>Go Home</button>
                        <button style={{ marginTop: '2rem', marginLeft: '2rem' }} className='btn btn-warning' onClick={ clearHandler }>Clear</button> 
                    </div>
                </div>
            </main>
        </div>
    )

}

export default ERC721TokenHoldingsPage;