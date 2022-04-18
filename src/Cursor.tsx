import React, { useState } from 'react';

export default function Cursor({
  time,
  onScrub,
  onScrubEnd,
  handleClick,
}: {
  time: number;
  onScrub: (a: number) => void;
  onScrubEnd: (a: any) => void;
  handleClick: VoidFunction;
}) {
  return (
    <div className="slide-container">
      <label>{time.toFixed(2)}</label>
      <div className="ruler"></div>
      <input
        className="slider "
        type="range"
        min="0"
        max="17"
        value={time}
        onClick={() => handleClick}
        onChange={({ target }) => onScrub(Number(target.value))}
        onTouchEnd={() => onScrubEnd(time)}
        onMouseUp={() => onScrubEnd(time)}
        onKeyUp={() => onScrubEnd(time)}
        step="0.01"
      />
    </div>
  );
}
