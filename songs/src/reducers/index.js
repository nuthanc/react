import { combineReducers } from 'redux';

const buttonSelected = (count=0, action) => {
    if(action.type === 'INCREMENT'){
        console.log('ACTION payload is',action.payload)
        console.log("Count is ",count);
        if(count === 0)
            return 1 + action.payload;
        return action.payload + count;
    }
    else if(action.type === 'DECREMENT'){
        if (count === 0)
            return 1 - action.payload;
        return count + action.payload;
    }
    return 0;
};

export default combineReducers({
    count: buttonSelected
});