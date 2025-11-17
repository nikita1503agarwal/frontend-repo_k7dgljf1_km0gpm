import React, { useRef } from 'react'

const techs = [
  {
    name: 'Java',
    color: '#0A84FF',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <path fill="#0A84FF" d="M26 50c-7 2-14 2-14 5s26 5 34 0-6-6-6-6 10 2 9-3-11-2-11-2 9-1 8-6-11-3-17 0 0 6 0 6-8-1-10 3 7 3 7 3z"/>
        <path fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" d="M32 12c0 6-6 8-6 12s6 6 6 10"/>
      </svg>
    )
  },
  {
    name: 'Kotlin',
    color: '#7F52FF',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <defs>
          <linearGradient id="kotlinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7F52FF"/>
            <stop offset="100%" stopColor="#FF8A00"/>
          </linearGradient>
        </defs>
        <path d="M8 8h48L32 32 56 56H8z" fill="url(#kotlinGrad)"/>
      </svg>
    )
  },
  {
    name: 'MongoDB',
    color: '#10A778',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <path d="M32 6s-2 6-6 10c-5 5-8 11-8 18 0 12 9 20 14 24 5-4 14-12 14-24 0-7-3-13-8-18-4-4-6-10-6-10z" fill="#10A778"/>
        <path d="M32 6c0 0-1 22 0 44" stroke="#0E7B5B" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    name: 'Spring Boot',
    color: '#6DB33F',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <path d="M16 12h32l12 20-12 20H16L4 32 16 12z" fill="#6DB33F"/>
        <circle cx="32" cy="32" r="8" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'NATS',
    color: '#1990FF',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <rect x="10" y="10" width="18" height="18" rx="3" fill="#1990FF"/>
        <rect x="36" y="10" width="18" height="18" rx="3" fill="#00C2FF"/>
        <rect x="10" y="36" width="18" height="18" rx="3" fill="#00D79C"/>
        <rect x="36" y="36" width="18" height="18" rx="3" fill="#7F52FF"/>
      </svg>
    )
  },
  {
    name: 'Go',
    color: '#00ADD8',
    render: () => (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <rect x="8" y="20" width="48" height="24" rx="12" fill="#00ADD8"/>
        <circle cx="24" cy="32" r="4" fill="#fff"/>
        <circle cx="36" cy="32" r="4" fill="#fff"/>
        <circle cx="25" cy="32" r="1.5" fill="#222"/>
        <circle cx="37" cy="32" r="1.5" fill="#222"/>
      </svg>
    )
  }
]

function Card({ name, color, render }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -6
    const rotateY = ((x - midX) / midX) * 6
    el.style.setProperty('--rx', `${rotateX}deg`)
    el.style.setProperty('--ry', `${rotateY}deg`)
    el.style.setProperty('--tx', `${(x - midX) * 0.03}px`)
    el.style.setProperty('--ty', `${(y - midY) * 0.03}px`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', `0deg`)
    el.style.setProperty('--ry', `0deg`)
    el.style.setProperty('--tx', `0px`)
    el.style.setProperty('--ty', `0px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md will-change-transform transform-gpu motion-reduce:transform-none"
      style={{
        transform: 'perspective(800px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateX(var(--tx, 0)) translateY(var(--ty, 0))',
        transition: 'transform 300ms ease',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-white opacity-0 group-hover:opacity-100 transition-opacity motion-reduce:transition-none" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}16`, border: `1px solid ${color}2A` }}>
          {render()}
        </div>
        <div>
          <div className="text-base font-medium text-neutral-900">{name}</div>
          <div className="text-sm text-neutral-500">Primary tool</div>
        </div>
      </div>
    </div>
  )
}

const Stacks = () => {
  return (
    <section id="stack" className="relative bg-white">
      {/* soft blue backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-[-10%] h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-16 left-[-10%] h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 py-20">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Stack</h2>
          <p className="mt-2 text-neutral-600">Technologies I use to build clean, reliable systems.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stacks
