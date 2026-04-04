import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <CursorGlow />
      <HeroSection />
      <Projects />
      <Achievements />
    </div>
  )
}

export default App
