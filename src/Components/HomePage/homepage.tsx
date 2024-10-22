import './homepage.css';
import HomePageDescriptionSection from '../HomePageDescriptionSection/homepagedescriptionsection';
import React from 'react';

const Home: React.FC = () => {
    return (
        <main role="main" className="ml-sm-auto p-3">
            <HomePageDescriptionSection  />
        </main>
    )
}

export default Home;