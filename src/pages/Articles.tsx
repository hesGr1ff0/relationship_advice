import { getAllArticles } from '../content/article-data';
import ArticleCard from '../components/ArticleCard';

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        All Articles
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
