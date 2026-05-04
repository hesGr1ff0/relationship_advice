import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllArticles } from '../content/article-data';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

export default function Articles() {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');

  const baseArticles = useMemo(() => {
    if (category) {
      return getAllArticles().filter(
        a => a.category.toLowerCase().replace(/\s+/g, '-') === category
      );
    }
    return getAllArticles();
  }, [category]);

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return baseArticles;
    const lower = searchTerm.toLowerCase();
    return baseArticles.filter(
      a =>
        a.title.toLowerCase().includes(lower) ||
        a.excerpt.toLowerCase().includes(lower) ||
        (a.tags && a.tags.some(t => t.toLowerCase().includes(lower))) ||
        a.category.toLowerCase().includes(lower)
    );
  }, [baseArticles, searchTerm]);

  const pageTitle = category
    ? category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'All Articles';

  return (
    <>
      <SEO
        title={pageTitle}
        description={`Browse our relationship advice articles on ${pageTitle.toLowerCase()}.`}
      />

      <section className="bg-linear-to-br from-stone-900 to-stone-800 text-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{pageTitle}</h1>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-sm px-5 py-3 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 transition-colors text-sm"
          />
        </motion.div>
      </section>

      <section className="py-12 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-24 text-stone-400">No articles found.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
