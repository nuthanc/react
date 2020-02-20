# Blog

### App Overview
* Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F11%2Fdiagrams.xml
* Goals: Diagram 2
* Diagram 3: App Overview
* Components: Diagram 02-comp
* Api: From Axios to JSONPlaceholder API
* Doc link: Diagram 05
    * Resources section: We only care about posts and users endpoints
* Installing dependencies
    * npm install redux react-redux axios redux-thunk
* Dependencies: Diagram 7-deps
* Middleware are functions that are going to change the behavior of Redux store

### App Setup
* Create components, reducers and actions dir along with src index.js
* Dummy reducer within index.js of reducers as we still don't know what reducers we will be having
    * So we export default combineReducers with dummy key and arrow function
* Create PostList component

### PostList component
* Create class based PostList component and import in the App
* Hook up semantic ui in public index.html

### Fetching data in Redux
* Diagram 09-loading: **Data Loading Flow**
    * Interesting Notes: Diagram 10-notice

### Action creator integrated to PostList
* fetchPosts in index.js of actions
* Wire the above in PostList component
* 1st argument in connect is given null because we still don't have any state to give it to the component, else it is always mapStateToProps
* In componentDidMount method

### Making request from Action Creator
* Create apis folder within src and have jsonPlaceholder file
* In that, import axios
* To get endpoint, open up posts endpoint from doc and copy that and take out posts
* Then in index.js of actions import the above file
* We will use async await syntax to fetch the response
* Then assign response to payload
* When npm start is issued, we get the following error
    * Error: Actions must be plain objects. Use custom middleware for async actions

### Reason with the error: Diagram 13-reasons
* Code gets converted to ES2015 syntax, so action creator is not returning the action object
* Can check this by copy-pasting the fetchPosts function in babeljs.io(Enable every Preset in Try it Out page)
* Action Creator is not working as expected because of async-await syntax
* **Flow explained**: Diagram 14-flow
    * Using Promise object by removing async-await can be thought of an approach, but this still doesn't work due to the 2nd reason mentioned in the Diagram
* Flow for Promise: Diagram 11-flow
* Time: Diagram 12-time
* Behind the scenes floe: Diagram 13-flow

### Middleware for handling Asynchronous requests
* Diagram 16-async: 
* Flow for Middleware: Diagram 17-cycle
* What is **Middleware in Redux**: Diagram 18-mw
* **Rules with Redux Thunk**: Diagram 19-thu
* **Redux Thunk behind the scenes**: Diagram 20-thu
* Source code of Redux Thunk: Diagram 21-thu

### Wiring Up Redux-thunk
* Import redux-thunk and applyMiddleware in main index.js
* applyMiddleware is used to connect the middleware to the Redux store
* Pass applyMiddleware with thunk as middleware argument to createStore

### Middleware related changes in actions
* Using dispatch directly within the inner function with the action creator
* We can still use async-await syntax as we don't care what the inner function in ES2015 of async-await returns
* We just need to care about the the outer return function which has arguments of dispatch and getState
* We can refactor this further:
    * function can be made into arrow function
    * getState is not used, so it can be removed from the argument next to dispatch
    * When arrow function with argument is used, parenthesis is optional 
    * In the outer function since only return is only expression, the braces and return can be removed 

### Back with original flow: Diagram 9
* But in the diagram, we use middleware to make the api request
* Now we have to define the reducer
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F12%2Fdiagrams.xml
* Diagram 01-data

### Defining Reducers
* Separate file for each Reducer, then import them in index.js and wire them up to the combineReducers
* Diagram 01-reducers
* Create postsReducers within reducers directory and import and wire up in index.js 
* **Rules of Reducers**: Diagram 03-rules
    * Diagram 04-red: When Redux application is first started, each Reducer gets called 1 time automatically
        * 2 arguments received
        * That 1st argument is equivalent to creating an if statement and initializing it
        ```javascript
            const selectedSongReducer = (selectedSong = null, action ) =>

                equivalent to 

            if (selectedSong === undefined){
                selectedSong = null;
            }
        ```
    * 2nd Rule: Diagram 5-next: 2nd time the Reducer gets called
    * 3rd Rule: Diagram 5-pure:
        * No getting DOM elements
        * No making API requests
    * 4th Rule: Misleading because of one corner case
        * We are never taking state and assigning it
        * In js, strings and numbers are immutable values
        * In js, === for objects and arrays is a reference check and not value check
        * Diagram 4-mutation
        * **Behind the scenes of why we must not mutate the state Video 168**
            * Source code of Redux library: github.com/reduxjs/redux/
            * combineReducers Line 192: hasChanged
            * This block of code gets executed when an action is dispatched
            * If the referenced object's value and not the reference object itself changes, redux will think that there is no change
* Mutations: Diagram 13-mutations
    * **Good ways of mutating state object**

#### PostsReducer
* Argument of state and action and since we are dealing with a list of posts, we'll default state to an empty array
* Return state when there is no action of type FETCH_POSTS
* In order to make sure, we handle every action that comes in our Reducer, we use *switch* syntax
* We are now done with all except the last one in Diagram 1-data

### React App rerendered
* To get Redux data into React side, we define mapStateToProps function and then pass it to connect
* **Every single time our reducer is run, mapStateToProps will be called again**
* The return object from mapStateToProps will appear as props to our component

#### Why 2 console.logs are there in Console when there is only one in PostList(Entire flow in React-Redux)
* This is because when our application is **first loaded up inside the browser, all of our Reducers run one initial time**
* Our React side of the application is going to be rendered one time on the screen
* So the PostList component will be displayed one time on the screen, and empty array is console logged
* After the PostList component shows up on the screen, componentDidMount will be called and we will fetch some data from the api
* After some action is dispatched to the reducer, our Reducer sees it's of type 'FETCH_POSTS' and will return the payload
* Since payload is a totally new value, Redux tells React to re-render its application
* mapStateToProps will be called and the component will be re-rendered with the new state

