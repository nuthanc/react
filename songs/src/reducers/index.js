import { combineReducers } from 'redux';

const buttonSelected = (action, count=0) => {
    if(action.type === 'Increment'){
        return count + action.payload;
    }
    else if(action.type === 'Decrement'){
        return count - action.payload;
    }
};

export default combineReducers({
    count: buttonSelected
});