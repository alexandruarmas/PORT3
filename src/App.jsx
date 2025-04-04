import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, memo, useEffect, lazy, Suspense } from 'react';
import "./index.css";
import "./styles/flame.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from 'prop-types';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Portofolio = lazy(() => import('./Pages/Portofolio'));
const ContactPage = lazy(() => import('./Pages/Contact'));
const ProjectDetails = lazy(() => import('./components/ProjectDetail'));
const AnimatedBackground = lazy(() => import('./components/Background'));
const Navbar = lazy(() => import('./components/Navbar'));

// Loading fallback component
const LazyLoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#030014] to-[#010108]">
    <div className="animate-pulse text-xl text-white/80 font-medium">Loading...</div>
  </div>
);

const LandingPage = memo(({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <Suspense fallback={<LazyLoadingFallback />}>
        {showWelcome && (
          <LoadingScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}

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
      </Suspense>
    </>
  );
});

LandingPage.displayName = 'LandingPage';
LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired
};

const ProjectPageLayout = memo(() => (
  <Suspense fallback={<LazyLoadingFallback />}>
    <ProjectDetails />
    <Footer />
  </Suspense>
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
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;