"use client";
import { RacketCard } from "@/packages/Rackets/entities/RacketsList";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { rackets } from "../mocks/Rackets";
import { useRouter } from "next/navigation";
import { EPaths } from "@/packages/shell/entities/Navigation";
import Link from "next/link";

export const RacketsHomeWidget = () => {
  const t = useTranslations();
  const router = useRouter();
  const racketsList = useMemo(() => {
    return [...rackets].splice(0, 8);
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-bold">{t("nav.rackets")}</h2>
        <button
          onClick={() => {
            router.push(EPaths.rackets);
          }}
          className="cursor-pointer"
        >
          {t("rackets.filters.all")} ↗
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(23rem,1fr))] gap-5 auto-rows-[50rem] overflow-hidden justify-center  max-h-600 md:max-h-200">
        {racketsList.map((racket) => {
          return (
            <Link
              key={racket.id}
              href={`/rackets/${racket.id}`}
              className="h-fit"
            >
              <RacketCard racket={racket} size="big" />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
