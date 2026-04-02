import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🏠',
    title: 'Interior Painting',
    desc: 'We handle everything from prep and priming to the final coat. Walls, ceilings, trim, and doors — all done cleanly and efficiently with minimal disruption to your daily life.',
    bullets: ['Living rooms & bedrooms', 'Kitchens & bathrooms', 'Trim, doors & ceilings', 'Accent walls'],
  },
  {
    icon: '🏗️',
    title: 'Exterior Painting',
    desc: "Protect and refresh your home's exterior with durable, weather-resistant coatings. We properly prep all surfaces for a finish that lasts and keeps your curb appeal strong.",
    bullets: ['Siding & stucco', 'Decks & fences', 'Trim & shutters', 'Pressure washing prep'],
  },
  {
    icon: '🏢',
    title: 'Commercial Painting',
    desc: 'From small offices to large commercial spaces, we deliver professional results on time and within budget — scheduling work to minimize downtime for your business.',
    bullets: ['Office spaces', 'Retail & restaurants', 'Warehouses', 'Property management'],
  },
  {
    icon: '🎨',
    title: 'Decorative Finishes',
    desc: 'Elevate your space beyond a standard paint job. We offer custom textures and specialty finishes that add depth, character, and personality to any room.',
    bullets: ['Faux finishes', 'Venetian plaster', 'Textured walls', 'Accent & feature walls'],
  },
  {
    icon: '🔧',
    title: 'Drywall Repair',
    desc: "Holes, cracks, and imperfections repaired before we paint — so your walls look flawless when we're done.",
    bullets: ['Hole patching', 'Crack repair', 'Smooth skim coating', 'Texture matching'],
  },
  {
    icon: '🏡',
    title: 'Popcorn Ceiling Removal',
    desc: 'Remove that dated popcorn texture and replace it with a clean, smooth finish that modernizes your home.',
    bullets: ['Safe removal process', 'Smooth finish applied', 'Ready to paint', 'All rooms'],
  },
]

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="font-heading text-5xl font-black">Our Services</h1>
          <p className="text-gray-400 mt-3 text-lg max-w-xl">
            Professional painting and finishing services for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-100 rounded-lg p-7 hover:shadow-lg hover:border-brand-red transition-all duration-200 group flex flex-col">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">
                {s.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-black text-gray-900 mb-4">
            Not sure what you need?
          </h2>
          <p className="text-gray-500 mb-8">
            Give us a call or send us a message — we'll walk you through the right solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8439412548" className="bg-brand-red text-white font-semibold px-8 py-3 rounded hover:bg-brand-dark transition-colors">
              (843) 941-2548
            </a>
            <Link to="/contact" className="border-2 border-brand-red text-brand-red font-semibold px-8 py-3 rounded hover:bg-brand-red hover:text-white transition-colors">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}