import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { HeaderWidget } from "@/packages/shell/widgets/HeaderWidget/ui";
import { SetLangAttribute } from "./SetLangAttribute";
import { routing } from "@/i18n/routing";
import { FooterWidget } from "@/packages/shell/widgets/FooterWidget/ui";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SetLangAttribute />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <HeaderWidget />
        <main className="border-t border-b flex-1 pt-8 pb-16">
          <div style={{ padding: "1rem" }}>{children}</div>
        </main>
        <FooterWidget />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
