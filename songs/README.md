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