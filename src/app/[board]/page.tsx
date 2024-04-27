import { Card } from "components/atoms/Card";
import data from "../../../data/data.json";
import { BoardColumn } from "components/molecules/BoardColumn";

export default function Page({ params }: { params: { board: string } }) {
  const boardName = params.board.split("-").join(" ").toLocaleLowerCase();
  const board = data.boards.find(
    (board) => board.name.toLocaleLowerCase() === boardName,
  );

  return (
    <div className="flex gap-6">
      {board?.columns.map((column) => {
        return (
          <BoardColumn
            title={`${column.name} (${column.name.length})`}
            key={column.name}
          >
            {column.tasks.map((task) => {
              return (
                <Card
                  href={`/${params.board}?task=${task.id}`}
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
