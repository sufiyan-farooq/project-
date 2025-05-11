import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SafetyForms from './components/SafetyForm';
import Streamline from './components/Streamline';
import Descion from './components/Descion';
import Relation from './components/Relation';
import { Pricing } from './components/Pricing';
import { IndustrySolution } from './components/IndustrySolution';
import { Improvement } from './components/Improvement';
import { PricingSec } from './pages/PricingSec';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection />
            <SafetyForms />
            <Streamline />
            <Descion />
            <Relation />
            <Pricing />
            <IndustrySolution />
            <Improvement />
            <Footer/>
          </>
        } />
        <Route path="/pricing" element={<PricingSec />} />
      </Routes>
    </Router>
  );
}

export default App;