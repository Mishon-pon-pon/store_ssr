import Image from "next/image";
import { FC } from "react";
import { cn } from "@/packages/shell/shared/utils/cls";

interface IProps {
  path: string;
  alt: string;
  className?: string;
}

export const RacketImage: FC<IProps> = ({ path, alt, className = "" }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="w-fit overflow-hidden h-screen border border-solid rounded-md">
        <Image
          className="w-full h-full object-cover object-center"
          alt={alt}
          src={path}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
