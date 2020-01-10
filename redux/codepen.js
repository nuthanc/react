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
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
}