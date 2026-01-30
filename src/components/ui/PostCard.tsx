import React from 'react';

interface PostCardProps {
  image: string;
  title: string;
  date: string;
  className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  date,
  className = '',
}) => {
  return (
    <article className={`flex gap-4 ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-[170px] h-[105px] object-cover rounded-[10px] flex-shrink-0"
        loading="lazy"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-[#1E0D63] text-base font-normal leading-[26px] mb-1">
          {title}
        </h4>
        <span className="text-[rgba(21,20,57,0.4)] text-base font-normal leading-[26px]">
          {date}
        </span>
      </div>
    </article>
  );
};

export default PostCard;
