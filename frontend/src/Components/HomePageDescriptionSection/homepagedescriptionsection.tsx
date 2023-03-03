const HomePageDescriptionSection = () => {

    // Decoupled from home page to make components leaner, functions passed down from parent as props
    return (
        <div className="jumbotron">
            <div className="container bg-light p-5">
                <h1 style={{ marginBottom: '2rem' }}>Welcome!</h1>
                <p> Anything you need to investigate on the Arbitrium blockchain is provided to you ready-made for free. <br /> 
                    Deep dive into collections, wallet information, and much more.</p>
                <p> Enter the <b>public</b> address below (42-digit hex code) of a wallet to track activity. </p>
                <form style={{ marginTop: '3rem' }}>
                    <input className="form-control" type="search" placeholder="Enter Wallet Address (0xasx352e3dedwdse4u5F...)" max="42" min="42" aria-label="Search" required />
                    <button className="btn btn-outline-success wallet-search-button" type="submit">Search &raquo;</button>
                </form>
            </div>
        </div>
    )
}

export default HomePageDescriptionSection;