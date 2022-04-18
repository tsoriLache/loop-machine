import { createContext, useReducer, useContext } from 'react';

import timeReducer, { initialState } from './timeReducer';

const TimeContext = createContext(initialState);

export const TimeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(timeReducer, initialState);
  const updateTime = (newTime: number) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        time: newTime,
      },
    });
  };
  const value = {
    time: state.time,
    updateTime,
  };
  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

const useTime = () => {
  const context = useContext(TimeContext);

  if (context === undefined) {
    throw new Error('useTime must be used within TimeContext');
  }

  return context;
};

export default useTime;
