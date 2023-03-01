// Adding Sidebar
import SidebarSection from "../SidebarSection/sidebarsection";
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

const Side = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
            <SidebarSection />
            <Menu>
                <Link to="/about"><MenuItem>About</MenuItem></Link>
                <Link to="/arb-price-lookup"><MenuItem>Arbitrium Price Lookup</MenuItem></Link>
                <Link to="/erc721-token-holdings"><MenuItem>ERC-721 Token Holdings</MenuItem></Link>
                <Link to="/erc-721-token-lookup"><MenuItem>ERC-721 Token Lookup</MenuItem></Link>
                <Link to="/gas"><MenuItem>Gas</MenuItem></Link>
                <Link to="/home"><MenuItem>Home</MenuItem></Link>
                <Link to="/wallet-token-analytics"><MenuItem>Wallet/Token Analytics</MenuItem></Link>
            </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default Side;