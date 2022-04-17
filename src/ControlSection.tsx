import React from 'react';

export default function ControlSection({
  isPlaying,
  setIsPlaying,
  setCurrentTime,
  setIsLooping,
  isLooping,
}: {
  isPlaying: boolean;
  isLooping: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setIsLooping: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const stop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };
  return (
    <div>
      <button
        onClick={() => {
          setCurrentTime(1);
          setIsPlaying((s) => !s);
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button onClick={() => stop()}>⏹</button>
      <button
        style={{ opacity: isLooping ? '1' : '0.1' }}
        onClick={() => {
          setCurrentTime(1);
          setIsLooping((s) => !s);
        }}
      >
        🔁
      </button>
    </div>
  );
}
