import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult('Sending...')

    const formData = new FormData()
    formData.append('access_key', '1453ecf7-c295-4870-ba51-de9168db1968')
    formData.append('name', form.name)
    formData.append('phone', form.phone)
    formData.append('email', form.email)
    formData.append('message', form.message)
    formData.append('subject', `New Website Lead from ${form.name}`)
    formData.append('from_name', 'SF Master Touch Website')
    formData.append('botcheck', '')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const data = await response.json()

      if (response.status === 200 && data.success) {
        setSubmitted(true)
        setResult('Message sent successfully!')
        setForm({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      } else {
        setResult(data.message || 'Something went wrong.')
      }
    } catch (error) {
      setResult('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-3">
            Reach Out
          </p>
          <h1 className="font-heading text-5xl font-black">Contact Us</h1>
          <p className="text-gray-400 mt-3 text-lg max-w-xl">
            Request a free estimate or ask us anything. We typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact info */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                <a href="tel:8439412548" className="text-gray-900 font-semibold text-lg hover:text-brand-red transition-colors">
                  (843) 941-2548
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Service Area</p>
                <p className="text-gray-900 font-semibold">Savannah, GA & Surrounding Areas</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Hours</p>
                <p className="text-gray-900 font-semibold">Mon – Sat: 7:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-900 mb-1">Free Estimates</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We offer no-obligation, free estimates for all residential and commercial painting projects.
              Fill out the form and we'll get back to you promptly.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="border-2 border-brand-red rounded-lg p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <a href="tel:8439412548" className="inline-block mt-6 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-brand-dark transition-colors">
                Or call us now: (843) 941-2548
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(843) 000-0000"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message / Project Details <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project — interior or exterior, square footage, timeline, etc."
                  className="w-full border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red text-white font-semibold py-4 rounded hover:bg-brand-dark transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {result && (
                <p className="text-sm text-center text-gray-500">{result}</p>
              )}

              <p className="text-xs text-gray-400 text-center">
                Or call us directly at <a href="tel:8439412548" className="text-brand-red font-semibold">(843) 941-2548</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
