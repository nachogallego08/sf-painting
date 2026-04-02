import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-white text-lg mb-3">SF Master Touch</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional painting services delivered with precision and care. Your satisfaction is our guarantee.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-widest uppercase">Contact Us</h4>
          <p className="text-sm mb-1">
            <a href="tel:8439412548" className="hover:text-brand-red transition-colors">(843) 941-2548</a>
          </p>
          <p className="text-xs text-gray-500 mt-4">Savannah, GA & Surrounding Areas</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} SF Master Touch Painting & More. All rights reserved.
      </div>
    </footer>
  )
}
