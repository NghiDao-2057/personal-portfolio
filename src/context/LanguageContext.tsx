"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "vi" | "en";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "vi",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  const toggle = () => setLang((l) => (l === "vi" ? "en" : "vi"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
