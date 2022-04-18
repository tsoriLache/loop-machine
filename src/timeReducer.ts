export const initialState = { time: 0 };

const timeReducer = (
  state: any,
  action: { type: string; payload: { time: number } }
) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE':
      return payload.time;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
export default timeReducer;
