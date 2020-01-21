# Songs: List and Detail

#### Simple Application with React and Redux
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F10%2Fdiagrams.xml
* Diagram 1: App mockup
* Diagram 2: Components 
* Diagram 3: Libs
    * npm install redux react-redux

#### App Setup
* Create index.js, App.js
* Hookup semantic-ui in public index
* Observe that App.js is a functional component
    * This is because all the state will now be handled by Redux
* Without Redux: Diagram 06
* With Redux: Diagram 07
    * Reducers for each **state** previously in without redux
* Provider: Diagram 08
    * Here SongDetail is not shown, but it applies to that also and is at the same level as SongList
    * Connect is a very special component as it can communicate with the Provider component
        * This communication is not through prop system but context system
        * Context system allows any Parent component to talk to any descendant component even if there are intermediate components between them
        * Diagram 09: Communication between Connect and Provider
* File Organization: Diagram 04
    * index.js in Actions is so called so that in future imports we can only reference using the actions folder without including the file name 
    * webpack automatically does the above addition of the file with index.js

##### index.js of actions
* type is required and payload is optional
* Create **named export** to export many different functions from a single file
    * export before function declaration
* Use curly braces to import a named export
    * import {selectSong} from '../actions'

##### index.js of reducers
* Referencing Diagram 07
* songsReducer is a static list of songs and is an overkill example
* selectedSongReducer is the other Reducer
* Even though we have one Action Creator, considering the future, we still have the if statement
* Import named export **combineReducers**
* export combineReducers

##### index.js of src
* Referencing Diagram 08
* import Provider, createStore and reducers
* Render App component within Provider and use store as prop after createStore of reducers

##### SongList component
* import named export Component or do React.Component and wire it to App.js

##### Connect component
* Reference diagram: Diagram 09-comms
* Connect component is defined directly inside SongList.js
* Because only SongList needs Connect to reach up to Provide to get list of songs
* Any time, the list of songs changes, the Provider automatically notifies the Connect component
* To do this:
    * import connect
    * export default connect()(SongList)
    ```javascript
    function connect() {
        return function() {
            return 'Hi there';
        }
    }
    connect() // Returns the function
    connect()() // Hi there, here function is getting invoked
    ```
    * To Tell connect to get specific data out of redux store
        * Use a function which is by convention called **mapStateToProps**
        * It does some computation to change the State to Props
        * It's argument is state which is the state of the store
        * Now use this function **mapStateToProps** as argument in connect
        * This will make songs appear as props to SongList
        