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
      const all = getAllArticles();
      return all.filter(a => a.category.toLowerCase().replace(/\s+/g, '-') === category);
    }
    return getAllArticles();
  }, [category]);

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return baseArticles;
    const lowerTerm = searchTerm.toLowerCase();
    return baseArticles.filter(article => 
      article.title.toLowerCase().includes(lowerTerm) || 
      article.excerpt.toLowerCase().includes(lowerTerm) ||
      (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowerTerm))) ||
      article.category.toLowerCase().includes(lowerTerm)
    );
  }, [baseArticles, searchTerm]);

  const pageTitle = category 
    ? `${category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Articles`
    : 'All Articles';

  return (
    <>
      <SEO 
        title={pageTitle} 
        description={`Browse our relationship advice articles for ${pageTitle.toLowerCase()}.`}
      />
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            {pageTitle}
          </h1>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-shadow"
            />
          </div>
        </div>
        
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No articles found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
