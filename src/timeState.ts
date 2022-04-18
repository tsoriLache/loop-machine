import { entity } from 'simpler-state';

export const currentTime = entity(0);

export const reset = () => {
  currentTime.set(0);
};

export const update = (newTime: any) => {
  currentTime.set(newTime);
  // --OR-->  counter.set(counter.get() + by)
};
