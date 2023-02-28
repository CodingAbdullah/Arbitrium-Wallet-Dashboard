import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Side from './Components/Side/side';
import Footer from './Components/Footer/footer';
import HomePage from './Components/HomePage/homepage';
import { ProSidebarProvider } from 'react-pro-sidebar';

const App = () => {
  return (
    <ProSidebarProvider>
      <div className="App">
        <Navbar />
        <Side />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </ProSidebarProvider>
  );
}

export default App;