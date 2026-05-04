import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { getAllArticles } from '../content/article-data';
import ArticleCard from '../components/ArticleCard';

const categories = [
  { name: 'Dating', icon: '💕', color: 'from-rose-400 to-rose-600', slug: 'dating' },
  { name: 'Communication', icon: '💬', color: 'from-violet-400 to-violet-600', slug: 'communication' },
  { name: 'Conflict Resolution', icon: '🤝', color: 'from-amber-400 to-amber-600', slug: 'conflict-resolution' },
  { name: 'Long-term Relationships', icon: '💍', color: 'from-emerald-400 to-emerald-600', slug: 'long-term-relationships' },
  { name: 'Self-Love', icon: '✨', color: 'from-sky-400 to-sky-600', slug: 'self-love' },
];

export default function Home() {
  const featuredArticles = getAllArticles().slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Build healthier, happier relationships with our practical advice and insights for dating, communication, and lasting love."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-rose-700 via-rose-500 to-amber-500 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center"
        >
          <span className="inline-block mb-5 text-rose-100 text-xs font-semibold tracking-widest uppercase">
            Relationship Advice
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Love Is a Skill.<br />We'll Teach You.
          </h1>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Practical, compassionate guidance for dating, communication, and building lasting connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/articles"
              className="px-8 py-3.5 bg-white text-rose-700 font-semibold rounded-full hover:bg-rose-50 transition-colors"
            >
              Explore Articles
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-3">
              What Are You Working On?
            </h2>
            <p className="text-stone-500 text-lg">Choose a topic that speaks to where you are right now.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={`/categories/${cat.slug}`}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-linear-to-br ${cat.color} text-white hover:scale-105 transition-transform duration-200 shadow-md`}
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-sm font-semibold text-center leading-snug">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                Latest Reads
              </h2>
              <p className="text-stone-500 mt-2">Fresh insights, every week.</p>
            </div>
            <Link to="/articles" className="text-rose-600 hover:text-rose-700 font-medium text-sm hidden md:block">
              View all →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-stone-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-rose-400 text-xs font-semibold tracking-widest uppercase">Newsletter</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">
            Relationship wisdom, weekly.
          </h2>
          <p className="text-stone-400 mb-8 text-lg leading-relaxed">
            No fluff. Just honest, practical insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 transition-colors text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
