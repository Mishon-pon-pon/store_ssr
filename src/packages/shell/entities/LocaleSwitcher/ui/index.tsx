"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => handleLocaleChange(locale)}
          style={{
            fontWeight: currentLocale === locale ? "bold" : "normal",
            textTransform: "uppercase",
          }}
        >
          {locale}
        </button>
      ))}
    </span>
  );
}
