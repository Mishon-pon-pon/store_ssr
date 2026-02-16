"use client";
import { useMemo } from "react";
import { IRacket, RacketDetails } from "@/packages/Rackets/entities/Racket";
import { useParams } from "next/navigation";
import { rackets } from "../mocks/Rackets";

export const RacketDetailsWidget = () => {
  const { id } = useParams();
  const racket = useMemo(() => {
    return rackets.find((item) => item.id === Number(id)) as IRacket;
  }, [id]);

  return <RacketDetails racket={racket} />;
};
