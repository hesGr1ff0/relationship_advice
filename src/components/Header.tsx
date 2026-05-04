import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="text-xl font-serif text-rose-600">Heart</span>
            <span className="text-xl font-serif text-stone-900">Compass</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'text-rose-600 font-medium text-sm border-b-2 border-rose-600 pb-0.5'
                    : 'text-stone-500 hover:text-stone-900 text-sm transition-colors'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-block px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Get Advice
          </Link>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-stone-100 py-4 space-y-3 pb-5">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-sm py-1 ${isActive ? 'text-rose-600 font-medium' : 'text-stone-600'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
