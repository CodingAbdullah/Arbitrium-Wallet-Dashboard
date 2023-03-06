import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { GasStateType }  from '../../types/constants';

const GasTrackerPage = () => {

    const navigate = useNavigate();
    const [gasState, updateGasState] = useState<GasStateType>();

    useEffect(() => {
        axios.get("http://localhost:5001/gas-track")
        .then(response => {
            // Retrieve gas information
            updateGasState(response.data);
        });
    }, []);
 
    // Using parent-child component hierarchy, pass down state information for display and leaner code

    if (gasState === undefined) {
        return <div>Loading..</div>
    }
    else {
        return (
            <div className='gas-tracker-page'>
                <main role="main" className="p-3">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Gas Information</h1>
                    </div>
                    <div className="jumbotron bg-light p-3">
                        <h4>General Metrics</h4> 
                        <br />
                        <p>
                            <b>Date Updated: </b>
                            { new Date().toISOString().split("T")[0] + " " + new Date().toISOString().split("T")[1].split(".")[0] + " - GMT" }
                        </p>
                        <p>
                            <b>JSON RPC: </b>
                            { gasState.chainInformation.jsonrpc }
                        </p>
                        <p>
                            <b>Id: </b>
                            { gasState.chainInformation.id }
                        </p>
                        <p>
                            <b>Gas Price: </b>
                            { gasState.gasPrice }
                        </p>
                        <div>
                            <button style={{ marginTop: '3rem' }} onClick={() => navigate("/")} className='btn btn-success'>Go Home</button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default GasTrackerPage;