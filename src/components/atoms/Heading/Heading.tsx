export enum HeadingSize {
  XL,
  L,
  M,
  S,
}

type HeadingProps = {
  children?: React.ReactNode;
  size?: HeadingSize;
};

export const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  if (size === HeadingSize.XL) {
    return (
      <h1 className="text-2xl font-bold text-black dark:text-white">
        {children}
      </h1>
    );
  }

  if (size === HeadingSize.L) {
    return (
      <h2 className="text-lg font-bold text-black dark:text-white">
        {children}
      </h2>
    );
  }

  if (size === HeadingSize.M) {
    return (
      <h3 className="text-sm font-bold text-black dark:text-white">
        {children}
      </h3>
    );
  }

  if (size === HeadingSize.S) {
    return (
      <h4 className="text-xs font-bold text-black dark:text-white">
        {children}
      </h4>
    );
  }

  return <h5>{children}</h5>;
};
