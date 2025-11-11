import { ComponentWithChildren } from "@shared-types/components/component-with-children";
import {
  Children,
  cloneElement,
  isValidElement,
  CSSProperties,
  ReactElement,
} from "react";

type SlotProps = {
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

export const Slot: ComponentWithChildren<SlotProps> = ({
  children,
  ...slotProps
}) => {
  const child = Children.toArray(children).find(isValidElement);

  if (!child || Children.count(children) > 1) {
    if (Children.count(children) > 1) {
      console.warn(
        "[asChild] Component got more then 1 children, merge is impossible."
      );
    }
    return <>{children}</>;
  }

  const typedChild = child as ReactElement<SlotProps>;
  const childProps = typedChild.props as SlotProps;

  return cloneElement(typedChild, {
    ...slotProps,
    ...childProps,

    className: [slotProps.className, childProps.className]
      .filter(Boolean)
      .join(" "),

    style: {
      ...slotProps.style,
      ...childProps.style,
    },
  });
};
