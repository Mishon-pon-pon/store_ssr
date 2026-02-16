import React, { FC } from "react";
import { cn } from "@/packages/shell/shared/utils/cls";

interface IProps {
  onClick: () => void;
  className?: string;
  tag?: "p" | "h1";
}
export const Logo: FC<IProps> = React.memo(
  ({ onClick, className, tag = "h1" }) => {
    const cls = cn("cursor-pointer w-fit", className);
    switch (tag) {
      case "p":
        return (
          <p className={cls} onClick={onClick}>
            TENNIS STORE
          </p>
        );
      default:
        return (
          <h1 className={cls} onClick={onClick}>
            TENNIS STORE
          </h1>
        );
    }
  },
);

Logo.displayName = "Logo";
