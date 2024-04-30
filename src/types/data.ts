type Subtask = {
  title: string;
  isCompleted: boolean;
};

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

export type { Subtask, Task };
