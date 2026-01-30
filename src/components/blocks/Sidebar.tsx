import React from 'react';
import PostCard from '../ui/PostCard';
import NewsletterForm from '../ui/NewsletterForm';
import Button from '../ui/Button';

interface Post {
  id: number;
  image: string;
  title: string;
  date: string;
}

interface SidebarProps {
  lastSeenPosts: Post[];
  popularPosts: Post[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  lastSeenPosts,
  popularPosts,
  className = '',
}) => {
  return (
    <aside className={`w-full max-w-[370px] ${className}`}>
      {/* Last Seen Section */}
      <div className="mb-10">
        <h3 className="text-[rgba(21,20,57,0.4)] text-sm font-bold uppercase tracking-[2px] leading-[26px] mb-6">
          Last Seen
        </h3>
        <div className="space-y-6">
          {lastSeenPosts.map((post) => (
            <PostCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>

      {/* Newsletter Form */}
      <NewsletterForm className="mb-10" />

      {/* Most Popular Section */}
      <div className="mb-10">
        <h3 className="text-[rgba(21,20,57,0.4)] text-sm font-bold uppercase tracking-[2px] leading-[26px] mb-6">
          Most Popular
        </h3>
        <div className="space-y-6">
          {popularPosts.map((post) => (
            <PostCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <Button variant="primary" className="w-[130px]">
        Load More
      </Button>
    </aside>
  );
};

export default Sidebar;
