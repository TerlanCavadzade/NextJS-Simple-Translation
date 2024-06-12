export type Data = Record<string, Record<string, string>>;

const data: Data = {
  en: {
    title: "hello",
  },
  az: {
    title: "salam",
  },
  ru: {
    title: "privet",
  },
};

export const fakeTranslations = () => {
  return new Promise<Data>((res) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });
};
