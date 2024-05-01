import { Card } from "components/atoms/Card";
import { BoardColumn } from "components/molecules/BoardColumn";
import { getBoards } from "utils/getBoards";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getBoards(params.id);

  return (
    <div className="flex gap-6">
      {data?.columns.map((column) => {
        return (
          <BoardColumn
            title={`${column.name} (${column.name.length})`}
            key={column.name}
          >
            {column.tasks.map((task) => {
              return (
                <Card
                  href={`/boards/${params.id}?action=view&taskId=${task.id}`}
                  key={task.id}
                  title={task.title}
                  subtasks={task.subtasks}
                />
              );
            })}
          </BoardColumn>
        );
      })}
    </div>
  );
}
