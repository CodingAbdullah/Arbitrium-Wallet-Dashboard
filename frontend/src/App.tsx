import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/HomePage/homepage';
import Footer from './Components/Footer/footer';
import Page404 from './Components/Page404/Page404';
import './App.css';
import WalletAnalyticsPage from './Components/WalletAnalyticsPage/WalletAnalyticsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wallet-analytics" element={<WalletAnalyticsPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;