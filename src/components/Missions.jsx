import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const missionsHTMLelements = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div data-testid="missions" className="missions">
        <div className="missions-title">
          <Title headline="Missões" />
        </div>
        <div className="missions-content">
          { missionsHTMLelements }
        </div>
      </div>
    );
  }
}

export default Missions;
