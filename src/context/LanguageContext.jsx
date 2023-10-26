import { useState } from "react";
import { createContext } from "react";
import { texts_en } from "../translations/en";

const LanguageContext = createContext();

const LenguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [texts, setTexts] = useState(texts_en);
  
  const data = {language, setLanguage, texts, setTexts}

  return (
    <LanguageContext.Provider value={ data }>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LenguageProvider };