import { FC, FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Alert from '../Alert/Alert';

const ERC721LookupsPage: FC = () => {
    // Adding hooks
    const [alert, updateAlert] = useState<boolean>(false);
    const tokenAddress = useRef<HTMLInputElement>(null);
    const tokenID = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    // Clear and Form handlers
    const clearHandler = () => {
        updateAlert(false);
    }

    const tokenHandler = (e: FormEvent<HTMLFormElement>) => {
        // Check token address length and structure 
        e.preventDefault();

        if (tokenAddress.current?.value === null ||  tokenAddress.current?.value.length !== 42 || tokenAddress.current.value.substring(0, 2) !== '0x') {
            updateAlert(true);
        }
    }

    return (
        <div>
             <main role="main" className="p-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2>ERC-721 Token Lookup</h2>
                </div>
                { alert ? <Alert type="danger" /> : null }
                <div className="jumbotron bg-light p-3">                    
                    <form onSubmit={ e => tokenHandler(e) }>
                        <p style={{ marginRight: '0.5rem' }}>Enter <b>ERC721 Contract Address</b> & <b>Token ID</b> for Lookup </p>
                        <input style={{ marginTop: '1rem' }} ref={ tokenAddress } type="text" placeholder="Enter Contract Address" required />
                        <br />
                        <input style={{ marginTop: '1rem' }} ref={ tokenID } type="number" placeholder="Enter Token ID" required />
                        <br />
                        <button style={{ marginTop: '2rem' }} type="submit" className="btn btn-success">View Lookup</button>
                    </form>
                    <button style={{ marginTop: '2rem', display: 'inline' }} className='btn btn-primary' onClick={ () => navigate("/") }>Go Home</button>
                    <button style={{ marginTop: '2rem', marginLeft: '2rem' }} className='btn btn-warning' onClick={ clearHandler }>Clear</button>
                </div>
            </main>
        </div>
    )
}

export default ERC721LookupsPage;