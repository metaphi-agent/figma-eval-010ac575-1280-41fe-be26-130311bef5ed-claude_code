import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  author?: {
    name: string;
    tagline: string;
    avatar: string;
    socials: { icon: ReactNode; url: string }[];
  };
}

export default function Hero({ title, subtitle, author }: HeroProps) {
  return (
    <div className="bg-[--color-primary] text-white py-20 px-6">
      <div className="content-container">
        {subtitle && (
          <p className="text-sm font-bold uppercase tracking-[2px] mb-8">
            {subtitle}
          </p>
        )}
        <h1 className="text-[58px] font-bold leading-[70px] tracking-[-1px] mb-12 max-w-[780px]">
          {title}
        </h1>
        {author && (
          <div className="flex items-center gap-6">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-[100px] h-[100px] rounded-full object-cover"
              loading="eager"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{author.name}</h2>
              <p className="text-base opacity-90 mb-3">{author.tagline}</p>
              <div className="flex items-center gap-4">
                {author.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="text-white hover:opacity-80 transition-opacity duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
