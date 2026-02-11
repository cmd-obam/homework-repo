import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  ko: {
    greeting: "안녕하세요",
    welcome: "환영합니다",
    changeLanguage: "언어 변경",
  },
  en: {
    greeting: "Hello",
    welcome: "Welcome",
    changeLanguage: "Change Language",
  },
};
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };
  return (
    <>
      <LanguageContext.Provider
        value={{ language, setLanguage, translations, toggleLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    </>
  );
}

export default LanguageProvider;
