import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';

import './style/App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <ChannelsSection isPlaying={isPlaying} />
      <ControlSection isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
