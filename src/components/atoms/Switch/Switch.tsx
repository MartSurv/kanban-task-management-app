"use client";

import React, { useEffect } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import clsx from "clsx";
import { useAppContext } from "contexts/AppContext";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useAppContext();

  useEffect(() => {
    if (localStorage.theme === Theme.Dark || theme === Theme.Dark) {
      document.documentElement.classList.add(Theme.Dark);
    } else {
      document.documentElement.classList.remove(Theme.Dark);
    }
  }, [theme]);

  return (
    <SwitchPrimitives.Root
      className={clsx(
        "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=unchecked]:bg-input peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-main-purple transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-main-purple",
        className,
      )}
      checked={theme === Theme.Dark}
      onCheckedChange={(checked) => {
        setTheme(checked ? Theme.Dark : Theme.Light);
        localStorage.setItem("theme", checked ? Theme.Dark : Theme.Light);
      }}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={clsx(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
