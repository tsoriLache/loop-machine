import React from 'react';
import useTime from './timeContext';

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
  const { time, updateTime } = useTime() as any;

  const stop = () => {
    setIsPlaying(false);
    updateTime(0);
  };
  return (
    <div>
      <button
        onClick={() => {
          updateTime(0);
          setIsPlaying((s) => !s);
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button onClick={() => stop()}>⏹</button>
      <button
        style={{ opacity: isLooping ? '1' : '0.1' }}
        onClick={() => {
          updateTime(0);
          setIsLooping((s) => !s);
        }}
      >
        🔁
      </button>
    </div>
  );
}
