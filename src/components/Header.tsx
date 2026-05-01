import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            Relationship Advice
          </Link>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            >
              Articles
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
