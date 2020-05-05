# Client

### Project Setup
* Add index.js and components directory in src
* Add App.js in components

### Introducing React Router
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F13%2Fdiagrams.xml
* npm install react-router-dom
* Diagram 9-libs
* In App.js, import BrowserRouter and Route
* URL path: Diagram 15-path

### How React Router Works
* Diagram 10-rr: How React Router Works
* BrowserRouter creates a **history** object, which is responsible for keeping track of the address bar(Just the portion after the domain name and the port)
* BrowserRouter listens for changes to history and then based on path shows the content

### How Paths Get Matched
* We can have multiple Route components that match a given url(path)
    * This is by design for deeply nested React components
* Purpose of exact keyword
    * if exact is removed from the first Route, then if navigated to /pagetwo, we see both PageOne and PageTwo components
* What path property does for us
    * Diagram 12-path,Diagram 13-path and Diagram 14-path
    * Adding exact by itself is equivalent to exact={true} and it does an exact match instead of contains

### How to Not Navigate with React Router
* Anchor tags can be used to Navigate between different paths(But this is a Bad approach)
* But that's not how we want to handle Navigation within React-Router App
* Bad Navigation: Diagram 17-link
    * When the browser receives the index.html file, it dumps(erases) all the previous data(including state data)
* To check this Go the Chrome Inspector and check in Network tab
    * JS bundle contains the React code

### Navigating with React Router
* Import Link from react-router-dom
* This Link replaces the anchor tag
* With Link tag, we do not use href but *to*
* npm start and check in Network tab
* We observe we are not reloading the application at all with Link tag
* If we inspect the link, we see that internally it is an anchor tag
* React-router prevents the browser from navigating to the new page
* Diagram 18-link: What We Want
* This is where the term **Single Page App(SPA)** comes from
    * We are loading a single HTML document
    * Even when navigating, they are using the same HTML document

### Different Router Types
* In addition to BrowserRouter, there are other types also
* Diagram 21-ro: Different Router types
* If HashRouter is used and we open localhost:3000, the # symbol is added automatically
* In MemoryRouter, even when links are clicked, the url doesn't change but navigation still occurs
* BrowserRouter is the most complicated Router type to deploy
* Traditional Server
    * Diagram 20-trad: 
        * Server that returns HTML as opposed to React Application
    * Diagram 21-trad: No route
* React Dev Server: npm start Launches this server
    * Diagram 19-br
    * Network tab:
        * bundle.js: dev resources
        * public dir: Inside our application's public dir which can be accessed like localhost:3000/favicon.ico
    * We have nothing defined inside for Page Two
    * The main key of React Dev Server is it returns a **index.html** file instead of 404 Error
    * This is important because all the route definitions are mentioned on the **client(JS) side**
* With HashRouter, since # is added to URL, it ignores everything after the hash and only localhost is considered
    * Anything after the hash is for the client side to handle

### Component Scaffolding
* Diagram 22-com: **Different components and routes**
* Diagram 24-routes: 
* For different components related to streams, create streams folder within components
    * Create 5 files for CRUD and show

### Wiring Up Routes
* In App.js, import the different streams
* Add Route in BrowserRouter
* Diagram 11-c: **Component Hierarchy**

### Connecting the Header
* For the Header to show up all the time, it is kept outside the BrowserRouter in App Component
* Wire up Semantic-ui in public/index.html
* Create Header.js inside the components directory and wire it up in App.js
* We'll add some classes from semantic-ui
* In Header.js Importing only Link from 'react-router-dom' and then npm start
* We see the following error:
    * You should not use **< Link >** outside a < Router >

### Links Inside Routers
* If anytime, we try to use the Link tag outside the Router, we see the previous mentioned error
* Migrate our architecture to what we see in Diagram 12-vis
* Easy solution is to move the Header component within the BrowserRouter

### OAuth based Authentication
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F14%2Fdiagrams.xml
* Diagram 1: auth
* Diagram 3: Auth types
* Scopes with OAuth: Diagram 3
    * How to get access to Users account
    * Go to google oauth scopes list and then search for the particular scope like gmail, profile etc

### OAuth for Servers vs Browser Apps
* Diagram 2: OAuth flow
* Diagram 5: Flow

