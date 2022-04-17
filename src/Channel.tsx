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
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.muted = isMuted;
  }, [playing, isMuted, audio]);

  return (
    <div className="channel-container">
      <div
        className="channel"
        style={{
          background: playing ? 'red' : 'blue',
          opacity: isMuted ? '0.1' : '1',
        }}
      ></div>
      <button
        onClick={() => {
          setIsMuted((s) => !s);
        }}
      >
        {isMuted ? '🔈' : '🔊'}
      </button>
    </div>
  );
}
