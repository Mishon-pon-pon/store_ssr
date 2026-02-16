import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/packages/shell/shared/utils/cls";

interface IProps {
  logo?: React.ReactNode;
  className?: string;
}

export const Footer: FC<IProps> = ({ logo, className = "" }) => {
  const t = useTranslations();

  return (
    <footer className={cn("min-h-40 flex flex-col justify-between", className)}>
      {logo}
      <div>
        <time dateTime="2025">© 2025</time> Tennis store.{" "}
        {t("footer.copyright")}
      </div>
    </footer>
  );
};
