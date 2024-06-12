import { cache } from "react";
import { fakeTranslations } from "../_helpers/fakeApiRequest";

const getAllTranslations = async () => {
  // fetch automatically cache so it will not request again and again
  return await fakeTranslations();
};

export default cache(getAllTranslations);
