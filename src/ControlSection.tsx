import React from 'react';
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsStopCircleFill,
  BsArrowCounterclockwise,
} from 'react-icons/bs';

interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isLooping: boolean;
  setIsLooping: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlSection({
  isPlaying,
  setIsPlaying,
  isLooping,
  setIsLooping,
}: Props) {
  const stop = () => {
    console.log('stop');
    setIsPlaying(false);
  };

  return (
    <div className="control-section">
      <button
        className="control-button"
        onClick={() => setIsPlaying((s) => !s)}
      >
        {isPlaying ? (
          <BsPauseCircleFill size={50} />
        ) : (
          <BsFillPlayCircleFill size={50} />
        )}
      </button>
      <button className="control-button" onClick={() => stop()}>
        <BsStopCircleFill size={50} />
      </button>
      <button
        className="control-button"
        style={{ opacity: isLooping ? '1' : '0.1' }}
        onClick={() => setIsLooping((s) => !s)}
      >
        <BsArrowCounterclockwise size={50} />
      </button>
    </div>
  );
}
