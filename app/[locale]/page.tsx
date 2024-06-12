import useTranslation from "../_hooks/useTranslation";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await useTranslation(locale);

  return (
    <>
      <h2>{t("title")}</h2>
    </>
  );
}
