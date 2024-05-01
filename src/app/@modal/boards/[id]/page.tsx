import { ViewTaskModal } from "components/molecules/ViewTaskModal";
import prisma from "data/db";
import { Action } from "types";

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

const getData = async (id: string) => {
  return await prisma.boards.findUnique({ where: { id } });
};

export default async function Page({
  params: { id },
  searchParams: { action, taskId },
}: PageParams) {
  const data = await getData(id);

  if (action === Action.View) {
    const task = data?.columns
      .find((column) => column.tasks.find((task) => task.id === taskId))
      ?.tasks.find((task) => task.id === taskId);

    return <ViewTaskModal columns={data?.columns} task={task} visible />;
  }

  return null;
}