### Creating OAuth credentials
* Diagram 06-flow: 
    * Create a new project
    * Go to APIs & Services -> OAuth consent screen 
    * Fill the Application name and then Save
    * Go to credentials -> Create Credentials -> OAuth Client Id
    * Select Web Application
    * Put http://localhost:3000 in Authorized JS origins and enter
    * Click on Create
    * Copy the Client ID:1077856755760-ojqjiumtf2og3thd34jj9pl1mmob0afi.apps.googleusercontent.com

#### Wiring Up Google API library
* In public/index.html and inside the head tag, add the script tag
* To verify, go to Browser -> Console and then type gapi
* In components, create GoogleAuth.js
* Hook up GoogleAuth component in Header.js
* Google API is super popular that it is used in many sites
* So they try keep it as small as possible
* To get our required functionality, we need to *load*, in our case gapi.load('client:auth2')
* We check this in our Network tab and execute the above line
* Now, if gapi is typed in console, we see there are some additional properties inside that object
* Then we can *register* on initialize it with our OAuth client Id
* We only want to register one time, so we put that in componentDidMount method
* gapi is a variable available within *window* scope
* Load takes some amount of time, so we register 2nd argument as a callback 
* While initializing, we give the clientId and the scope
* The scope is about Diagram 4-scopes

### Sending a User into OAuth flow
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F14%2Fdiagrams.xml
* Diagram 7: Doc link
* Checkout Authentication section
* In Chrome console
```javascript
const auth = gapi.auth2.getAuthInstance()
auth // To check all the methods
auth.signIn()
auth.isSignedIn.get()
```

### Rendering Authentication Status
* Flow: Diagram 08-googleauth
* init returns a Promise, then chain can be used after initialization is complete
* Update component level state so that App can be re-rendered
* Since we are using component level state, we need to initialize it
* Helper method: renderAuthButton()
* We need to refresh the page to check SignIn and SignOut

### Updating Auth State
* In Chrome console
```javascript
// To check all the methods
gapi.auth2.getAuthInstance().isSignedIn
// We see listen in proto
``` 
* We don't see the get function there, we see __proto__ Object
* This proto object is how we do inheritance in JS
* JS doesn't have classes but prototypes
* Internally, gapi uses inheritance
* So we'll use listen in then chain
* Add onAuthChange as an arrow function so that it's context is bound to the component

### Displaying Sign In and Sign Out Buttons
* Words to Buttons in renderAuthButton

### OnDemand Sign In and Sign Out
* Two helper functions  onSignIn and onSignOut
* Add onClick event handler to button
    * We don't want to add parenthesis to onClick as it will be called when the Component is rendered and not on clicked

### Redux Architecture Design
* **Diagram 9-signin:** Integration with Redux
* Action creators: Successfully signed in or Successfully signed out
* Why we want to Redux?
    * Cause we want the status in a centralized store which any component can access
* This refactoring is kind of awkward for GoogleAuth component as it's state goes to a series of other components before coming back, when in reality we can obtain through one step
* Alternate flow with proper redux convention: Diagram 10-alt, we don't want this as it scatters GoogleAuthentication all over the place

### Redux Setup
* npm install redux react-redux
* Create new folders within src called actions and reducers
* Create index.js within that
* Within reducers' index.js, create dummy reducer within combineReducers
* In root index.js file, import Provider, createStore, reducers
* Wrap App component with Provider passing store as prop

### Connecting Auth with Action Creators
* In index.js of actions dir, create signIn and signOut action creators
* In GoogleAuth file, import connect, signIn and signOut
* At the bottom, wrap the connect call
* The callback function onAuthChange actually gets called with a boolean argument
* Call signIn and signOut within onAuthChange 

### Building the Auth Reducer
* Create authReducer within reducers dir
* We are using object as default value instead of boolean because we will be using one more property
* state will be having a default value of null isSignedIn
* All uppercase syntax, meaning do not modify
* Remember the ... syntax for creating a new state and then overriding the isSignedIn value
* Then in reducers index.js file, import authReducer
* Export the auth reducer as key and value

### Handling Auth Status Through Redux
* In GoogleAuth.js, add mapStateToProps function
* Take off component level state
    * Remove state initialization at the top of the class
    * Dispatch action in 'then' statement and remove setState
    * In renderAuthButton, change state to props

