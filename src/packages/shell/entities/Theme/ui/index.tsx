import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2V5 M12 19V22 M4.22 4.22L6.34 6.34 M17.66 17.66L19.78 19.78 M2 12H5 M19 12H22 M4.22 19.78L6.34 17.66 M17.66 6.34L19.78 4.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={24} height={24} aria-hidden>
      <path
        d="M20 14.5C19.33 14.67 18.63 14.75 17.93 14.75 C13.33 14.75 9.59 11.01 9.59 6.41 C9.59 5.71 9.67 5.01 9.84 4.34 C9.99 3.73 9.45 3.2 8.83 3.35 C6.02 3.99 4 6.54 4 9.5 C4 14.19 7.81 18 12.5 18 C15.46 18 18.01 15.98 18.65 13.17 C18.8 12.55 18.27 12.01 17.66 12.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const markMounted = () => setMounted(true);
    markMounted();
  }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const ariaLabel = isDark ? t("theme.switchToLight") : t("theme.switchToDark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={ariaLabel}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
