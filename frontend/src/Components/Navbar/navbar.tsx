// Adding Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <a style={{ color: 'white' }} className="navbar-brand"><b>Arbitrium Wallet Dashboard</b></a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Enter Address" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Submit</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;