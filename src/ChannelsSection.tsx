import React, { useEffect } from 'react';

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

import useTime from './timeContext';

const audioLoops = [DRUMS, LEAD, UUHO, HEHE, HIGH, JIBRISH, SHAKE, ALL, B];

let audioElements: HTMLAudioElement[] = audioLoops.map(
  (loop) => new Audio(loop)
);
export default function ChannelsSection({
  isPlaying,
  isLooping,
}: {
  isPlaying: boolean;
  isLooping: boolean;
}) {
  const { time, updateTime } = useTime() as any;

  useEffect(() => {
    audioElements.map((element) =>
      isPlaying ? element.play() : element.pause()
    );
    isPlaying
      ? setInterval(() => {
          updateTime(audioElements[0].currentTime);
          console.log(time);
        }, 100)
      : console.log('not playing');
  }, [isPlaying]);

  return (
    <div className="channel-section">
      <Cursor />
      {audioElements.map((element, i) => (
        <Channel
          key={element.src}
          i={i}
          audio={element}
          playing={isPlaying}
          isLooping={isLooping}
        />
      ))}
    </div>
  );
}
