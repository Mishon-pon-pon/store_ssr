"use client";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { getNavigation } from "../model/navigation";
import { Link } from "@/i18n/navigation";
import { useActivePath } from "../hooks/useActivePath";

export const Navigation = () => {
  const t = useTranslations();
  const navigations = useMemo(() => getNavigation(), []);
  const isActive = useActivePath();

  return (
    <nav
      aria-label="Main navigation"
      className="flex gap-4 justify-start text-sm"
    >
      {navigations.map((navigation) => {
        return (
          <Link
            className={isActive(navigation.path) ? "text-orange-500" : ""}
            key={navigation.path}
            href={navigation.path}
          >
            {t(navigation.labelKey)}
          </Link>
        );
      })}
    </nav>
  );
};
