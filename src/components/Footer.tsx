import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Relationship Advice. All rights reserved. Griffin Makari
          </div>
          <div className="flex gap-6">
            <Link to="/articles" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Articles
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
