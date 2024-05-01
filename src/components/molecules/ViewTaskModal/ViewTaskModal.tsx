import { Checkbox } from "components/atoms/Checkbox";
import { Heading, HeadingSize } from "components/atoms/Heading";
import { Modal } from "components/atoms/Modal";
import { Text, TextSize } from "components/atoms/Text";
import IconVerticalEllipsis from "assets/images/icon-vertical-ellipsis.svg";
import { BoardsColumns, BoardsColumnsTasks } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/atoms/Select";

type ViewTaskModalProps = {
  columns?: BoardsColumns[];
  task?: BoardsColumnsTasks;
  visible?: boolean;
};

export const ViewTaskModal: React.FC<ViewTaskModalProps> = ({
  columns,
  task,
  visible,
}) => {
  const completedSubtasks = task?.subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;
  const subtaskCount = task?.subtasks.length;

  return (
    <Modal
      title={task?.title}
      titleAction={
        <button className="p-1" type="button">
          <IconVerticalEllipsis />
        </button>
      }
      visible={visible}
    >
      <section className="flex justify-between">
        <Text className="text-medium-grey" size={TextSize.Large}>
          {task?.description}
        </Text>
      </section>
      <section className="flex flex-col gap-4">
        <Heading
          size={HeadingSize.S}
        >{`Subtasks (${completedSubtasks} of ${subtaskCount})`}</Heading>
        <div className="flex flex-col gap-2">
          {task?.subtasks.map((subtask) => {
            return (
              <div
                className="flex gap-4 rounded bg-main-purple/25 p-4"
                key={subtask.title}
              >
                <Checkbox
                  checked={subtask.isCompleted}
                  className="peer"
                  id={subtask.title}
                />
                <label
                  className="text-xs font-bold peer-data-[state=checked]:text-white/50 peer-data-[state=checked]:line-through"
                  htmlFor={subtask.title}
                >
                  {subtask.title}
                </label>
              </div>
            );
          })}
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {columns?.map((column) => {
                return (
                  <SelectItem key={column.id} value={column.id}>
                    {column.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
    </Modal>
  );
};
