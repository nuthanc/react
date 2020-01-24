// Action Creator
export const pressIncrement = count => {
    // Return an Action
    return {
        type: 'INCREMENT',
        payload: count
    };
};

export const pressDecrement = count => {
  // Return an Action
  return {
    type: "DECREMENT",
    payload: count
  };
};