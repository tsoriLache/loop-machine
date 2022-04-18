import React from 'react';
import { currentTime, update, reset } from './timeState';

export default function ControlSection({
  isPlaying,
  setIsPlaying,
  setIsLooping,
  isLooping,
}: {
  isPlaying: boolean;
  isLooping: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLooping: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const stop = () => {
    setIsPlaying(false);
    reset();
  };
  return (
    <div>
      <button
        onClick={() => {
          reset();
          setIsPlaying((s) => !s);
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button onClick={() => stop()}>⏹</button>
      <button
        style={{ opacity: isLooping ? '1' : '0.1' }}
        onClick={() => {
          reset();
          setIsLooping((s) => !s);
        }}
      >
        🔁
      </button>
    </div>
  );
}
