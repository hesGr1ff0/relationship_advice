import { Link } from 'react-router-dom';
import type { Article } from '../content/article-data';

interface ArticleCardProps {
  article: Article;
}

const categoryAccent: Record<string, string> = {
  'Dating': 'bg-rose-500',
  'Communication': 'bg-violet-500',
  'Conflict Resolution': 'bg-amber-500',
  'Long-term Relationships': 'bg-emerald-500',
  'Self-Love': 'bg-sky-500',
};

const categoryBadge: Record<string, string> = {
  'Dating': 'text-rose-700 bg-rose-50',
  'Communication': 'text-violet-700 bg-violet-50',
  'Conflict Resolution': 'text-amber-700 bg-amber-50',
  'Long-term Relationships': 'text-emerald-700 bg-emerald-50',
  'Self-Love': 'text-sky-700 bg-sky-50',
};

export function ArticleCard({ article }: ArticleCardProps) {
  const accent = categoryAccent[article.category] ?? 'bg-rose-500';
  const badge = categoryBadge[article.category] ?? 'text-rose-700 bg-rose-50';

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-stone-100 hover:-translate-y-1 transition-all duration-200 overflow-hidden h-full"
    >
      <div className={`h-1 w-full ${accent}`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badge}`}>
            {article.category}
          </span>
          <span className="text-xs text-stone-400">{article.readTime} min read</span>
        </div>
        <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 group-hover:text-rose-600 transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-stone-500 text-sm mb-6 line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-stone-400">
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="text-rose-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
