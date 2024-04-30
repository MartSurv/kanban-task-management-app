import { ViewTaskModal } from "components/molecules/ViewTaskModal";
import { Action } from "types";
import data from "../../../../../data/data.json";
import { Text, TextSize } from "components/atoms/Text";
import { Heading, HeadingSize } from "components/atoms/Heading";
import { Checkbox } from "@radix-ui/react-checkbox";

type Params = {
  id: string;
};

type SearchParams = {
  action: Action;
  taskId: string;
};

type PageParams = {
  params: Params;
  searchParams: SearchParams;
};

export default function Page({
  params: { id },
  searchParams: { action, taskId },
}: PageParams) {
  if (action === Action.View) {
    const task = data.boards
      .find((board) => board.id === Number(id))
      ?.columns.find((column) =>
        column.tasks.find((task) => task.id === Number(taskId)),
      )
      ?.tasks.find((task) => task.id === Number(taskId));

    return <ViewTaskModal data={task} visible />;
  }

  return null;
}
