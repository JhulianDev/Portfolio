import React from 'react';
import Home from './pages/home/Home';
import Proyects from './pages/proyects/Proyects';
import Skills from './pages/skills/Skills';
import AboutMe from './pages/about/AboutMe';
import Contact from './pages/contact/Contact';
import Header from './general/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Proyects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;