import React, { useState } from 'react';

export default function Cursor() {
  const [state, setState] = useState({ value: 0 });
  const handleChange = (e: any) => {
    setState({ value: e.target.value });
  };

  return (
    <div className="slide-container">
      <input
        className="slider"
        type="range"
        min="0"
        max="17"
        value={state.value}
        onChange={(e) => handleChange(e)}
        step="0.01"
      />
    </div>
  );
}
