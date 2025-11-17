import React from 'react'

const projects = [
  {
    title: 'E-commerce Experience',
    description: 'A refined storefront with crisp typography, intelligent filtering, and fluid micro-interactions.',
    tags: ['UX', 'UI', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Information-dense yet calm. Modular cards, subtle motion, and accessible contrast ratios.',
    tags: ['Design System', 'React', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Brand Website',
    description: 'A minimal, content-forward site using generous white space and expressive type scales.',
    tags: ['Brand', 'Web', 'SEO'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
  },
]

const Work = () => {
  return (
    <section id="work" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Selected Work</h2>
          <p className="mt-2 text-neutral-600">A small selection of recent projects exploring clarity and craft.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 border border-neutral-200">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
