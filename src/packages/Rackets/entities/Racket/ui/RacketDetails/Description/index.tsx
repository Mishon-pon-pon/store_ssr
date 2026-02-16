import { FC } from "react";
import styles from "./styles.module.css";
import { IRacket } from "../../../model";
import { cn } from "@/packages/shell/shared/utils/cls";

interface IProps {
  racket: IRacket;
  className?: string;
}
export const Description: FC<IProps> = ({ racket, className }) => {
  return (
    <section className={cn("mt-20", className)}>
      <div className="text-xs text-gray-500 mb-4">{racket?.brand.name}</div>
      <h2 className="text-2xl font-bold mb-3">
        {racket?.brand.name} {racket?.model}
      </h2>
      <p>{racket?.description}</p>
    </section>
  );
};
