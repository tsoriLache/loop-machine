import React from 'react';

export default function ControlSection({
  isPlaying,
  setIsPlaying,
  setCurrentTime,
}: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
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
      {/* <button onClick={() => stop()}>loop</button> */}
    </div>
  );
}
