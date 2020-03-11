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
* We observe we are not reloading the application at all
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
* Diagram 22-com: Different components and routes
* Diagram 24-routes: 
* For different components related to streams, create streams folder within components
    * Create 5 files for CRUD and show

### Wiring Up Routes
* In App.js, import the different streams
* Add Route in BrowserRouter