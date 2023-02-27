import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar';
import Footer from './Components/Footer/footer';
import HomePage from './Components/HomePage/homepage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;