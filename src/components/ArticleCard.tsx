import { Link } from 'react-router-dom';
import type { Article } from '../content/article-data';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
          {article.category}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {article.readTime} min read
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {article.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
          Read more →
        </span>
      </div>
    </Link>
  );
}
