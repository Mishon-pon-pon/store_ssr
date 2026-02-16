"use client";
import { Header } from "@/packages/shell/entities/Header";
import { EPaths, Navigation } from "@/packages/shell/entities/Navigation";
import { ThemeToggle } from "@/packages/shell/entities/Theme";
import { LocaleSwitcher } from "@/packages/shell/entities/LocaleSwitcher";
import { Logo } from "@/packages/shell/entities/Logo";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const HeaderWidget = () => {
  const route = useRouter();

  const onClickLogo = useCallback(() => {
    route.push(EPaths.home);
  }, [route]);

  return (
    <Header
      leftHeaderPlace={<Navigation />}
      midHeaderPlace={<Logo className="m-auto" onClick={onClickLogo} />}
      rightHeaderPlace={
        <div className="flex gap-4 items-center justify-end">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      }
    />
  );
};
