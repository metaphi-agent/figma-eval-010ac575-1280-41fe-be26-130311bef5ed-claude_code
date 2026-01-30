import React from 'react';

interface HeroHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  label,
  title,
  className = '',
}) => {
  return (
    <section className={`bg-[#2F1893] py-20 ${className}`}>
      <div className="max-w-[1170px] mx-auto px-8">
        <span className="text-white text-sm font-bold uppercase tracking-[2px] leading-[26px] block mb-6">
          {label}
        </span>
        <h1
          className="text-white text-[58px] font-bold leading-[70px] tracking-[-1px] max-w-[780px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </section>
  );
};

export default HeroHeader;
