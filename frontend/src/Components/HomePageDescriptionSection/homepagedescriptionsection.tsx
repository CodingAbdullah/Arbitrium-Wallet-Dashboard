const HomePageDescriptionSection = () => {

    // Decoupled from home page to make components leaner, functions passed down from parent as props
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-5" style={{ marginBottom: '2rem' }}>Welcome!</h1>
                <p> Anything you need to investigate on the Arbitrium blockchain is provided to you ready-made for free. <br /> 
                    Deep dive into collections, wallet information, price action, and much more. Please note that all activity documented here is on the <b>mainnet</b> network only. </p>
                <p> Enter the <b>public</b> address below (42-digit hex code) of a wallet to track activity. </p>
                <form style={{ marginTop: '3rem'}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Enter Wallet Address (0xasx352e3dedwdse4u5F...)" max="42" min="42" aria-label="Search" required />
                    <button className="btn btn-outline-success wallet-search-button" type="submit">Search &raquo;</button>
                </form>
            </div>
        </div>
    )
}

export default HomePageDescriptionSection;