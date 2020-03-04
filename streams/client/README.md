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