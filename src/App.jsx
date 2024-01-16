import React from 'react'
import About from './components/ABout'
import Tours from './components/Tours'
import Footer from './components/Footer'
import Services from './components/Services'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App