### Fixed Action Types
* New file in actions called types.js
* Using constants to catch the error in case of missed letters
* Then in actions index.js and reducers authReducer.js, import and use those constants

### Recording the Users ID
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F13%2Fdiagrams.xml
* Entire idea of our application: Diagram 01-arch
    * Orange API server that stores the list of all the streams created by our users
    * Diagram 01-mockups
* npm start and in Chrome Console(Make sure you are signed in)
```js
gapi.auth2.getAuthInstance().currentUser

gapi.auth2.getAuthInstance().currentUser.get().getId()
```
* In GoogleAuth component, in onAuthChange()
    * Pass id to Action creator
* Then in action's index.js file, create the payload using the argument in signIn action
* Then in authReducer, add userId to INITIAL_STATE and update the state while returning
* When a user signs out, they don't want to be associated with our application

### Using Redux Dev Tools to Inspect the Store
* Diagram 22-c
* https://github.com/zalmoxisus/redux-devtools-extension
* The above is Chrome extension for debugging Redux store
* Add it to Chrome and then in the github link, scroll down to Advanced store setup
* Then add that in root index.js file and then npm start
* In Chrome, you should the ReduxDevTools being active
* You can use Action history to jump back in time and observe the states

### Debug Sessions with Redux Dev Tools
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F14%2Fdiagrams.xml
* Diagram 12-tools: 
    * By default when Refreshed, all the data is cleared away
    * But when we enable the debug session, data is persisted
    * Also named sessions can be used for different purposes
    * After you are done debugging, remove that query string

### Forms with Redux Form
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F13%2Fdiagrams.xml
* Diagram 22-c: Create Stream form
* npm install redux-form
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F15%2Fdiagrams.xml
* Diagram 01-redux form: Without Redux forms
* Diagram 02: With **Redux form behind the scenes**

### Useful Redux Form Examples
* Documentation link: redux-form.com
* Checkout Examples section: https://redux-form.com/7.4.2/examples/
* Wizard Form, some point in the future

### Connecting Redux Form
* Diagram 02: With **Redux form behind the scenes**
* In reducers index.js, import reducer from redux-form
* Rename reducer by using as
* Assign it to a very particular key called form

### Creating Forms
* npm start and navigate to /streams/new
* In components/streams, refactor StreamCreate.js to class based component
* Import Field(component) and reduxForm(function) from redux-form
* reduxForm will have same functionality as connect function
* reduxForm will return a function and we are gonna call that function using StreamCreate as argument
* reduxForm takes a single object as argument
    * form which is the name of the form which serves the purpose of the form
    * After adding reduxForm, we'll got a ton of props
* Field Component requires a name prop, which is the name of the property that this Field is going to manage
* General form error:
    * Element type is invalid, expected a string (for built-in components) or a class/function (for composite components) but got: undefined
    * The Field component by itself doesn't know how to show the input

### Automatically Handling Events
* The Field is just a part of the form infrastructure
* We need to pass the component prop, to actually show the form element
* Just input tag only isn't a controlled element
    * Need to assign value property and onChange callback handler
* To convert to controlled element, we need to use the formProps passed as argument
* Short JSX syntax in renderInput where everything from formProps.input is added as properties to input element
* Shorten even feature by destructuring formProps

### Customizing Form Fields
* Customizing renderInput
* Adding prop of label to identify
* Props which are not known to the component are by default passed to the component(which is renderInput in this case) and can be received as additional property in renderInput
* className of ui form in render method for proper spacing

### Handling Form Submission
* Helper method onSubmit in StreamCreate
* Print this.props inside render method to check out all the properties
* Add onSubmit prop to the form element
* To onSubmit, usually pass this.onSubmit, but with redux-form, things are a little different
* We pass this.props.handleSubmit(this.onSubmit)
* handleSubmit will automatically take care of event.preventDefault and doesn't pass event to onSubmit 
* But the values of the form will be passed to onSubmit

### Validation of Form Inputs
* Empty object on clicking Submit when none of the Fields are entered
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F15%2Fdiagrams.xml
* **Diagram 04-flow:**
* In StreamCreate.js, outside the StreamCreate class, create validate arrow function which has the argument formValues
* This formValues contains all the values existing within our form(like title and description in our case)
* If **empty object** is returned, redux-form thinks everything is ok, else there is an error

