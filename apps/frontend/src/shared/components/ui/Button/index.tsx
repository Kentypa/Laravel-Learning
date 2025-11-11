import { ComponentWithChildren } from "@shared-types/components/component-with-children";
import { Slot } from "@wrappers/Slot";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  asChild?: boolean;
  handleClick?: () => void;
  className?: string;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className" | "children"
>;

export const Button: ComponentWithChildren<ButtonProps> = ({
  asChild = false,
  handleClick,
  children,
  className = "",
  ...otherOptions
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={className} onClick={handleClick} {...otherOptions}>
      {children}
    </Comp>
  );
};
