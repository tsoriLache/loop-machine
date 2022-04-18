import React, { useEffect, useState } from 'react';
import Cursor from './Cursor';

import DRUMS from './Loop files/DRUMS.mp3';
import LEAD from './Loop files/LEAD 1.mp3';
import UUHO from './Loop files/UUHO VOC.mp3';
import HEHE from './Loop files/HE HE VOC.mp3';
import HIGH from './Loop files/HIGH VOC.mp3';
import JIBRISH from './Loop files/JIBRISH.mp3';
import SHAKE from './Loop files/_tambourine_shake_higher.mp3';
import ALL from './Loop files/ALL TRACK.mp3';
import B from './Loop files/B VOC.mp3';

import Channel from './Channel';

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
    setChannelTime(currentTime);
  }, [currentTime]);

  return (
    <div className="channel-section">
      <Cursor
        time={time}
        onScrub={onScrub}
        onScrubEnd={({ target }) => onScrubEnd(Number(target.value))}
      />
      <Channel
        playback={DRUMS}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={LEAD}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={UUHO}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={HEHE}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={HIGH}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={JIBRISH}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={SHAKE}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={ALL}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
      <Channel
        playback={B}
        playing={isPlaying}
        currentTime={channelTime}
        isLooping={isLooping}
      />
    </div>
  );
}
