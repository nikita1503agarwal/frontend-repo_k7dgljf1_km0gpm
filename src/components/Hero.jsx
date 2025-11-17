import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle white gradient to keep text legible; pointer-events-none to not block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Minimal top nav */}
        <div className="px-6 sm:px-10 pt-6">
          <div className="mx-auto max-w-6xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-rose-500/90 shadow-sm"></div>
              <span className="text-sm font-medium text-neutral-800 tracking-tight">Portfolio</span>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
              <a href="#work" className="hover:text-black transition-colors">Work</a>
              <a href="#about" className="hover:text-black transition-colors">About</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Headline */}
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600">Designer & Developer</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900 tracking-tight">
                Clean, minimalist interfaces with a focus on craft and clarity.
              </h1>
              <p className="mt-6 text-neutral-700 text-lg leading-relaxed">
                I design and build thoughtful digital experiences. Blending aesthetic restraint with technical precision for web, product, and brand.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-900">
                  View Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-400 transition-colors">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
