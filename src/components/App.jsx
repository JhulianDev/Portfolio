import React from 'react';
import Home from './pages/home/Home';
import Proyects from './pages/proyects/Proyects';
import Skills from './pages/skills/Skills';
import AboutMe from './pages/about/AboutMe';
import Contact from './pages/contact/Contact';
import SpaceParticles from './general/particles/SpaceParticles';

const App = () => {
  return (
    <>
      <SpaceParticles />
      <Home />
      <Proyects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;