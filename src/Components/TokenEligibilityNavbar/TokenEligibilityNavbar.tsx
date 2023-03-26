const TokenEligibilityNavbar = () => {
    // Adding another Navbar containing price information
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> 
                            <img src={ require("../../assets/images/newArb.png") } alt="No image found" height="40" width="45" />
                        </li>
                        <p style={{ paddingLeft: '1rem', display: 'inline', color: 'white' }}>Click here to check airdrop eligibility! <a style={{ color: 'white' }} href="https://arbitrum.foundation/" target="_blank" rel="relnoreferrer"><b><u><i>Arbitrum Foundation</i></u></b></a></p>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TokenEligibilityNavbar;