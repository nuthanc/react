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
        
##### Rendering List of Songs
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F10%2Fdiagrams.xml
* Referencing Diagram 1
* renderList within SongList component
* 2 returns, 1 for map and 1 for returning the list of songs
* JSX referencing semantic-ui within map of songs
    * floated to appear to the Right hand side of each list item
    * First button is written and then content
    * song title in another div with className content
* call renderList within render method
* But after npm start, we see that it's not displaying proper yet
* So, some styling in render method
    * div of className "ui divided list"
    * After this, we see the button floated to the right
    * But now, it's stretching from all the way from left to right
    * So, for this we add the Grid system(not same as CSS Grid System)
* Add some more styling in App component
* Now it looks good

##### Select Song and Update the state by calling Action Creators
* Done in SongList.js 
* import selectSong from actions
* Pass selectSong to connect as 2nd argument to connect function with both key and value as selectSong using ES2015 syntax
* This selectSong can be used as props in SongList component
* Then inside renderList, onClick inside button we call selectSong with the song being selected
* This changes the state and to verify it, check in mapStateToProps
* Every time the state is changed, the mapStateToProps reruns with the newly created state object
* Why go to the extra work of passing selectSong to connect instead of calling directly within SongList
    * Diagram 10: Redux is not magic
    * If not passed to connect, the action creator alone cannot update the reducers
    * **connect** automatically calls **dispatch** function for us for the action creators provided in the argument whenever it is called in the props.actionCreator of the component


