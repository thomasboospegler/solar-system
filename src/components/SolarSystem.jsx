import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const planetsHTMLelements = planets.map(({ image, name }) => (
      <PlanetCard
        key={ name }
        planetImage={ image }
        planetName={ name }
      />
    ));
    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="solar-system-title">
          <Title headline="Planetas" />
        </div>
        <div className="solar-system-planets">
          { planetsHTMLelements }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
