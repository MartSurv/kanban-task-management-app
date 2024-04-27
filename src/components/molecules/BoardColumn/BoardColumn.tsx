import { Subtitle } from "components/atoms/Subtitle";

type BoardColumnProps = {
  title?: string;
  children?: React.ReactNode;
};

export const BoardColumn: React.FC<BoardColumnProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex basis-[280px] flex-col gap-6">
      <Subtitle text={title} />
      {children}
    </div>
  );
};
