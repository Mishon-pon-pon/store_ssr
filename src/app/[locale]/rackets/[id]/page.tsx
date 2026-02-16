import { setRequestLocale } from "next-intl/server";
import { RacketDetailsWidget } from "@/packages/Rackets/widgets/RacketDetailsWidget";
import { routing } from "@/i18n/routing";
import { rackets } from "@/packages/Rackets/widgets/RacketDetailsWidget/mocks/Rackets";

export const revalidate = 60;

const STATIC_RACKET_COUNT = 3;

export async function generateStaticParams() {
  const ids = rackets.slice(0, STATIC_RACKET_COUNT).map((r) => String(r.id));
  return routing.locales.flatMap((locale) =>
    ids.map((id) => ({ locale, id }))
  );
}

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function RacketDetailsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Для проверки ISR: время обновится после пересборки (revalidate = 60 сек)
  const generatedAt = new Date().toISOString();

  console.log("[ISR] Details Page Сгенерировано:", generatedAt);

  return <RacketDetailsWidget />;
}
