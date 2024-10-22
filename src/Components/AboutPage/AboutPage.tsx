// About Page for the Arbitrum Wallet Dashboard

const AboutPage = () => {

        return (
                <main role="main">
                        <section className="jumbotron text-center">
                        <div className="container">
                                <h1 style={{ marginTop: '1rem' }}>About</h1>
                                <hr />
                                <p className="lead text-muted">
                                        <i>An implementation of a lightweight version of Arbiscan! Feel free to explore all there is in the world of Ethereum with one click!
                                        View wallet activity, recent transactions, asset holdings, ERC20/721 token data, and so much more!</i>
                                </p>
                                <p style={{ marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className="lead muted">
                                        <i>If you are interested in learning about the developer, you can visit their bio <a style={{ color: 'black' }} href="https://github.com/CodingAbdullah" target="_blank" rel="noreferrer">here!</a></i>
                                </p>
                        </div>
                        </section>
                        <div className="py-5">
                                <div className="container">
                                <div className="row">
                                        <div className="col-md-4">
                                        <div className="card mb-4">
                                                <div className="card-body">
                                                <img src={ require("../../assets/images/about_code.png") } style={{ marginTop: '1rem', borderRadius: '25%' }} width="100" height="100" alt="No Logo" />
                                                <h3 style={{ marginTop: '2rem' }}>Open Source</h3>
                                                <hr />
                                                <p className="card-text text-muted">
                                                        <i>Project is continually growing and adding features as the blockchain space evolves. As such, the codebase will always be open source!</i>
                                                </p>
                                                <a style={{ marginBottom: '1rem' }} target="_blank" rel="noreferrer" href="https://github.com/CodingAbdullah/Arbitrum-Wallet-Dashboard" className="btn btn-success">
                                                        View Source Code!
                                                </a>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                                <div className="card-body">
                                                <img src={ require("../../assets/images/about_chart.png") } style={{ marginTop: '1rem', borderRadius: '25%' }} width="100" height="100" alt="No Logo" />
                                                <h3 style={{ marginTop: '2rem' }}>Live Updates</h3>
                                                <hr />
                                                <p className="card-text text-muted">
                                                        <i>Features are updated in real-time! Explore Arbitrum price action and information related to your wallet!</i>
                                                </p>
                                                <a style={{ marginBottom: '1rem' }} target="_blank" rel="noreferrer" href="/arb-price-lookup" className="btn btn-success">
                                                        View Coin Prices!
                                                </a>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                                <div className="card-body">
                                                <img src={ require("../../assets/images/about_ethereum.png") } style={{ marginTop: '1rem', borderRadius: '25%' }} width="100" height="100" alt="No Logo" />
                                                <h3 style={{ marginTop: '2rem' }}>Crypto APIs</h3>
                                                <hr />
                                                <p className="card-text">
                                                        <i>APIs are the main source of truth. They are verified and secure meaning that you do not have to worry about security!</i>
                                                </p>
                                                <a style={{ marginBottom: '1rem' }} href="https://github.com/CodingAbdullah/Ethereum-Wallet-Dashboard/blob/main/README.md" rel="no referrer" target="_blank" className="btn btn-success">
                                                        View the APIs!
                                                </a>
                                                </div>
                                        </div>
                                        </div>
                                </div>
                                </div>
                        </div>
                </main>
                );
        }
            
        export default AboutPage;