interface SidebarPostProps {
  image: string;
  title: string;
  date: string;
}

export function SidebarPost({ image, title, date }: SidebarPostProps) {
  return (
    <a href="#" className="flex gap-5 group py-2">
      <div className="w-[170px] h-[105px] shrink-0 overflow-hidden rounded-[10px]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <p className="text-heading font-normal text-base leading-[26px] line-clamp-3 group-hover:text-action-primary transition-colors duration-150">
          {title}
        </p>
        <p className="text-text-muted font-normal text-base leading-[26px] mt-1">
          {date}
        </p>
      </div>
    </a>
  );
}
