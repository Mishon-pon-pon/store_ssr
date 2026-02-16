"use client";
import { Footer } from "@/packages/shell/entities/Footer";
import { Logo } from "@/packages/shell/entities/Logo";
import { EPaths } from "@/packages/shell/entities/Navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const FooterWidget = () => {
  const route = useRouter();

  const onClickLogo = useCallback(() => {
    route.push(EPaths.home);
  }, [route]);

  return (
    <Footer
      className="p-4 mt-8"
      logo={<Logo tag="p" onClick={onClickLogo} />}
    />
  );
};
