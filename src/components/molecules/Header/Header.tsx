import { Button } from "components/atoms/Button";
import Image from "next/image";
import iconVerticalEllipsisSrc from "../../../assets/images/icon-vertical-ellipsis.svg";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-lines-light p-5 dark:border-lines-dark dark:bg-dark-grey">
      <h1 className="text-2xl font-bold dark:text-white">Platform Launch</h1>
      <div className="flex items-center gap-7">
        <Button disabled>+ Add New Task</Button>
        <Image src={iconVerticalEllipsisSrc} alt="settings" />
      </div>
    </header>
  );
};
