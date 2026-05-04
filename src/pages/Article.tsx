import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getArticleBySlug, getAllArticles } from '../content/article-data';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';

const categoryBadge: Record<string, string> = {
  'Dating': 'text-rose-700 bg-rose-50',
  'Communication': 'text-violet-700 bg-violet-50',
  'Conflict Resolution': 'text-amber-700 bg-amber-50',
  'Long-term Relationships': 'text-emerald-700 bg-emerald-50',
  'Self-Love': 'text-sky-700 bg-sky-50',
};

export default function Article() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Article not found</div>;
  }

  const articleModule = getArticleBySlug(slug);

  if (!articleModule) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-serif font-bold text-stone-900 mb-4">Article Not Found</h1>
        <Link to="/articles" className="text-rose-600 hover:text-rose-700">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  const { frontmatter, default: MDXContent } = articleModule;
  const relatedArticles = getAllArticles()
    .filter(a => a.category === frontmatter.category && a.slug !== slug)
    .slice(0, 2);

  const badge = categoryBadge[frontmatter.category] ?? 'text-rose-700 bg-rose-50';

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt}
        keywords={frontmatter.tags}
        type="article"
      />

      <section className="bg-linear-to-br from-stone-900 to-stone-800 text-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/articles" className="text-stone-400 hover:text-white text-sm mb-6 inline-block transition-colors">
            ← Back to Articles
          </Link>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${badge}`}>
            {frontmatter.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            {frontmatter.title}
          </h1>
          <p className="text-stone-300 text-lg mb-6 leading-relaxed">
            {frontmatter.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-stone-400">
            <span>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{frontmatter.readTime} min read</span>
          </div>
        </motion.div>
      </section>

      <motion.article
        className="max-w-3xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="prose prose-stone prose-lg max-w-none">
          <MDXContent />
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200">
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </motion.article>
    </>
  );
}
