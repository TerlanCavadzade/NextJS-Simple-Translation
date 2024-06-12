import Select from "./select";

const LangSwitch = ({ locale }: { locale: string }) => {
  // get languages from server
  // const langs = await fetch("api url")

  const langs = ["az", "en", "ru"];

  return <Select selected={locale} langs={langs} />;
};

export default LangSwitch;
