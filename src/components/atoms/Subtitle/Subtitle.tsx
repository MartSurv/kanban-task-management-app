import clsx from "clsx";

type SubtitleProps = {
  className?: string;
  color?: string;
  text?: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({
  color,
  className,
  text,
}) => {
  const subtitleClassNames = clsx(
    "text-xs font-bold uppercase tracking-[.2em] text-medium-grey",
    className,
  );

  return (
    <div className="flex items-center gap-3">
      {color && <span className="h-4 w-4 rounded-full bg-main-purple"></span>}
      <p className={subtitleClassNames}>{text}</p>
    </div>
  );
};
