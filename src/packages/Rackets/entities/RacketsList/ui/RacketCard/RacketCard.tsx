import { FC } from "react";
import Image from "next/image";
import { IRacketsListItem } from "../../model";
import { cn } from "@/packages/shell/shared/utils/cls";

interface IProps {
  racket: IRacketsListItem;
  className?: string;
  size?: "smal" | "mid" | "big";
}

export const RacketCard: FC<IProps> = ({ className, racket, size }) => {
  const classHeight = (() => {
    switch (size) {
      case "mid":
        return "h-140";
      case "big":
        return "h-180";
      default:
        return "h-92";
    }
  })();

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "bg-white w-full overflow-hidden border rounded-md",
          classHeight,
        )}
      >
        <Image
          alt={racket.name}
          className={cn("w-full h-full object-fill object-center", className)}
          src={racket.imageUrl}
          width={1}
          height={1}
        />
      </div>
      <div>{racket.name}</div>
    </div>
  );
};
