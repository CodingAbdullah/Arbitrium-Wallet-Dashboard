import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;