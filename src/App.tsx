import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeVault from './components/VibeVault';
import HowItWorks from './components/HowItWorks';
import TheCollective from './components/TheCollective';
import SpeedGuarantee from './components/SpeedGuarantee';
import BeyondEdit from './components/BeyondEdit';
import QuoteCalculator from './components/QuoteCalculator';
import Testimonials from './components/Testimonials';
import Freelancers from './components/Freelancers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-accent-text">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <VibeVault />
        <HowItWorks />
        <TheCollective />
        <SpeedGuarantee />
        <BeyondEdit />
        <QuoteCalculator />
        <Testimonials />
        <Freelancers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
