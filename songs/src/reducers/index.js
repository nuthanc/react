import { combineReducers } from 'redux';

const buttonSelected = (count=0, action) => {
    if (action.type === "INCREMENT") {
      console.log("ACTION payload is", action.payload);
      return count + 1;
    } else if (action.type === "DECREMENT") {
      return count - 1;
    }
    return count;
};

export default combineReducers({
    count: buttonSelected
});