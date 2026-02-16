import { RacketsHomeWidget } from "@/packages/Rackets/widgets/RacketsHomeWidget";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 60;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Для проверки ISR: время обновится после пересборки (revalidate = 60 сек)
  const generatedAt = new Date().toISOString();

  console.log("[ISR] Home Page Сгенерировано:", generatedAt);

  return <RacketsHomeWidget />;
}
