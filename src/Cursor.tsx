import React, { useState } from 'react';
import { currentTime, update } from './timeState';

export default function Cursor() {
  const time = currentTime.use();

  const onScrub = (time: any) => {
    update(time);
  };

  const onScrubEnd = (value: number) => {
    update(value);
  };
  return (
    <div className="slide-container">
      <label>{time.toFixed(2)}</label>
      <input
        className="slider"
        type="range"
        min="0"
        max="17"
        value={time}
        onChange={({ target }) => onScrub(Number(target.value))}
        onTouchEnd={() => onScrubEnd}
        onMouseUp={() => onScrubEnd}
        onKeyUp={() => onScrubEnd}
        step="0.01"
      />
    </div>
  );
}
