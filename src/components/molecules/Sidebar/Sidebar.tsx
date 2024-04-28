"use client";

import { NavLink } from "components/atoms/NavLink";
import IconBoard from "assets/images/icon-board.svg";
import IconLightTheme from "assets/images/icon-light-theme.svg";
import IconDarkTheme from "assets/images/icon-dark-theme.svg";
import IconHideSidebar from "assets/images/icon-hide-sidebar.svg";
import IconShowSidebar from "assets/images/icon-show-sidebar.svg";
import data from "../../../../data/data.json";
import { Switch } from "components/atoms/Switch";
import { Logo } from "components/atoms/Logo";
import { Subtitle } from "components/atoms/Subtitle";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  const boardsCount = data.boards.length.toString();
  const sidebarClassNames = clsx(
    { "w-72": isExpanded },
    { hidden: !isExpanded },
    "flex flex-col gap-16 border-r bg-white py-8 pr-6 dark:border-lines-dark dark:bg-dark-grey",
  );

  return (
    <>
      <aside className={sidebarClassNames}>
        <Logo />
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Subtitle className="ml-8" text={`all boards (${boardsCount})`} />
            <nav className="*:pl-8">
              {data.boards.map((board) => {
                const href = `/boards/${board.id}`;
                return (
                  <NavLink
                    active={Number(pathname[pathname.length - 1]) === board.id}
                    className="group"
                    href={href}
                    key={board.name}
                  >
                    <IconBoard className="fill-medium-grey group-hover:fill-main-purple" />
                    {board.name}
                  </NavLink>
                );
              })}
              <NavLink className="!text-main-purple" href="">
                <IconBoard className="fill-main-purple" />+ Create New Board
              </NavLink>
            </nav>
          </div>
          <footer className="ml-8 flex flex-col gap-6">
            <div className="flex items-center justify-center gap-6 bg-light-grey p-3.5 dark:bg-very-dark-grey">
              <IconLightTheme />
              <Switch />
              <IconDarkTheme />
            </div>
            <div className="flex items-center gap-4">
              <IconHideSidebar />
              <button
                className="font-bold text-medium-grey"
                onClick={() => setIsExpanded(false)}
              >
                Hide Sidebar
              </button>
            </div>
          </footer>
        </div>
      </aside>
      {!isExpanded && (
        <button
          className="absolute bottom-8 rounded-br-full rounded-tr-full bg-main-purple p-4 transition-colors hover:bg-main-purple-hover"
          onClick={() => setIsExpanded(true)}
        >
          <IconShowSidebar />
        </button>
      )}
    </>
  );
};
