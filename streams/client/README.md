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
