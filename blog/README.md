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
