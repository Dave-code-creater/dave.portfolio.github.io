import { useState } from 'react'
import NavigationBar from '../src/componets/NavigationBar'
import Hero from './componets/Hero'
import Project from './componets/Project'
import './App.css'

function App() {


  return (
    <div>
      <NavigationBar />
      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Project />
      </section>
    </div>
  )
}

export default App
