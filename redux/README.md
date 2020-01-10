#### Redux
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F09%2Fdiagrams.xml
* Diagram 16: What is Redux
* Diagram 12: Difficulty curve
* Diagram 17: Progress
* Diagram 9: Redux cycle
* Diagram 00: Story
    * Policy: Contract for some incident
    * Claim: Request for pay when certain accidents happen
* Diagram 1-ins: Scenario
    * Diagram 2: When form is handed to Policies department   
        * Policies department maintains a list of customers
    * Diagram 3: Management polling Policies department for customers in the list
        * Now this is tedious
    * Diagram 1-ceo: Central repo as solution the above problem
        * When New Form comes to Policies Department, Form Receiver also gives the details of policies from the central repo
        * When the Policies Department is done, it updates the central repo
    * Diagram 03-forms: Form filled out by customer has 2 parts
        * Type: Claim
        * Payload: Data of the customer
    * Diagram 03-form types: 
        * Create Policy
        * Create Claim
        * Delete Policy
    * Diagram 03-claims: 
        * Consider Claims History department
        * It takes the form as well as list of Claims from the central repo
    * Diagram 05: Accounting department
        * Same process as Claims
    * Diagram 04: Policies department
* Diagram 10: **Redux cycle with Insurance company**
* Write code in https://codepen.io
    * codepen.js is a replica of code in the above website
    * Settings: 
        * Javascript: Search for redux and select it
    * Code for Redux cycle
        * Action Creator: Function that returns a JS object referred by name 'action'
            * Action is like Form having *Type* and *Payload*
            * One Action Creator for each Form Type
            * By convention, type is all in Uppercase with Underscore as separator
            * Using ES2015, we could have done
                * payload: {name,amount}
            * createPolicy, deletePolicy and createClaim are Action Creators
        * Skipping dispatch as it is part of Redux library
        * Reducers analogous to Departments
            * Parameters
                * Getting oldListOfClaims analogous to fetching from central repo
                * action from the Action Creator
            * claimHistory, accounting and policies are reducers
            * ... refers to take all the elements of the array and add them to a brand new array
            * We could have done oldListOfClaims.push, but this modifies the array
            * We always want to have a new array instead of modifying the existing
            * The very first time, oldListOfClaims will be undefined, so provide a default value of []
            * Diagram 05-acc for reference of Accounting department
            * Filter function produces a new array with values filtered