import { combineReducers } from 'redux';

const buttonSelected = (count=0, action) => {
    if(action.type === 'Increment'){
        return count + action.payload;
    }
    else if(action.type === 'Decrement'){
        return count - action.payload;
    }
    return 0;
};

export default combineReducers({
    count: buttonSelected
});