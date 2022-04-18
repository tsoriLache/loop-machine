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

let audioElements: HTMLAudioElement[] = audioLoops.map(
  (loop) => new Audio(loop)
);
export default function ChannelsSection({
  isPlaying,
  isLooping,
  setIsPlaying,
}: {
  isPlaying: boolean;
  isLooping: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [time, setTime] = useState(0);
  const [channelTime, setChannelTime] = useState(0);
  const [playingInterval, setPlayingInterval] = useState({
    interval: setInterval(() => console.log('initial'), 100000000000000),
  });
  const handleClearInterval = () => {
    setIsPlaying(false);
    clearInterval(playingInterval.interval);
  };

  const onScrub = (time: any) => {
    handleClearInterval();
    setTime(time);
  };

  const onScrubEnd = (time: number) => {
    setChannelTime(time);
    if (isPlaying) {
      const interval = setInterval(
        () => setTime(audioElements[0].currentTime),
        100
      );
      setPlayingInterval({ interval });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audioElements.map((element) =>
      isPlaying ? element.play() : element.pause()
    );
    if (isPlaying) {
      const interval = setInterval(
        () => setTime(audioElements[0].currentTime),
        100
      );
      setPlayingInterval({ interval });
    } else {
      console.log('not playing');
    }
  }, [isPlaying]);

  return (
    <div className="channel-section">
      <Cursor
        time={time}
        onScrub={onScrub}
        onScrubEnd={onScrubEnd}
        handleClick={handleClearInterval}
      />
      {audioElements.map((element, i) => (
        <Channel
          key={element.src}
          i={i}
          audio={element}
          playing={isPlaying}
          currentTime={channelTime}
          isLooping={isLooping}
        />
      ))}
    </div>
  );
}
