import React from 'react';
import './App.scss';

import APOD from './components/APOD';
import ParticlesBG from './components/Particles';

const App = () => {
  return (
    <div>
      <div className="background">
        <ParticlesBG/>
      </div>
      <APOD />
      
    </div>
  );
}

export default App;
