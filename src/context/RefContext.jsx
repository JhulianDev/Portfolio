import { createContext, useRef } from "react";

const RefContext = createContext();

const RefProvider = ({ children }) => {
  const homeRef = useRef(null);
  const proyectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  const data = { homeRef, proyectsRef, skillsRef, aboutMeRef, contactRef };

  return (
    <RefContext.Provider value={data}>
      {children}
    </RefContext.Provider>
  )
}

export { RefContext, RefProvider };