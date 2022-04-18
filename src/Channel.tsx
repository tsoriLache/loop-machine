import React, { useEffect, useState } from 'react';

export default function Channel({
  i,
  audio,
  playing,
  currentTime,
  isLooping,
}: {
  i: number;
  audio: HTMLAudioElement;
  playing: boolean;
  currentTime: number;
  isLooping: boolean;
}) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audio.muted = isMuted;
  }, [audio, isMuted]);

  useEffect(() => {
    audio.loop = isLooping;
  }, [audio, isLooping]);

  useEffect(() => {
    audio.currentTime = currentTime;
  }, [audio, currentTime]);

  return (
    <div className="channel-container">
      <div
        className="channel"
        style={{
          background: `rgb(${i * 30},${70},${100},0.7)`,
          boxShadow: playing ? '3px 3px' : '0px 0px',
          opacity: isMuted ? '0.3' : '0.8',
        }}
      >
        {' '}
        <button
          className="mute-button"
          onClick={() => {
            setIsMuted((s) => !s);
          }}
        >
          {isMuted ? '🔈' : '🔊'}
        </button>
      </div>
    </div>
  );
}
