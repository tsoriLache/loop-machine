import { atom } from 'recoil';

export const timeState = atom({
  key: 'timeState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
