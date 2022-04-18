import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';

import './style/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(9);
  const [isLooping, setIsLooping] = useState(false);

  return (
    <div className="App">
      <ChannelsSection
        isPlaying={isPlaying}
        isLooping={isLooping}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <ControlSection
        isPlaying={isPlaying}
        isLooping={isLooping}
        setIsPlaying={setIsPlaying}
        setCurrentTime={setCurrentTime}
        setIsLooping={setIsLooping}
      />
    </div>
  );
}

export default App;
