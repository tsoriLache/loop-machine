import React, { useState } from 'react';
import DRUMS from './Loop files/DRUMS.mp3';
import LEAD from './Loop files/LEAD 1.mp3';
import UUHO from './Loop files/UUHO VOC.mp3';
import HEHE from './Loop files/HE HE VOC.mp3';
import HIGH from './Loop files/HIGH VOC.mp3';
import JIBRISH from './Loop files/JIBRISH.mp3';
import SHAKE from './Loop files/_tambourine_shake_higher.mp3';
import ALL from './Loop files/ALL TRACK.mp3';
import B from './Loop files/B VOC.mp3';

import './style/App.css';
import Channel from './Channel';

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="App">
      <Channel playback={DRUMS} playing={playing} />
      <Channel playback={LEAD} playing={playing} />
      <Channel playback={UUHO} playing={playing} />
      <Channel playback={HEHE} playing={playing} />
      <Channel playback={HIGH} playing={playing} />
      <Channel playback={JIBRISH} playing={playing} />
      <Channel playback={SHAKE} playing={playing} />
      <Channel playback={ALL} playing={playing} />
      <Channel playback={B} playing={playing} />
      <button
        onClick={() => {
          setPlaying((s) => !s);
        }}
      >
        {playing ? '⏸' : '▶'}
      </button>
    </div>
  );
}

export default App;
