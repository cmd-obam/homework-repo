import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function Language() {
  const { language, translations, toggleLanguage } =
    useContext(LanguageContext);

  return (
    <div>
      <h1>{translations[language].greeting}</h1>
      <p>{translations[language].welcome}</p>
      <button onClick={toggleLanguage}>
        {translations[language].changeLanguage}
      </button>
    </div>
  );
}

export default Language;
