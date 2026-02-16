"use client";

import { useMemo } from "react";
import { RacketsList } from "../../../entities/RacketsList";
import { rackets } from "../mocks/Rackets";
import { useTranslations } from "next-intl";
import { RacketListFilters } from "@/packages/Rackets/entities/RacketListFilters";
import { IBrand } from "@/packages/Rackets/entities/RacketListFilters/model/interfaces";
import { useSearchParams } from "next/navigation";

export const RacketsListWidget = () => {
  const searchParams = useSearchParams();
  const racketsList = useMemo(() => {
    const activeBrandId = searchParams.get("brand");
    if (activeBrandId) {
      return rackets.filter(
        (item) => item.brand.id.toString() === activeBrandId,
      );
    }

    return rackets;
  }, [searchParams]);

  const brands = useMemo(() => {
    const map: Record<string, number> = {};
    for (let i = 0; i < rackets.length; i++) {
      const brand = rackets[i].brand;
      map[brand.name] = brand.id;
    }

    return Object.keys(map).map(
      (key) => ({ name: key, id: map[key] }) as IBrand,
    );
  }, []);

  const t = useTranslations();

  return (
    <section className="flex">
      <div className="hidden w-60 pl-4 sm:flex">
        <RacketListFilters brands={brands} />
      </div>
      <div className="flex flex-1 flex-col gap-12">
        <h2 className="text-3xl font-bold">{t("rackets.title")}</h2>
        <RacketsList rackets={racketsList} />
      </div>
    </section>
  );
};
