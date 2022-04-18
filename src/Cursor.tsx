import React, { useState } from 'react';
import useTime from './timeContext';

export default function Cursor() {
  const { time, updateTime } = useTime() as any;
  const [ctime, setCtime] = useState(time);

  const onScrub = (time: any) => {
    setCtime(time);
  };

  const onScrubEnd = () => {
    console.log(time);
    updateTime(ctime);
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
