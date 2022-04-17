import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';

import './style/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(9);

  return (
    <div className="App">
      <ChannelsSection isPlaying={isPlaying} currentTime={currentTime} />
      <ControlSection
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
}

export default App;
