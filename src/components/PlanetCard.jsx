import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

export default PlanetCard;
