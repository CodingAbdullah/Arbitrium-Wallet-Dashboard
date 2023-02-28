// Adding Sidebar
import SidebarSection from "../SidebarSection/sidebarsection";

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

const Side = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
            <SidebarSection />
            <Menu>
                <MenuItem>About</MenuItem>
                <MenuItem>Arbitrium Price Lookup</MenuItem>
                <MenuItem>ERC-721 Token Holdings</MenuItem>
                <MenuItem>ERC-721 Token Lookup</MenuItem>
                <MenuItem>Gas</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Wallet/Token Analytics</MenuItem>
            </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default Side;