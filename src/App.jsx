import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Slider from './components/Slider'
import Features from './components/Features'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);



  return (
    <div className={`wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <main>
        <Hero isDarkMode={isDarkMode} />
        <Brands isDarkMode={isDarkMode} />
        <Slider isDarkMode={isDarkMode} />
        <Features isDarkMode={isDarkMode} />
        <Reviews isDarkMode={isDarkMode} />
        <Faq isDarkMode={isDarkMode} />
        <Subscribe isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
