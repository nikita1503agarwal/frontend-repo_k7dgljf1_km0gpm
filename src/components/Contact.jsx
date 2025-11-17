import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 py-20">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Let’s build something together</h2>
          <p className="mt-2 text-neutral-600">Available for select freelance projects, collaborations, and full-time roles.</p>

          <form className="mt-8 grid gap-4">
            <input type="text" placeholder="Name" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            <button type="button" className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-900">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
