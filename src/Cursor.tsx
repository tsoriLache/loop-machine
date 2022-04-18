import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { timeState } from './timeState';

export default function Cursor() {
  const [time, setTime] = useRecoilState(timeState);

  const onScrub = (time: any) => {
    setTime(time);
  };

  const onScrubEnd = (value: number) => {
    setTime(value);
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
