import React from 'react';
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsStopCircleFill,
  BsArrowCounterclockwise,
} from 'react-icons/bs';

export default function ControlSection({
  isPlaying,
  setIsPlaying,
  setCurrentTime,
  setIsLooping,
  isLooping,
  stop,
}: {
  isPlaying: boolean;
  isLooping: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setIsLooping: React.Dispatch<React.SetStateAction<boolean>>;
  stop: VoidFunction;
}) {
  return (
    <div className="control-section">
      <button
        className="control-button"
        onClick={() => {
          setCurrentTime(0);
          setIsPlaying((s) => !s);
        }}
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
        onClick={() => {
          setCurrentTime(0);
          setIsLooping((s) => !s);
        }}
      >
        <BsArrowCounterclockwise size={50} />
      </button>
    </div>
  );
}
