// Adding Navbar
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: 'white', fontWeight: 'bold' }}>Arbitrum Wallet Dashboard</a>
                    <button style={{ backgroundColor: 'white' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{ color: 'white' }} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/erc721-token-holdings">ERC721 Token Holdings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/erc721-token-lookup">ERC721 Token Lookup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/gas">Gas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="/wallet-token-analytics">Wallet/Token Analytics</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Enter Address" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;