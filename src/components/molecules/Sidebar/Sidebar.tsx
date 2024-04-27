import { NavLink } from "components/atoms/NavLink";
import IconBoard from "assets/images/icon-board.svg";
import IconLightTheme from "assets/images/icon-light-theme.svg";
import IconDarkTheme from "assets/images/icon-dark-theme.svg";
import data from "../../../../data/data.json";
import { Switch } from "components/atoms/Switch";
import { Logo } from "components/atoms/Logo";

export const Sidebar: React.FC = () => {
  return (
    <aside className="flex w-72 flex-col gap-16 border-r py-8 pr-6 dark:border-lines-dark dark:bg-dark-grey">
      <Logo />
      <div className="flex w-full flex-col gap-5">
        <span className="ml-8 text-xs font-bold tracking-[.2em] text-medium-grey">
          ALL BOARDS (8)
        </span>
        <nav className="*:pl-8">
          {data.boards.map((board) => {
            return (
              <NavLink className="group" key={board.name} href="">
                <IconBoard className="fill-medium-grey group-hover:fill-main-purple" />
                {board.name}
              </NavLink>
            );
          })}
          <NavLink className="!text-main-purple" href="">
            <IconBoard className="fill-main-purple" />+ Create New Board
          </NavLink>
        </nav>
        <div className="ml-8 flex items-center justify-center gap-6 bg-light-grey p-3.5 dark:bg-very-dark-grey">
          <IconLightTheme />
          <Switch />
          <IconDarkTheme />
        </div>
      </div>
    </aside>
  );
};
