import clsx from "clsx";

export enum ButtonSize {
  Large,
  Small,
}

export enum ButtonType {
  Primary,
  Secondary,
  Destructive,
}

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  type = ButtonType.Primary,
  size = ButtonSize.Large,
  onClick,
}) => {
  const buttonClassNames = clsx(
    {
      "p-3.5 text-sm": size === ButtonSize.Large,
      "p-2 text-xs": size === ButtonSize.Small,
      "bg-main-purple text-white hover:bg-main-purple-hover":
        type === ButtonType.Primary,
      "bg-main-purple/10 text-main-purple hover:bg-main-purple/25":
        type === ButtonType.Secondary,
      "bg-custom-red hover:bg-custom-red-hover":
        type === ButtonType.Destructive,
      "opacity-25 disabled:pointer-events-none": disabled,
    },
    "rounded-3xl font-bold",
    className,
  );

  return (
    <button className={buttonClassNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
