import { Link } from 'react-router-dom';

const exploreLinks = [
  { to: '/articles', label: 'All Articles' },
  { to: '/categories/dating', label: 'Dating' },
  { to: '/categories/communication', label: 'Communication' },
  { to: '/categories/self-love', label: 'Self-Love' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-xl font-serif text-rose-400">Heart</span>
              <span className="text-xl font-serif text-white">Compass</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Compassionate, evidence-based relationship guidance for every stage of love.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">Stay Connected</h4>
            <p className="text-sm mb-4 leading-relaxed">
              Weekly relationship insights, straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3 py-2.5 text-sm rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-14 pt-6 text-xs text-stone-600">
          © {new Date().getFullYear()} HeartCompass by Griffin Makari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
