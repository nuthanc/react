// Action Creator
export const pressIncrement = () => {
    // Return an Action
    return {
        type: 'INCREMENT',
    };
};

export const pressDecrement = () => {
  // Return an Action
  return {
    type: "DECREMENT",
  };
};