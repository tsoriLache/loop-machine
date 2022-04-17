import React from 'react';

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

export default function ChannelsSection({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div>
      <Channel playback={DRUMS} playing={isPlaying} />
      <Channel playback={LEAD} playing={isPlaying} />
      <Channel playback={UUHO} playing={isPlaying} />
      <Channel playback={HEHE} playing={isPlaying} />
      <Channel playback={HIGH} playing={isPlaying} />
      <Channel playback={JIBRISH} playing={isPlaying} />
      <Channel playback={SHAKE} playing={isPlaying} />
      <Channel playback={ALL} playing={isPlaying} />
      <Channel playback={B} playing={isPlaying} />
    </div>
  );
}
