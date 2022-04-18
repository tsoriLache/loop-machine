import React, { useState } from 'react';

export default function Cursor({
  time,
  onScrub,
  onScrubEnd,
}: {
  time: number;
  onScrub: (a: number) => void;
  onScrubEnd: (a: any) => void;
}) {
  return (
    <div className="slide-container">
      <label>{time}</label>
      <input
        className="slider"
        type="range"
        min="0"
        max="17"
        value={time}
        onChange={({ target }) => onScrub(Number(target.value))}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        step="0.01"
      />
    </div>
  );
}
