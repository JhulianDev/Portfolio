import React, { useRef } from 'react';
import Home from './pages/home/Home';
import Proyects from './pages/proyects/Proyects';
import Skills from './pages/skills/Skills';
import AboutMe from './pages/about/AboutMe';
import Contact from './pages/contact/Contact';
import Header from './general/header/Header';

const App = () => {
  const homeRef = useRef(null);
  const proyectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header 
        homeRef={homeRef}
        proyectsRef={proyectsRef}
        skillsRef={skillsRef}
        aboutMeRef={aboutMeRef}
        contactRef={contactRef}
      />
      <Home sectionRef={homeRef} />
      <Proyects sectionRef={proyectsRef} />
      <Skills sectionRef={skillsRef} />
      <AboutMe sectionRef={aboutMeRef} />
      <Contact sectionRef={contactRef} />
    </>
  );
};

export default App;