import './homepage.css';
import HomePageDescriptionSection from '../HomePageDescriptionSection/homepagedescriptionsection';

const Home = () => {
    return (
        <main role="main" className="ml-sm-auto">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center p-2 pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>
                <HomePageDescriptionSection  />
            </main>
    )
}

export default Home;