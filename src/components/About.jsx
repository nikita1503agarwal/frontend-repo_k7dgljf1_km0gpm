import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">About</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-neutral-700 leading-relaxed">
              I create interfaces that feel inevitable. My approach pairs minimalist aesthetics with systems thinking, ensuring each
              detail earns its place. I focus on product design, frontend engineering, and building design systems with a strong
              emphasis on accessibility and performance.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-sm text-neutral-500">Focus</div>
                <div className="mt-2 font-medium text-neutral-900">Product Design</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-sm text-neutral-500">Tools</div>
                <div className="mt-2 font-medium text-neutral-900">Figma, React</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-sm text-neutral-500">Location</div>
                <div className="mt-2 font-medium text-neutral-900">Remote-first</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
