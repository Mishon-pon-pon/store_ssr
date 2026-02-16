import { useLocale } from "next-intl";
import { FC } from "react";
import { cn } from "@/packages/shell/shared/utils/cls";

const ExcahgeRate = 90.55;

interface IProps {
  price: number;
  className?: string;
}

export const RacketPrice: FC<IProps> = ({ price, className }) => {
  const locale = useLocale();
  const actualPrice = locale === "ru" ? price * ExcahgeRate : price;
  return (
    <div className={cn("mt-20 font-bold text-xl", className)}>
      {Intl.NumberFormat(locale, {
        style: "currency",
        currency: locale === "ru" ? "RUB" : "EUR",
      }).format(actualPrice)}
    </div>
  );
};
