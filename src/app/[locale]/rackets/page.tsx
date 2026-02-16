import { setRequestLocale } from "next-intl/server";
import { RacketsListWidget } from "@/packages/Rackets/widgets/RacketsListWidget";
import { Suspense } from "react";

export const revalidate = 60;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RacketsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Для проверки ISR: время обновится после пересборки (revalidate = 60 сек)
  const generatedAt = new Date().toISOString();

  console.log("[ISR] Racket List Сгенерировано:", generatedAt);

  return (
    <Suspense fallback={null}>
      <RacketsListWidget />
    </Suspense>
  );
}