### Displaying Validation Messages
* validate needs to be wired up to redux-form in the reduxForm of StreamCreate
* Since key and value is same, we can reduce
```js
//validate: validate to validate
```
* Redux-form automatically rerenders our form when there are keys in error object
* Redux-form will look at the name property of Field with error object's key
* If it's the same it's gonna pass to the Field component prop(which is renderInput)
* Destructure meta in renderInput method
* Console log meta to check its properties

### Showing Errors on Touch
* When clicked, the blue boundary indicates that the field is focused
* When clicked anywhere outside, that blue boundary disappears
* AutoComplete can be turned off in input field
* Print meta to check its properties
* Our property of interest is *touched*
* When touched is true, the user selected and then deselected
* renderError helper method
* We get some error and this is caused due to context inside JS classes
    * renderInput is a function that we pass to Field component
    * It's called with unknown value of this
    * Fix it by turning renderInput to an arrow function
* npm start and we don't see any Error message after selecting and deselecting
* Open Chrome console, Inspect by clicking the Title Input
* **Semantic UI will by default hide error messages**, as shown in the CSS display panel as display:none

### Highlighting Errored Fields
* Form should have class name of *error* to display error messages
* To highlight errored fields, a classname of error can be given to renderInput div according to some logic

### Creating Streams
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 1-arch: **Architecture**
    * Our Application is running inside the Viewer's Browser
* Browser to API server with details of the New Stream
* Diagram 2-arch: Further details of API server
    * Plain list of records

### RESTful Conventions
* Package to help us put together API server: json-server
* npmjs.com/package/json-server
* Diagram 5-rest, 4-crud: REST

### Setting Up an API Server
* Create api directory inside streams and Navigate to it
* npm init and Enter for everything
* npm i json-server
* npmjs.com/package/json-server documentation
* Check db.json Example file
* Checkout README.md in api directory
* In the future, npm start at both **client and api**

### Creating Streams Through Action Creators
* When form is submitted, an Ajax request or Network request to our API 
* In client directory, npm i axios redux-thunk
* Create apis under src directory and create streams.js inside apis
* In actions index.js, import streams from apis
* Create createStreams action creator, which accepts all the formValues
* Asynchronous action creator using redux-thunk
* Check only posting to the api
* Then in StreamCreate.js, import connect and need to hook up connect

### Creating a Stream with REST conventions
* Remove export default in StreamCreate and create formWrapped
* Then in onSubmit, call createStream action creator
* Then in root index.js file, wire up redux-thunk
* npm start in both client and api
* Pull up Network requests in Chrome, filter by XHR
* Error because we didn't bind the callback function onSubmit with an arrow function
* After submitting, we see that entry in api db.json

### Dispatching Actions After Stream Creation
* Complete the await in createStream action creator
* In types.js file, export CREATE_STREAM
* In actions index.js, import CREATE_STREAM and dispatch the action

### Bulk Action Creators
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 5-ac: Response column
* Creating all Action creators now due to the RESTful convention
* Create types in types.js file
* Action creators for each one in actions index.js

### ObjectBased Reducers
* Diagram 6-reducer: Reducer structure 1
* Diagram 10-option: Reducer structure 2
* Diagram 7-reducer: Reducer Good practices
    * Updating easy with *object* than with an *array*

### Key Interpolation Syntax
```js
const newState = { ...state };
newState[action.payload.id] = action.payload;
return newState;

//The above 3 can be replaced with
return { ...state, [action.payload.id]: action.payload };
```

### Handling Fetching Creating and Updating
* Create streamReducer.js in reducers
* Diagram 5-ac: Different reducers to different types

### Deleting Properties with Omit
* Diagram 7-reducer: Omit from lodash
* npm install lodash
* In streamReducer import lodash
* action.payload contains only id in case of DELETE_STREAM
* omit creates a new object with the key removed

### Merging Lists of Records
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 13-mapkeys:
* mapKeys returns an object
* ... Take key-value pairs from the mapKeys object and add it to the new big object
* Then in reducers index.js file, import streamReducer and add it as property in combineReducers

### Fetching a List of All Streams
* In components StreamList.js, import connect and fetchStreams
* We want componentDidMount lifecycle method, so turning into a class-based component
* mapStateToProps still not added
* At this point, just want to see list in Redux-dev-tools of Chrome
* So, with npm start in api and client, go to Home or Root page and open Redux-dev-tools and open State

