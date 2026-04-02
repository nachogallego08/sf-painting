const reviews = [
  {
    id: 1,
    name: 'Maria Johnson',
    location: 'Savannah, GA',
    rating: 5,
    date: 'March 2025',
    text: 'Absolutely incredible work! They painted the entire interior of our home and it looks brand new. Very professional, clean, and finished on time. Will definitely call them again.',
  },
  {
    id: 2,
    name: 'James R.',
    location: 'Pooler, GA',
    rating: 5,
    date: 'February 2025',
    text: 'Best painting company I have hired. The team was punctual, respectful of our space, and the quality of the paint job exceeded our expectations. Highly recommended!',
  },
  {
    id: 3,
    name: 'Linda T.',
    location: 'Bluffton, SC',
    rating: 5,
    date: 'January 2025',
    text: 'They did the exterior of my house and it looks amazing. The price was fair and they were honest about everything upfront. Zero surprises. A++',
  },
  {
    id: 4,
    name: 'Carlos M.',
    location: 'Richmond Hill, GA',
    rating: 5,
    date: 'December 2024',
    text: 'I hired them for a commercial office space repaint and they worked around our schedule perfectly. Minimal disruption, professional finish. Very happy with the results.',
  },
  {
    id: 5,
    name: 'Susan P.',
    location: 'Hilton Head, SC',
    rating: 5,
    date: 'November 2024',
    text: 'From the free estimate to the final walk-through, the whole experience was smooth. They even fixed some drywall issues before painting. Great attention to detail.',
  },
  {
    id: 6,
    name: 'Tom & Rachel W.',
    location: 'Savannah, GA',
    rating: 5,
    date: 'October 2024',
    text: 'We needed our deck refinished and the living room repainted. They did both jobs in two days and everything looks fantastic. Responsive, professional, and great value.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="font-heading text-4xl font-black text-gray-900">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-gray-500 text-sm font-medium">5.0 average · 100+ happy customers</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="border border-gray-100 rounded-lg p-6 hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.rating} />
                <span className="text-xs text-gray-400">{r.date}</span>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                "{r.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {r.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Read more reviews on Google</p>
          <a
            href="https://www.google.com/search?q=SF+Master+Touch+Painting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red font-semibold px-8 py-3 rounded hover:bg-brand-red hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
