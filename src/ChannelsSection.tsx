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
  currentTime,
  setCurrentTime,
  isLooping,
}: {
  isPlaying: boolean;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isLooping: boolean;
}) {
  const [time, setTime] = useState(0);
  const [channelTime, setChannelTime] = useState(0);

  const onScrub = (time: any) => {
    setTime(time);
  };

  const onScrubEnd = (value: number) => {
    setCurrentTime(value);
  };

  useEffect(() => {
    audioElements.map((element) =>
      isPlaying ? element.play() : element.pause()
    );
    isPlaying
      ? setInterval(() => setTime(audioElements[0].currentTime), 100)
      : console.log('not playing');
  }, [isPlaying]);

  useEffect(() => {
    setChannelTime(currentTime);
  }, [currentTime]);

  return (
    <div className="channel-section">
      <Cursor
        time={time}
        onScrub={onScrub}
        onScrubEnd={({ target }) => onScrubEnd(Number(target.value))}
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
