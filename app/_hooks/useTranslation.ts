import getAllTranslations from "../_services/getTranslations";

const useTranslation = async (lang = "en") => {
  const translations = await getAllTranslations();

  const getTranslation = (key: string) => {
    return translations?.[lang]?.[key];
  };

  return getTranslation;
};

export default useTranslation;
