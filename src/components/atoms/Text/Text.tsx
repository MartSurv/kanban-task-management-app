import clsx from "clsx";

export enum TextSize {
  Medium,
  Large,
}

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  size?: TextSize;
};

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size = TextSize.Medium,
}) => {
  const textClassNames = clsx(
    {
      "text-xs font-bold": size === TextSize.Medium,
      "text-sm font-medium leading-6": size === TextSize.Large,
    },
    className,
  );

  return <p className={textClassNames}>{children}</p>;
};
