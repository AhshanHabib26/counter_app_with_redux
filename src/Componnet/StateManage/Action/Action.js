export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const getIncrement = () => {
  return {
    type: INCREMENT,
  };
};
export const getDecrement = () => {
  return {
    type: DECREMENT,
  };
};
export const getReset = () => {
  return {
    type: RESET,
  };
};
