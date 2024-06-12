"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, memo, useEffect, useState, useTransition } from "react";

const Select = ({ langs, selected }: { langs: string[]; selected: string }) => {
  const [selectedLang, setSelectedLang] = useState(selected);
  const [ispending, startTransition] = useTransition();

  const router = useRouter();

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(e.target.value);
  };

  useEffect(() => {
    if (selectedLang !== selected) {
      startTransition(() => {
        router.replace(selectedLang);
      });
    }
  }, [selectedLang, selected, router]);

  return (
    <select
      value={selectedLang}
      disabled={ispending}
      onChange={selectChangeHandler}
    >
      {langs.map((lang, id) => (
        <option key={id} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
