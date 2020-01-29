// Action Creator
export const pressIncrement = count => {
    // Return an Action
    return {
        type: 'INCREMENT',
    };
};

export const pressDecrement = count => {
  // Return an Action
  return {
    type: "DECREMENT",
  };
};