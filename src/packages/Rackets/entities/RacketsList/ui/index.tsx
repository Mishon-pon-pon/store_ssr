import { FC } from "react";
import { IRacketsListItem } from "../model";
import { Link } from "@/i18n/navigation";
import { RacketCard } from "./RacketCard/RacketCard";
import styles from "./styles.module.css";

interface IProps {
  rackets: IRacketsListItem[];
}

export const RacketsList: FC<IProps> = ({ rackets }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,17rem))] gap-5 place-content-center sm:m-0 sm:place-content-start">
      {rackets.map((racket) => {
        return (
          <div key={racket.id}>
            <Link href={`/rackets/${racket.id}`}>
              <RacketCard racket={racket} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
