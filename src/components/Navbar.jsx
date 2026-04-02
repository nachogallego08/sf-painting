import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-semibold text-sm tracking-wide transition-colors duration-200 ${
      isActive ? 'text-brand-red' : 'text-gray-700 hover:text-brand-red'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading font-black text-xl text-gray-900">SF Master Touch</span>
          <span className="text-xs text-brand-red font-semibold tracking-widest uppercase">Painting & More</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <a
            href="tel:8439412548"
            className="ml-4 bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-brand-dark transition-colors duration-200"
          >
            (843) 941-2548
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          <a href="tel:8439412548" className="bg-brand-red text-white text-sm font-semibold px-4 py-2.5 rounded text-center hover:bg-brand-dark transition-colors">
            (843) 941-2548
          </a>
        </div>
      )}
    </header>
  )
}
