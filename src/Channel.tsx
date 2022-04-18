import React, { useEffect, useState } from 'react';
import './style/Channel.css';

export default function Channel({
  playback,
  playing,
  currentTime,
  isLooping,
}: {
  playback: string;
  playing: boolean;
  currentTime: number;
  isLooping: boolean;
}) {
  const [audio, setAudio] = useState(new Audio(playback));
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

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
          background: playing ? 'red' : 'blue',
          opacity: isMuted ? '0.3' : '0.8',
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
