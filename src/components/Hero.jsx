import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50 to-white">
      {/* Decorative blue spotlight gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute top-10 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-blue-300/50 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Minimal top nav */}
        <div className="px-6 sm:px-10 pt-6">
          <div className="mx-auto max-w-6xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-blue-600 shadow-sm" />
              <span className="text-sm font-medium text-neutral-800 tracking-tight">Portfolio</span>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
              <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
              <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
              <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Headline */}
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-700/80">Designer & Developer</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900 tracking-tight">
                Clean, minimalist interfaces with a focus on craft and clarity.
              </h1>
              <p className="mt-6 text-neutral-700 text-lg leading-relaxed">
                I design and build thoughtful digital experiences. Blending aesthetic restraint with technical precision for web, product, and brand.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 motion-reduce:transition-none">
                  View Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 hover:border-blue-300 transition-colors motion-reduce:transition-none">
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
