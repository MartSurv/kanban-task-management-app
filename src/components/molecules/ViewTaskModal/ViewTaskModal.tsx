import { Checkbox } from "components/atoms/Checkbox";
import { Heading, HeadingSize } from "components/atoms/Heading";
import { Modal } from "components/atoms/Modal";
import { Text, TextSize } from "components/atoms/Text";
import IconVerticalEllipsis from "assets/images/icon-vertical-ellipsis.svg";
import { BoardsColumnsTasks } from "@prisma/client";

type ViewTaskModalProps = {
  children?: React.ReactNode;
  data?: BoardsColumnsTasks;
  visible?: boolean;
};

export const ViewTaskModal: React.FC<ViewTaskModalProps> = ({
  data,
  visible,
}) => {
  const completedSubtasks = data?.subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;
  const subtaskCount = data?.subtasks.length;

  return (
    <Modal
      title={data?.title}
      titleAction={
        <button className="p-1" type="button">
          <IconVerticalEllipsis />
        </button>
      }
      visible={visible}
    >
      <section className="flex justify-between">
        <Text className="text-medium-grey" size={TextSize.Large}>
          {data?.description}
        </Text>
      </section>
      <section className="flex flex-col gap-4">
        <Heading
          size={HeadingSize.S}
        >{`Subtasks (${completedSubtasks} of ${subtaskCount})`}</Heading>
        <div className="flex flex-col gap-2">
          {data?.subtasks.map((subtask) => {
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
      </section>
    </Modal>
  );
};
