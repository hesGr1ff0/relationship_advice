import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Build healthier, happier relationships with our practical advice and insights for dating, communication, and lasting love." 
      />
      <div>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Build Healthier, Happier Relationships
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Practical advice and insights for dating, communication, and lasting love.
            </p>
            <Link
              to="/articles"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Explore Articles
            </Link>
          </motion.div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Browse by Category
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Dating', 'Communication', 'Conflict Resolution', 'Long-term Relationships', 'Self-Love'].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">{category}</h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get weekly relationship tips delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  );
}
