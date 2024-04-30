import { Checkbox } from "components/atoms/Checkbox";
import { Heading, HeadingSize } from "components/atoms/Heading";
import { Modal } from "components/atoms/Modal";
import { Text, TextSize } from "components/atoms/Text";
import { Task } from "types/data";

type ViewTaskModalProps = {
  children?: React.ReactNode;
  data?: Task;
  visible?: boolean;
};

export const ViewTaskModal: React.FC<ViewTaskModalProps> = ({
  data,
  visible,
}) => {
  return (
    <Modal title={data?.title} visible={visible}>
      <section>
        <Text className="text-medium-grey" size={TextSize.Large}>
          {data?.description}
        </Text>
      </section>
      <section className="flex flex-col gap-4">
        <Heading size={HeadingSize.S}>Subtasks (2 of 3)</Heading>
        <div className="flex flex-col gap-2">
          {data?.subtasks.map((subtask) => {
            return (
              <div
                className="flex items-center gap-4 rounded bg-main-purple/25 p-4"
                key={subtask.title}
              >
                <Checkbox id={subtask.title} />
                <label className="text-xs font-bold" htmlFor={subtask.title}>
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
