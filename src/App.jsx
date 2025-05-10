import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import SafetyForms from './components/SafetyForm'
import Streamline from './components/Streamline'
import Descion from './components/Descion'
import Relation from './components/Relation'
import { Pricing } from './components/Pricing'
import { IndustrySolution } from './components/IndustrySolution'
import { Improvement } from './components/Improvement'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
      <FeaturesSection/>
      <SafetyForms /> 
      <Streamline/>
      <Descion/>
      <Relation/>
      <Pricing/>
      <IndustrySolution/>
      <Improvement/>
      <Footer/>

    </>
  )
}

export default App
