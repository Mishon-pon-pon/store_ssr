"use client";

import { FC } from "react";
import { IRacket } from "../../model";
import { Description } from "./Description";
import { RacketImage } from "./RacketImage/RacketImage";
import { RacketPrice } from "./Price";

interface IProps {
  racket: IRacket;
}

export const RacketDetails: FC<IProps> = ({ racket }) => {
  return (
    <section className="flex justify-between m-auto gap-8 flex-col lg:flex-row">
      <Description className="flex-1 order-3 m-0 lg:order-0" racket={racket} />
      <RacketImage
        className="flex-2 order-1 lg:order-0"
        path={racket?.imageUrl}
        alt={racket?.name}
      />
      <RacketPrice
        className="flex-1 m-0 order-2 lg:order-0"
        price={racket?.price}
      />
    </section>
  );
};
