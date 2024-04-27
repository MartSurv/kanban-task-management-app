"use client";

import LogoLight from "assets/images/logo-light.svg";
import LogoDark from "assets/images/logo-dark.svg";
import { Theme, useAppContext } from "contexts/AppContext";

export const Logo: React.FC = () => {
  const { theme } = useAppContext();

  return theme === Theme.Light ? (
    <LogoDark className="ml-8 h-[1.8rem]" />
  ) : (
    <LogoLight className="ml-8 h-[1.8rem]" />
  );
};
