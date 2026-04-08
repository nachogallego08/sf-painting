import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="font-heading text-white text-lg mb-3">SF Master Touch</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional painting services delivered with precision and care. Your satisfaction is our guarantee.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm tracking-widest uppercase">Contact Us</h4>

          {/* Phone */}
          <a
            href="tel:8439412548"
            className="flex items-center gap-3 text-sm mb-3 hover:text-brand-red transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (843) 941-2548
          </a>

          {/* Email */}
          <a
            href="mailto:sfmastertouchpaintingservices@gmail.com"
            className="flex items-center gap-3 text-sm mb-3 hover:text-brand-red transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 13.065L0 6.75V18a2 2 0 002 2h20a2 2 0 002-2V6.75l-12 6.315z"/>
              <path fill="#34A853" d="M12 13.065l12-6.315V6a2 2 0 00-2-2h-2l-8 5-8-5H2a2 2 0 00-2 2v.75l12 6.315z"/>
              <path fill="#FBBC05" d="M0 6.75l12 6.315L24 6.75V6l-12 6L0 6z"/>
              <path fill="#4285F4" d="M0 6l12 6 12-6-12-6z"/>
            </svg>
            sfmastertouchpaintingservices@gmail.com
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61572403463429"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm mb-3 hover:text-brand-red transition-colors"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.5V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.2 2.21.2v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.9h-2.29v7.05A10 10 0 0022 12z"/>
            </svg>
            Facebook
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Savannah, GA & Surrounding Areas
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} SF Master Touch Painting & More. All rights reserved.
      </div>
    </footer>
  )
}
