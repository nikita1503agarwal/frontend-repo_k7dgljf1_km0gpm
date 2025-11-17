import React from 'react'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Stacks from './components/Stacks'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Work />
      <Stacks />
      <About />
      <Contact />
      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Portfolio — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#home" className="hover:text-black">Top</a>
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#stack" className="hover:text-black">Stack</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
