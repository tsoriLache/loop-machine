import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';
import Header from './Header';

import './style/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  return (
    <div className="App">
      <Header />
      <ChannelsSection
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isLooping={isLooping}
      />
      <ControlSection
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isLooping={isLooping}
        setIsLooping={setIsLooping}
      />
    </div>
  );
}

export default App;
