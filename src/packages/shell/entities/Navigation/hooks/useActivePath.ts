"use client";
import { usePathname } from "@/i18n/navigation";

export const useActivePath = () => {
  const pathname = usePathname();

  return (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(path + "/");
  };
};
