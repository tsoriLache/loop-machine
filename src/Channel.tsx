import React, { useEffect, useState } from 'react';
import './style/Channel.css';

export default function Channel({
  playback,
  playing,
}: {
  playback: string;
  playing: boolean;
}) {
  const [audio, setAudio] = useState(new Audio(playback));
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.muted = muted;
  }, [playing, muted]);

  return (
    <div>
      <div style={{ color: playing ? 'red' : 'blue' }}>__________________</div>
      <button
        onClick={() => {
          setMuted((s) => !s);
        }}
      >
        {muted ? '🔈' : '🔊'}
      </button>
    </div>
  );
}
