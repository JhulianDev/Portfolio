import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from "../../../assets/particles/particlesjs-config.json"

const SpaceParticles = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      init={particlesInit}
    />
  );
};

export default SpaceParticles;