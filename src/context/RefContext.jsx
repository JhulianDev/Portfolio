import { createContext, useContext, useRef } from "react";
import { LanguageContext } from "./LanguageContext";

const RefContext = createContext();

const RefProvider = ({ children }) => {
  const homeRef = useRef(null);
  const proyectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  const { texts } = useContext(LanguageContext)
  const t = texts.header
  const refSections = [
    { id: "Home", name: t.home, ref: homeRef },
    { id: "Proyects", name: t.proyects, ref: proyectsRef },
    { id: "Skills", name: t.skills, ref: skillsRef },
    { id: "About Me", name: t.aboutMe, ref: aboutMeRef },
    { id: "Contact", name: t.contact, ref: contactRef },
  ];

  const data = { homeRef, proyectsRef, skillsRef, aboutMeRef, contactRef, refSections };

  return (
    <RefContext.Provider value={data}>
      {children}
    </RefContext.Provider>
  )
}

export { RefContext, RefProvider };