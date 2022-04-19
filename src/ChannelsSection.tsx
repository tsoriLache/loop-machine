import React, { useEffect, useState } from 'react';
import './style/Channel.css';

import Cursor from './Cursor';
import Channel from './Channel';

import DRUMS from './Loop files/DRUMS.mp3';
import LEAD from './Loop files/LEAD 1.mp3';
import UUHO from './Loop files/UUHO VOC.mp3';
import HEHE from './Loop files/HE HE VOC.mp3';
import HIGH from './Loop files/HIGH VOC.mp3';
import JIBRISH from './Loop files/JIBRISH.mp3';
import SHAKE from './Loop files/_tambourine_shake_higher.mp3';
import ALL from './Loop files/ALL TRACK.mp3';
import B from './Loop files/B VOC.mp3';

const audioLoops = [DRUMS, LEAD, UUHO, HEHE, HIGH, JIBRISH, SHAKE, ALL, B];

const audioElements: HTMLAudioElement[] = audioLoops.map(
  (loop) => new Audio(loop)
);

interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isLooping: boolean;
}

export default function ChannelsSection({
  isPlaying,
  setIsPlaying,
  isLooping,
}: Props) {
  const [cursorTime, setCursorTime] = useState(0);
  const [channelTime, setChannelTime] = useState(0);
  const [playingInterval, setPlayingInterval] = useState(
    setInterval(() => {}, 100000000000000)
  );

  const handleClearInterval = () => {
    setIsPlaying(false);
    clearInterval(playingInterval);
  };

  const onScrub = (time: any) => {
    handleClearInterval();
    setCursorTime(time);
  };

  const onScrubEnd = (time: number) => {
    setChannelTime(time);
    if (isPlaying) {
      const interval = setInterval(
        () => setCursorTime(audioElements[0].currentTime),
        100
      );
      setPlayingInterval(interval);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audioElements.map((element) =>
      isPlaying ? element.play() : element.pause()
    );
    if (isPlaying) {
      const interval = setInterval(() => {
        setCursorTime(audioElements[0].currentTime);
        if (audioElements[0].currentTime.toFixed(1) === '16.9') {
          audioElements.map((e) => (e.currentTime = 0));
          setChannelTime(0);
          setCursorTime(0);
        }
      }, 100);
      setPlayingInterval(interval);
    } else {
      console.log('not playing');
    }
  }, [isPlaying]);

  return (
    <div className="channel-section">
      <Cursor
        time={cursorTime}
        onScrub={onScrub}
        onScrubEnd={onScrubEnd}
        handleClick={handleClearInterval}
      />
      {audioElements.map((element, i) => (
        <Channel
          key={element.src}
          i={i}
          audio={element}
          isPlaying={isPlaying}
          currentTime={channelTime}
          isLooping={isLooping}
        />
      ))}
    </div>
  );
}
