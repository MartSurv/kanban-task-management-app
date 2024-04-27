import Link from "next/link";
import { Subtask } from "types/data";

type CardProps = {
  href: string;
  title?: React.ReactNode;
  subtasks?: Subtask[];
};

export const Card: React.FC<CardProps> = ({ href, title, subtasks }) => {
  const subtasksCount = subtasks?.length ?? 0;
  const completedTasksCount = subtasks?.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <Link
      className="flex flex-col gap-2 rounded-lg bg-white px-6 py-4 text-left shadow-md dark:bg-dark-grey"
      href={href}
    >
      <span className="font-bold dark:text-white">{title}</span>
      <span className="text-xs font-bold text-medium-grey">{`${completedTasksCount} of ${subtasksCount} substasks`}</span>
    </Link>
  );
};
