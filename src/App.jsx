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

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Slider />
        <Features />
        <Reviews />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
