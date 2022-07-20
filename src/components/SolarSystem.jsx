import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const generatedPlanets = planets.map(({ image, name }) => (
      <PlanetCard
        key={ name }
        planetImage={ image }
        planetName={ name }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { generatedPlanets }
      </div>
    );
  }
}

export default SolarSystem;
