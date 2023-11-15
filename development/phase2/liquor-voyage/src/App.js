import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Cocktails from './components/Cocktails'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Cards />
        <Cocktails />
        <Footer />
    </div>
  )
}

export default App