import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, memo, useEffect } from 'react';
import "./index.css";
import "./styles/flame.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import { AnimatePresence } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from 'prop-types';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

const LandingPage = memo(({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <LoadingScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <div className="mt-[-100px]">
            <ContactPage />
          </div>
          <Footer />
        </>
      )}
    </>
  );
});

LandingPage.displayName = 'LandingPage';
LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired
};

const ProjectPageLayout = memo(() => (
  <>
    <ProjectDetails />
    <Footer />
  </>
));

ProjectPageLayout.displayName = 'ProjectPageLayout';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Initialize AOS globally with consistent settings
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 50
    });
    
    window.addEventListener('resize', AOS.refresh);
    return () => window.removeEventListener('resize', AOS.refresh);
  }, []);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;