"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { IBrand } from "../model/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  brands: IBrand[];
}

export const RacketListFilters: FC<IProps> = ({ brands }) => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <section>
      <div>
        <div className="text-xs text-gray-400 mb-4">
          {t("rackets.filters.brand")}
        </div>
        <div className="flex flex-col gap-2 w-fit">
          <button
            style={searchParams.get("brand") ? {} : { fontWeight: 700 }}
            className="text-left cursor-pointer"
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.delete("brand");
              router.replace(`${pathname}?${params.toString()}`, {
                scroll: false,
              });
            }}
          >
            {t("rackets.filters.all")}
          </button>
          {brands.map((brand) => {
            const isActive = searchParams.get("brand") === brand.id.toString();
            return (
              <div key={brand.id}>
                <button
                  style={isActive ? { fontWeight: 700 } : {}}
                  className="text-left cursor-pointer"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("brand", String(brand.id));
                    router.replace(`${pathname}?${params.toString()}`, {
                      scroll: false,
                    });
                  }}
                >
                  {brand.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
