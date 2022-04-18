import React from 'react';
import { useRecoilState } from 'recoil';
import { timeState } from './timeState';

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
  const [time, setTime] = useRecoilState(timeState);

  const stop = () => {
    setIsPlaying(false);
    setTime(0);
  };
  return (
    <div>
      <button
        onClick={() => {
          setTime(0);
          setIsPlaying((s) => !s);
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button onClick={() => stop()}>⏹</button>
      <button
        style={{ opacity: isLooping ? '1' : '0.1' }}
        onClick={() => {
          setTime(0);
          setIsLooping((s) => !s);
        }}
      >
        🔁
      </button>
    </div>
  );
}