### renderList method in PostList for List Building
* Within the posts map function, we are gonna add classes of semantic-ui
* Call renderList from render method

### Display Users
* Diagram 2-components: Looks of UI: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F11%2Fdiagrams.xml
* In the api link: jsonplaceholder.typicode.com/posts
    * We see the userId which is the user associated with the Post
* We need to make another API request to get the User associated with the Post
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F12%2Fdiagrams.xml
* Diagram 17-posts: User to Post relationship
##### Easy way to do this:
* Diagram 18-easy:
* But this is not done in a real application
* Under the resources section of our API doc, go to Routes section where you can see we can get details of individual records
##### The right way to do:
* Diagram 19-method:
* We will place the UserHeader component with userId within renderList method

### Fetching Singular Records
* Diagram 16-update: Idea
* In action's index.js file, create new action creator
* ES2015 syntax of backticks instead of doing '/users/' + id

### Displaying the User Header
* Create UserHeader component within components folder and wire it to PostList component
* Import connect and action creator within UserHeader component
* Use componentDidMount method to fetch the User
* this.props.userId is obtained as props passed down from PostList component

### Finding Relevant Users
* Diagram 16-update: Create reducer for action FETCH_USER type
* usersReducers is created and since it has to maintain an array of Users, its default state will be an empty array
* Wire it up in Reducer's index.js file by importing it and adding it as key in combineReducers
* Then in UserHeader.js file, define mapStateToProps function
* Then in render method, find is a builtin method in js arrays
* Initially user will empty, so add that check
* Then return user.name if it is not empty
* Also add className of header
* Also pass mapStateToProps in connect function

### Extracting Logic to MapStateToProps
* UserHeader is getting data of all the Users
* UserHeader is not suitable to get the data of all the Users, and its purpose is to show one User on the screen
* mapStateToProps is used to do precalculations
* Rather than finding the appropriate User within the Component, we do it in mapStateToProps function
* mapStateToProps also receives a second argument called ownProps which is a copy which gets sent to the Component

### Issue: Duplicate requests
* Chrome Inspect and go to Network XHR requests
* Repeated API calls to same endpoint

### Memoizing Functions
* Go to Lodash docs and look for memoize function
* Open Chrome Console on lodash.com
* Shift Enter to go to new line without running the code
* fetch function for making network request
``` javascript
function getUser(id) {
fetch(id);
return 'Made a Request!'
}
// Make request by calling getUser(2)

const memoizedGetUser = _.memoize(getUser)
memoizedGetUser(3)

```
* memoize can be called one time with unique argument and if same argument is called, it returns whatever value was returned previously

### Memoization Issues
* In actions' index.js, import lodash
* Just to understand clearly, turning back arrow syntax to function syntax
* Now which of the 2 functions to memoize in fetchUser
* First we will try be memoizing the outer function
    * This doesn't solve the repeated API requests
    * Every single time, this function is called the memoize is gonna return whatever is called the 1st time, which in this case is a function. So memoize is behaving normally
* Now let's try memoizing the inner function
    * Even now, we are making repeated requests
    * Every time fetchUser is called, new function will be created and then memoized

### One Time Memoization
* Define a function outside our Action Creator, which is going to make a request and then dispatch an action
* Memoize outside of the Action Creator
* Define _fetchUser, _ for meaning Private function
* Pass id and dispatch as arguments to _fetchUser and move async to _fetchUser
* After running npm start, we no longer see the duplicate requests

### Alternate Overfetching Solution
* * Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F12%2Fdiagrams.xml
* Diagram 18-alt: 
* With this, we still need to have fetchPosts and fetchUser action creators
* We need to have action creators that do little things rather than one big thing
* New action creator fetchPostsAndUsers

#### Action Creators in Action Creators
* fetchPostsAndUsers is the only Action creator we are going to call
* We need make sure to dispatch fetchPosts and fetchUser action creators manually
* Since redux-thunks gets activated whenever we **dispatch** a function(mainly) or action creator
* await before dispatch because we don't want to handle any other logic in fetchPostsAndUsers until that asynchronous API call is done
* Wire the new Action Creator in PostList component and replace fetchPosts with fetchPostsAndUsers

### Finding Unique User Ids
* Diagram 18-alt
* Get list of posts
* This is very easy as 2nd argument redux-thunk calls with is getState 
* We can access posts by getState().posts
* _.map can get only the required parameter by passing it as the 2nd argument
* _.uniq for only the unique userId
* Last thing we need to do is to call fetchUser for each unique userId
* There's no need to put await for fetchUsers because we are not doing any logic after this
* Even if we want to do, it's not possible within forEach
* Alternate way would be to use maps and Promises
```javascript
Promise.all(usersIds.map(id => dispatch(fetchUser(id)))).then
# or
await Promise.all(usersIds.map(id => dispatch(fetchUser(id))))
```
* So after doing this, we can remove componentDidMount and fetchUser action creator in UserHeader.js

### Quick Refactor With Chain in index.js of actions
* Remove userIds with all the logic with chain statement of lodash

### App Wrapup
* Inside of root index.js file, we imported redux-thunk and applied as middleware as 2nd argument in createStore, which is then assigned to store
* By applying that middleware
    * Any time we dispatch an action, the action will be sent to redux-thunk as middleware
    * And then after processing by redux-thunk, it will be sent to all the Reducers
* Then store is passed to Provider as prop
* Action creators within Action creators
* Reducers having state as first argument
* Switch syntax in Reducers and ... syntax to append and create a new state