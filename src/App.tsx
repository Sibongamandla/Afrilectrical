import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroUIProvider } from '@heroui/react';
import theme from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorBoundary from './components/ErrorBoundary';
import FontLoader from './components/FontLoader';
import RouteLoadingFallback from './components/RouteLoadingFallback';
import { preloadCriticalImages } from './utils/imageOptimization';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Stories = lazy(() => import('./pages/Stories'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const BusinessExpertise = lazy(() => import('./pages/BusinessExpertise'));
const ComponentsDemo = lazy(() => import('./pages/ComponentsDemo'));
const InteractiveComponentsDemo = lazy(() => import('./pages/InteractiveComponentsDemo'));
const InteractiveFeatures = lazy(() => import('./pages/InteractiveFeatures'));
const UIShowcase = lazy(() => import('./pages/UIShowcase'));

// Lazy load solution pages
const Buildings = lazy(() => import('./pages/Buildings'));
const RenewableEnergy = lazy(() => import('./pages/RenewableEnergy'));
const Industry = lazy(() => import('./pages/Industry'));
const RiskAndSafety = lazy(() => import('./pages/RiskAndSafety'));
const SustainabilityAndEnvironment = lazy(() => import('./pages/SustainabilityAndEnvironment'));
const TransmissionAndDistribution = lazy(() => import('./pages/TransmissionAndDistribution'));
const UrbanPlanning = lazy(() => import('./pages/UrbanPlanning'));
const TransportationAndMobility = lazy(() => import('./pages/TransportationAndMobility'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Preload critical images
    preloadCriticalImages();
    
    // Simulate loading time and ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add a small delay for smooth transition
      setTimeout(() => setIsAppReady(true), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <FontLoader />
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingIndicator />
        </motion.div>
      </ThemeProvider>
    );
  }

  return (
    <HeroUIProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <FontLoader />
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            <motion.div 
              className="App min-h-screen flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: isAppReady ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Header />
              <main role="main" className="flex-grow">
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Routes>
                    {/* Home page route - consolidated */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Redirect /home to / for consistency */}
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    
                    {/* Main page routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/expertise" element={<BusinessExpertise />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/components" element={<ComponentsDemo />} />
                    <Route path="/interactive-components" element={<InteractiveComponentsDemo />} />
                    <Route path="/interactive-features" element={<InteractiveFeatures />} />
                    <Route path="/ui-showcase" element={<UIShowcase />} />
                    
                    {/* Solution page routes */}
                    <Route path="/solutions/buildings" element={<Buildings />} />
                    <Route path="/solutions/renewable-energy" element={<RenewableEnergy />} />
                    <Route path="/solutions/industry" element={<Industry />} />
                    <Route path="/solutions/risk-and-safety" element={<RiskAndSafety />} />
                    <Route path="/solutions/sustainability-and-environment" element={<SustainabilityAndEnvironment />} />
                    <Route path="/solutions/transmission-and-distribution" element={<TransmissionAndDistribution />} />
                    <Route path="/solutions/urban-planning" element={<UrbanPlanning />} />
                    <Route path="/solutions/transportation-and-mobility" element={<TransportationAndMobility />} />
                  </Routes>
                </Suspense>
              </main>
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

export default App;