### Rendering All Streams
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F13%2Fdiagrams.xml
* Diagram 01 - mockups:
* Define mapStateToProps in StreamList
    * object to array (Object.values)
* https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag

### Associating Streams with Users
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 9-stream: General strucuture of stream object
* When we return a function from an Action creator, Redux-thunk automatically calls with 2 arguments dispatch and getState
* So in createStream of actions index.js, add getState and destructure userId
* Check redux store if you don't remember the state
* Then npm start and navigate to streams/new

### Conditionally Showing Edit and Delete 
* Streams created by me have buttons on it
* In StreamList.js, expand state of mapStateToProps to get currentUserId
* renderAdmin helper method and call it from renderList
* Test using npm start
* For Edit/Delete Buttons to appear properly, need to move them at the very start of renderList div with className item

### Linking to Stream Creation
* renderCreate helper method in StreaList
* currentUserId can be used, but we already have a specific attribute doing that(isSignedIn)
* Add isSignedIn to mapStateToProps
* For navigating we use Link component instead of anchor tag
* So import Link and use it with to attribute
* To make button on far right-hand side, manually add style property in div
* Call it in render method

### When to Navigate Users
* npm start and Chrome Network requests XHR in /streams/new page
* Unexpected behaviour of not navigating/notification after Stream was created
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 16-intent: Programmatic Navigation
* Diagram 17-soon: 
* Diagram 18-time:
* Navigate from createStream Action creator after a successful api response

### History Preferences
* Diagram 14-nav: 
* Diagram 16-arch:
* Internally, *BrowserRouter creates the History object*
* When BrowserRouter renders some Component, BrowserRouter passes the history object passes as prop to the Component
* But we need history object inside Action Creator and not Component which is actually difficult
* Diagram 17-ac: Pass history from Component to Action creator
    * But this is not ideal
* **Diagram 15-hist:** Plain router with history creation
* History object: Everything after the port or domain

### Creating a Browser History Object
* Create new file called history.js in src directory
* history package automatically installed with react-router-dom
* And only 2 statements, that's it
* In components App.js file, replace BrowserRouter with Router

### Implementing Programmatic Navigation
* In actions index.js, import history
* In createStream action, history push the new route we want to navigate to

### Manually changing API records
* Navigate to api directory
* Remove the entries from db.json file

### URLBased Selection
* Diagram 24-url:
* Diagram 22-e:
* Diagram 23-url:

### Wildcard Navigation
* In StreamList component, update renderAdmin with Link instead of button
* In App.js file, :id in StreamEdit Route
* After the colon can be anything, but we reference the same variable within the Component prop

### More on Route Params
* In StreamEdit component, add props and console log it to check
* All props are coming from React-router-dom
* StreamEdit rendered by Route

### Selecting Records from State
* Import connect and wire up mapStateToProps in StreamEdit
* ownProps has the same reference to props within StreamEdit
* Check console.log of props after mapStateToProps is defined
* stream shows as undefined
* When directly the StreamEdit page is loaded, it appears as if there is no data, but when coming from StreamList to StreamEdit, we see that stream is defined now

### Component Isolation with React Router
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* **Diagram 25-path:**
* Obey this rule in Diagram 26-fetch:

### Fetching a Stream for Edit Stream
* In StreamEdit component, refactor to Class based component
* import fetchStream and pass it to connect and access it in componentDidMount to fetch the streams

### Real Code Reuse
* From App mockup Diagram, we see that CreateStream and EditStream is same except the data and the Action creator
* Diagram 21-edit:
* Create StreamForm in components->streams
* Copy everything from StreamCreate and copy to StreamForm
* No need to pass Action Creator in connect, in fact no need of connect function at all
* onSubmit is passed as prop

### Refactoring Stream Creation
* In StreamCreate, no need of Field and Redux form
* Import StreamForm and delete renderError, renderInput, validate and formWrapped
* All JSX removed from render

### Setting Initial Values
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 22-edit: **Redux-form wrapped StreamForm**
* In StreamEdit, import editStream also from actions
* Import StreamForm
* Define onSubmit function
* Return appropriate JSX in render method
* Pass editStream to connect
* Pass special property called initialValues to StreamForm
* Second set of parenthesis for object
* title and description should be same as what is defined in StreamForm Field
* Pass this.props.stream to initialValues which has title and description as properties

