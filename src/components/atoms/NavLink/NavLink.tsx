import clsx from "clsx";
import Link from "next/link";

type NavLinkProps = {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  href: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  active,
  children,
  className,
  href,
}) => {
  const linkClassNames = clsx(
    { "bg-main-purple text-white": active },
    "flex items-center gap-4 rounded-br-full rounded-tr-full p-3.5 font-bold text-medium-grey hover:bg-main-purple/10 hover:text-main-purple dark:hover:bg-white",
    className,
  );
  return (
    <Link className={linkClassNames} href={href}>
      {children}
    </Link>
  );
};
