import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import HomePage from './Components/HomePage/homepage';
import Footer from './Components/Footer/footer';
import Page404 from './Components/Page404/Page404';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;