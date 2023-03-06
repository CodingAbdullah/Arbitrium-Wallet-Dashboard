import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const GasTrackerPage = () => {

    const navigate = useNavigate();

    const clearHandler = () => {

    }
 
    // Using parent-child component hierarchy, pass down state information for display and leaner code
    return (
        <div className='gas-tracker-page'>
            <main role="main" className="p-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Gas Information</h1>
                </div>
                <div className="jumbotron bg-light">
                    <h4 className="display-5">General Metrics</h4> 
                    <div>
                        <button style={{ marginTop: '3rem'}} onClick={() => navigate("/")} className='btn btn-success'>Go Home</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GasTrackerPage;