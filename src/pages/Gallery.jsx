import { useState } from 'react'

import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'
import img4 from '../images/image4.jpg'
import img5 from '../images/image5.jpg'
import img6 from '../images/image6.jpg'
import img7 from '../images/image7.jpg'
import img8 from '../images/image8.jpg'
import img9 from '../images/image9.jpg'
import img10 from '../images/image10.jpg'
import img11 from '../images/image11.jpg'
import img12 from '../images/image12.jpg'
import img13 from '../images/image13.jpg'
import img14 from '../images/image14.jpg'
import img15 from '../images/image15.jpg'
import img16 from '../images/image16.jpg'
import img17 from '../images/image17.jpg'
import img18 from '../images/image18.jpg'
import img19 from '../images/image19.jpg'
import img20 from '../images/image20.jpg'

const photos = [
  { id: 1, src: img1, thumb: img1, category: 'Interior', caption: 'Interior painting project' },
  { id: 2, src: img2, thumb: img2, category: 'Exterior', caption: 'Exterior painting project' },
  { id: 3, src: img3, thumb: img3, category: 'Interior', caption: 'Interior detail work' },
  { id: 4, src: img4, thumb: img4, category: 'Exterior', caption: 'Exterior repaint' },
  { id: 5, src: img5, thumb: img5, category: 'Interior', caption: 'Interior walls and trim' },
  { id: 6, src: img6, thumb: img6, category: 'Interior', caption: 'Clean interior finish' },
  { id: 7, src: img7, thumb: img7, category: 'Interior', caption: 'Accent wall work' },
  { id: 8, src: img8, thumb: img8, category: 'Exterior', caption: 'Exterior surface prep' },
  { id: 9, src: img9, thumb: img9, category: 'Commercial', caption: 'Commercial painting project' },
  { id: 10, src: img10, thumb: img10, category: 'Interior', caption: 'Kitchen repaint' },
  { id: 11, src: img11, thumb: img11, category: 'Exterior', caption: 'Full exterior transformation' },
  { id: 12, src: img12, thumb: img12, category: 'Interior', caption: 'Bathroom repaint' },
  { id: 13, src: img13, thumb: img13, category: 'Interior', caption: 'Interior repaint project' },
  { id: 14, src: img14, thumb: img14, category: 'Exterior', caption: 'Exterior detail work' },
  { id: 15, src: img15, thumb: img15, category: 'Interior', caption: 'Room repaint' },
  { id: 16, src: img16, thumb: img16, category: 'Interior', caption: 'Wall finishing work' },
  { id: 17, src: img17, thumb: img17, category: 'Interior', caption: 'Modern interior look' },
  { id: 18, src: img18, thumb: img18, category: 'Exterior', caption: 'Outdoor painting work' },
  { id: 19, src: img19, thumb: img19, category: 'Exterior', caption: 'Exterior improvement' },
  { id: 20, src: img20, thumb: img20, category: 'Interior', caption: 'Final finish result' },
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
          <p className="text-brand-red text-sm font-semibold uppercase mb-3">Our Work</p>
          <h1 className="text-5xl font-black">Photo Gallery</h1>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 pt-10">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded text-sm font-semibold ${
                filter === cat
                  ? 'bg-brand-red text-white'
                  : 'border border-gray-200 text-gray-600 hover:text-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-lg cursor-pointer shadow hover:shadow-lg transition"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.thumb}
                alt={photo.caption}
                className="w-full h-64 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            className="max-h-[80vh] object-contain"
          />
        </div>
      )}
    </>
  )
}
