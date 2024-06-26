import { Heading, HeadingSize } from "../Heading";

type ModalProps = {
  children?: React.ReactNode;
  title?: string;
  titleAction?: React.ReactNode;
  visible?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  titleAction,
  visible,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute h-screen w-screen transform bg-black/50">
      <article className="absolute left-1/2 top-1/2 flex w-[32rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-white p-8 dark:bg-dark-grey dark:text-white">
        <header className="flex justify-between">
          <Heading size={HeadingSize.L}>{title}</Heading>
          {titleAction}
        </header>
        {children}
      </article>
    </div>
  );
};
