type ModalProps = {
  children?: React.ReactNode;
  visible?: boolean;
};

export const Modal: React.FC<ModalProps> = ({ children, visible }) => {
  if (!visible) {
    return null;
  }

  return <div className="p-8">{children}</div>;
};
