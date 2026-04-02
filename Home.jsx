import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews'

const services = [
  {
    icon: '🏠',
    title: 'Interior Painting',
    desc: 'Transform your living spaces with flawless interior finishes and clean, crisp lines.',
  },
  {
    icon: '🏗️',
    title: 'Exterior Painting',
    desc: "Weather-resistant coatings that protect and beautify your home's exterior for years.",
  },
  {
    icon: '🏢',
    title: 'Commercial Painting',
    desc: 'Professional painting for offices, retail, and commercial properties with minimal disruption.',
  },
  {
    icon: '🎨',
    title: 'Decorative Finishes',
    desc: 'Custom textures, accent walls, and specialty finishes to elevate any space.',
  },
]

const reasons = [
  { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind.' },
  { title: 'Free Estimates', desc: 'No-obligation quotes with transparent, upfront pricing.' },
  { title: 'Quality Materials', desc: 'We use only premium paints and materials built to last.' },
  { title: '100% Satisfaction', desc: "We don't stop until you're completely happy with the result." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-4">
            SF Master Touch Painting & More
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-black leading-tight mb-6 max-w-3xl">
            Precision Painting.<br />
            <span className="text-brand-red">Professional Results.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Serving the Lowcountry with quality craftsmanship, honest pricing, and a commitment to excellence on every job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8439412548"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded hover:bg-brand-dark transition-colors text-lg"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="font-heading text-4xl font-black text-gray-900">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-100 rounded-lg p-6 hover:shadow-md hover:border-brand-red transition-all">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="border-2 border-brand-red text-brand-red px-6 py-3 rounded hover:bg-brand-red hover:text-white transition">
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-black text-gray-900">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-semibold text-gray-900">{r.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* CTA */}
      <section className="bg-brand-red py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Call us today or request a free estimate.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="tel:8439412548" className="bg-white text-brand-red px-6 py-3 rounded font-bold">
            (843) 941-2548
          </a>
          <Link to="/contact" className="border-2 border-white px-6 py-3 rounded">
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  )
}