### Avoiding Changes to Properties
* Technicality problem as id and userId was also passed
* formValues must only contain properties that are supposed to change in the form
* The real issue is we are putting the entire stream in initialValues
* So, to handle this import lodash and use pick
* pick creates a new object
* Check in ReduxDev tools form->streamForm->values

### Edit Form Submissions
* In StreamEdit, need to change onSubmit
* In actions index.js, need to navigate to root directory after successful edit
* npm start and test it
* But after edit, the buttons disappear

### PUT vs PATCH Requests
* To checkt the previous error, Chrome console-> Network tab in root page
* Check GET streams
* Since userId is missing, the buttons don't appear
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F16%2Fdiagrams.xml
* Diagram 5-ac:
* PUT request has a side effect as it replaces
* So in editStreams action creator, make a patch request instead of put request

### Why Use Portals
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F17%2Fdiagrams.xml
* Diagram 1-mocks: DeleteStream
* Show a Modal window to the User
* Diagram 2-nesting: **Traditional React layout**
* Diagram 3-modal:
* Create modal.html in public directory
* Access this modal inside the browser using localhost:3000/modal.html

### More on Using Portals
* Outer div of modal serves as grey background
* Inner div of modal-body represents the white window with the contents
* But this alone won't suffice as it will be obscured behind Sidebar
* Diagram 4-modal: **z-index**
    * CSS rule what element should be rendered on top of another element
* Wrench into the plan where modal is deeply nested within other components which have a lot of styling applied to it
* Diagram 5-modal: **Stacking Context**
* Sidebar compared against Positioned
* Whenever z-index is same, whichever appears later is displayed on top
* Diagram 6-sol:
* Make Modal direct child of body

### Creating a Portal
* Create Modal.js in components dir
* Notice we are importing react-dom which we do only in the root component(index.js) file
* createPortal takes 2 arguments
* If directly attached to body, it will replace all the contents in the body
* So create another div
* Inside public/index.html, after div id root add id of modal
* Then in Modal.js, add modal selector as second argument to createPortal
* In StreamDelete component, return Modal component
* Where we use Portals: Modal, Django, Java application

### Hiding a Modal
* Semantic UI->modules->Modal
* In Modal.js, use the above document
* Click on background to make the modal go away
* This is done by programmatic navigation
* Issue of Event propagation
    * If child element doesn't handle the event, it will bubble up to the parent element
* So add a click event handler to modal as well and stop propagation

### Making the Modal Reusable
* Props to Modal in StreamDelete.js
* Use those props in Modal.js

### React Fragments
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F17%2Fdiagrams.xml
* Diagram 7-fragment:
* Multiple jsx to variable not allowed, so wrapped within div
* Diagram 8-fragment:
* In StreamDelete, replace div with React fragment
* React fragment can also be shortened to the below
```js
<>
</>
```
* Some linters think that the above may be error, so we explicityly mention that

### OnDismiss From the Parent
* Remove history.push to root dir in Modal.js
* Call props.onDismiss in Modal.js
* onDismiss as props in StreamDelete

### Reminder on Path Params
* In App.js, :id in Route
* In StreamList.js, add Link element for Delete

### Fetching the Deletiom Stream
* StreamDelete to class based component
* Add componentDidMount
* Import connect for wiring up Action creator

### Conditionally Showing Stream Details
* Define mapStateToProps in StreamDelete
* Helper method of renderContent instead of just Loading text
* Pass that as props

### Deleting a Stream
* In StreamDelete, import Link
* Use Link instead of button for Cancel
* For Delete, add actionCreator of deleteStream
* Use arrowFunction instead of directly calling because of id
```js
const id = this.props.match.params.id;
//to
const { id } = this.props.match.params;
```
* In actions index.js, add history.push to root dir

### Viewing a Stream
* In App.js, streams/show to streams/:id in Route
* In StreamList, Link element to stream title

### Switches with ReactRouter
* /streams/new, we see both StreamCreate and StreamShow
* :id is taking new, so it's showing StreamShow
* Import Switch in App.js and wrap all the routes within it
* Switch shows only the 1st Route that gets matched

