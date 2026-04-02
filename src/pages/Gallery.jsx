import { useState } from 'react'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=70',
    category: 'Interior',
    caption: 'Living Room — Clean neutral tones',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
    category: 'Exterior',
    caption: 'Exterior repaint — Fresh curb appeal',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=70',
    category: 'Interior',
    caption: 'Master bedroom — Warm accent wall',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=70',
    category: 'Interior',
    caption: 'Modern kitchen — Two-tone cabinets',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&q=70',
    category: 'Exterior',
    caption: 'Exterior trim & siding refresh',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=70',
    category: 'Interior',
    caption: 'Dining room — Bold statement wall',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=70',
    category: 'Interior',
    caption: 'Open concept living — Full interior repaint',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=70',
    category: 'Exterior',
    caption: 'Deck staining & refinishing',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&q=70',
    category: 'Commercial',
    caption: 'Office space — Professional finish',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=70',
    category: 'Interior',
    caption: 'Kitchen refresh — Bright & modern',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=70',
    category: 'Exterior',
    caption: 'Whole home exterior — Complete transformation',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=70',
    category: 'Interior',
    caption: 'Bathroom — Crisp white finish',
  },
]

const categories = ['All', 'Interior', 'Exterior', 'Commercial']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? photos : photos.filter((p) => p.category === filter)

  const openLightbox = (photo) => setLightbox(photo)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    const currentIndex = filtered.findIndex((p) => p.id === lightbox.id)
    const next = (currentIndex + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h1 className="font-heading text-5xl font-black">Photo Gallery</h1>
          <p className="text-gray-400 mt-3 text-lg max-w-xl">
            A look at some of our recent projects — interior, exterior, and commercial.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-4">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded text-sm font-semibold transition-colors border ${
                filter === cat
                  ? 'bg-brand-red text-white border-brand-red'
                  : 'border-gray-200 text-gray-600 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.thumb}
                alt={photo.caption}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-brand-red font-semibold tracking-widest uppercase">{photo.category}</span>
                  <p className="text-white font-semibold mt-1 text-sm">{photo.caption}</p>
                </div>
              </div>
              {/* Red corner badge */}
              <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">No photos in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-brand-red transition-colors z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full rounded-lg max-h-[75vh] object-contain"
            />

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">{lightbox.category}</span>
                <p className="text-white font-semibold mt-1">{lightbox.caption}</p>
              </div>
              {/* Prev / Next */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white bg-opacity-10 hover:bg-brand-red text-white px-4 py-2 rounded transition-colors text-sm font-semibold"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="bg-white bg-opacity-10 hover:bg-brand-red text-white px-4 py-2 rounded transition-colors text-sm font-semibold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
