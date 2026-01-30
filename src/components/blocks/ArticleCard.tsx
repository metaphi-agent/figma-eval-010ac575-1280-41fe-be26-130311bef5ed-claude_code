import { Link } from 'react-router-dom';

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt?: string;
  date: string;
  variant?: 'default' | 'sidebar';
}

export default function ArticleCard({
  image,
  title,
  excerpt,
  date,
  variant = 'default',
}: ArticleCardProps) {
  if (variant === 'sidebar') {
    return (
      <Link
        to="/article"
        className="flex gap-4 group hover:opacity-75 transition-opacity duration-150"
      >
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-[--color-text-primary] font-medium text-sm leading-tight mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-secondary">{date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/article"
      className="block group hover:opacity-90 transition-opacity duration-150"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-lg mb-4"
        loading="lazy"
      />
      {excerpt && (
        <p className="text-xs text-gray-400 mb-2 italic">photo by Denis</p>
      )}
      <p className="text-secondary text-base leading-relaxed mb-4">{excerpt}</p>
    </Link>
  );
}
