import React, { useState } from 'react';
import ChannelsSection from './ChannelsSection';
import ControlSection from './ControlSection';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './style/App.css';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  return (
    <RecoilRoot>
      <div className="App">
        <ChannelsSection isPlaying={isPlaying} isLooping={isLooping} />
        <ControlSection
          isPlaying={isPlaying}
          isLooping={isLooping}
          setIsPlaying={setIsPlaying}
          setIsLooping={setIsLooping}
        />
      </div>
    </RecoilRoot>
  );
}
