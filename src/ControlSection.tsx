import React from 'react';

export default function ControlSection({
  isPlaying,
  setIsPlaying,
}: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <button
        onClick={() => {
          setIsPlaying((s) => !s);
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      {/* <button onClick={() => stop()}>⏹</button> */}
    </div>
  );
}
