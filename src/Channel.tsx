import React, { useEffect, useState } from 'react';
import { GoMute, GoUnmute } from 'react-icons/go';

interface Props {
  i: number;
  audio: HTMLAudioElement;
  isPlaying: boolean;
  currentTime: number;
  isLooping: boolean;
}

export default function Channel({
  i,
  audio,
  isPlaying,
  currentTime,
  isLooping,
}: Props) {
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
          background: `rgb(${0},${i * 10 + 170},${200 - i * 10},0.7)`,
          boxShadow: isPlaying ? '5px 5px #050505' : '0px 0px',
          opacity: isMuted ? '0.3' : '0.8',
        }}
      >
        <button
          className="mute-button"
          onClick={() => {
            setIsMuted((s) => !s);
          }}
        >
          {isMuted ? <GoMute size={20} /> : <GoUnmute size={20} />}
        </button>
      </div>
    </div>
  );
}
