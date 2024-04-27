import { Button } from "components/atoms/Button";
import IconVerticalEllipsis from "assets/images/icon-vertical-ellipsis.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-lines-light bg-white p-5 dark:border-lines-dark dark:bg-dark-grey">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Platform Launch
      </h1>
      <div className="flex items-center gap-7">
        <Button disabled>+ Add New Task</Button>
        <IconVerticalEllipsis />
      </div>
    </header>
  );
};
