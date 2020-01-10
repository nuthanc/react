console.clear()

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
    // return Action(form)
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    };
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
};

// Reducers (Departments)

const claimHistory = (oldListOfClaims = [], action) => {
    if(action.type === 'CREATE_CLAIM'){
        // We care about this action (FORM)
        /*
            Example of ES2015 ...
            const numbers = [1,2,3]
            [...numbers, 4] would give [1,2,3,4]
        */
        return [...oldListOfClaims, action.payload];
    }
    //We don't care about this action
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM'){
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }
    else if(action.type === 'CREATE_POLICY'){
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICY'){
        return [...listOfPolicies, action.payload.name];
    }
    else if(action.type === 'DELETE_POLICY'){
        /*
            Filter function example
            const numbers = [1,2,3]
            numbers.filter(numb => numb !==2) returns [1,3]
        */
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
}