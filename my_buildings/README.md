# My Buildings

Created by the command: npx create-react-app my_buildings

* Create components under src for different components
* Create SearchBar component 
* Next step: Load video from youtube(Checkout https://www.npmjs.com/package/react-youtube)

# Instructor's Implementation

* Reference link: https://www.draw.io/?mode=github#HStephenGrider%2FReduxCodeV2%2Fmaster%2Fdiagrams%2F07%2Fdiagrams.xml
* Diagram 3 and 4: App Overview and Hierarchy
* search-bar className is for our custom styling and ui segment is for everything within to be inside a box or rectangle
* In my implementation of ui segment, I had given that className to form instead of creating a div and stuffing all the other elements within it
* ui container within App.js is same as my implementation, i.e, the ui container and the SearchBar component within it
* searchTerm to term of Instructor's implementation, i.e, keeping the name short and meaningful
* if onChange prop is not present in input, then the input cannot be filled as it becomes read only
* Diagram 6: Youtube API link
* Can restrict the API key by clicking on Restrict key in the youtube api link and select HTTP referrers as Application restrictions
* Then Accept requests from these HTTP referrers
    * Give localhost:3000 for your application
    * Save

#### Documentation for Youtube API

* First search for **youtube api search** in Google
* Create axios object in youtube component and export it
* Passing prop onFormSubmit from App to SearchBar and SearchBar in turn calling that prop
* Use the youtube component in the App component to search for the term
* baseParams was exported as params in App component was getting overwritten
* After getting the response, set State and let its default values be an empty array, as response.data.items is an array

#### Implementation of VideoList and VideoItem

* Create VideoList and wire it to App.js and pass down videos
* Destructure videos property out of props object using ES2015 syntax
* Create VideoItem and wire it to VideoList and pass down videos
* To check what the video prop contains, can go to Network property and then check down the properties
* In VideoItem, thumbnails are also rendered
* Note while rendering, everything is placed within a div

#### Styling the VideoList

* Reference link: https://www.draw.io/?mode=github#HStephenGrider%2FReduxCodeV2%2Fmaster%2Fdiagrams%2F07%2Fdiagrams.xml
* Semantic ui doc: https://semantic-ui.com/elements/list.html
* Diagram 7: Semantic ui class correlation
* Custom CSS required for making the text centered and reducing the size of the image
    * Create VideoItem.css
    * Give classname equal to the component name to root element 
    * !important is used for overriding the style by providing more weight than normal property
    * Initially .video-item img was given but it was getting overridden
    * So even more specific selector was given: .video-item.item img

#### Click to get Detail Window

* Reference link: https://www.draw.io/?mode=github#HStephenGrider%2FReduxCodeV2%2Fmaster%2Fdiagrams%2F07%2Fdiagrams.xml
* Diagram 8: App having another state called selectedVideo
* Diagram 9: Workflow from App to other components
    * New callback reference is passed down to VideoList and VideoItem
    * When video is clicked in VideoItem, that particular video is used for the callback
* In VideoItem, we can't use onClick={onVideoSelect} as this doesn't pass the argument
* So, it is called with an arrow function

#### VideoDetail Component
* setState of selectedVideo and create new Component VideoDetail
* VideoDetail rendering in between SearchBar and VideoList
* nullCheck inside VideoDetail to avoid the Error message

#### Styling the VideoDetail
* ui segment class for nice looking box
* Add title and description in ui header and p respectively

#### Displaying the VideoPlayer
* HTML element: Iframe tag
* Iframe tag is like any other HTML tag
* It attempts to make a request to some outside website
* Implementation done in VideoDetail component
* ui embed for embedded video player in this context
* To show actual working, go to youtube.com and then click on Share and then select Embed
* This gets the details of the iframe element, src and the videoId
* ES2015 template string which are backticks``, then within ${var}

#### Clearing warnings
* Give title to iframe
* alt to img in VideoItem
* key prop to VideoList's VideoItem

#### Styling for showing VideoList to RHS of video
* Using semantic ui's Grid system in App component
* Grid in semantic ui's docs
* ui row to make them in the same line
* The next div is to show themselves next to each other
* 11 and 5 out of 16 col