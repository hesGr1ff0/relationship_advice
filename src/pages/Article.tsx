import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getArticleBySlug, getAllArticles } from '../content/article-data';
import SEO from '../components/SEO';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Article not found</div>;
  }

  const articleModule = getArticleBySlug(slug);

  if (!articleModule) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Article Not Found
        </h1>
        <Link to="/articles" className="text-purple-600 hover:text-purple-700">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  const { frontmatter, default: MDXContent } = articleModule;
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(a => a.category === frontmatter.category && a.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <SEO 
        title={frontmatter.title} 
        description={frontmatter.excerpt}
        keywords={frontmatter.tags}
        type="article"
      />
      <motion.article 
        className="max-w-3xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <header className="mb-8">
          <Link to="/articles" className="text-purple-600 hover:text-purple-700 text-sm mb-4 inline-block transition-colors">
            ← Back to Articles
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
              {frontmatter.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {frontmatter.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>{new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{frontmatter.readTime} min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <MDXContent />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/articles/${article.slug}`}
                    className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {article.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </motion.article>
    </>
  );
}
