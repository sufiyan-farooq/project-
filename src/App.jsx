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

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
      <FeaturesSection/>
      <SafetyForms /> 
      <Streamline/>
      <Descion/>

    </>
  )
}

export default App
