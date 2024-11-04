import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Slider from './components/Slider';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero isDarkMode={isDarkMode} />
                <Brands isDarkMode={isDarkMode} />
                <Slider isDarkMode={isDarkMode} />
                <Features isDarkMode={isDarkMode} />
                <Reviews isDarkMode={isDarkMode} />
                <Faq isDarkMode={isDarkMode} />
                <Subscribe isDarkMode={isDarkMode} />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact isDarkMode={isDarkMode} />
                <Location isDarkMode={isDarkMode} />
              </>
            } />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;

