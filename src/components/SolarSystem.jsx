import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetImage="" planetName="Teste" />
      </div>
    );
  }
}

export default SolarSystem;
