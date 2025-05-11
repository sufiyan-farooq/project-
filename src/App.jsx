import { useState, useEffect } from 'react';
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
import { CircularProgress } from '@mui/material';

// Simple Loader Component
const Loader = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px"
    }}>
<CircularProgress color="success" />
</div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
            <Footer />
          </>
        } />
        <Route path="/pricing" element={<PricingSec />} />
      </Routes>
    </Router>
  );
}

export default App;
