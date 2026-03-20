import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import HeroSection from './Pages/HeroSection';
import Footer from './Pages/Footer';
import PoleSolution from './Pages/PoleSolution';
import StrategieTriangle from './Pages/StrategieTriangle';
import Realisations from './Pages/Realisations';


const Home = () => (
  <>
    <HeroSection />
    <div id="solutions"><PoleSolution /></div>
    <div id="strategie"><StrategieTriangle /></div>
    <div id="footer"><Footer /></div>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;