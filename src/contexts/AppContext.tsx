"use client";

import { createContext, useContext, useMemo, useState } from "react";

enum Theme {
  Light = "light",
  Dark = "dark",
}

type AppContextValues = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const AppContext = createContext<AppContextValues>({
  theme: Theme.Light,
  setTheme: () => null,
});

const useAppContext = () => useContext(AppContext);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Theme)
      : Theme.Light,
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider, Theme, useAppContext };
