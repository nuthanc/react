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
