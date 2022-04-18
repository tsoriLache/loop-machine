import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';
import Header from './Header';

import './style/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  const stop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };
  return (
    <div className="App">
      <Header />
      <ChannelsSection
        isPlaying={isPlaying}
        isLooping={isLooping}
        setIsPlaying={setIsPlaying}
      />
      <ControlSection
        isPlaying={isPlaying}
        isLooping={isLooping}
        setIsPlaying={setIsPlaying}
        setCurrentTime={setCurrentTime}
        setIsLooping={setIsLooping}
        stop={stop}
      />
    </div>
  );
}

export default App;
