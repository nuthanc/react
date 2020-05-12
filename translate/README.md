# The Context System
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F19%2Fdiagrams.xml
* Diagram 6:
* Diagram 9-vs:
* Diagram 10-vs:
* D 11-vs:

### An App with Context
* D 1-mock:
* D 2-mock: Components
* D 2-props: Using Props system
* D 2-context: Using Context system
* npx create-react-app translate

### App Generation
* Create index.js in src after deleting the previous files
* Create App.js in components
* Add semantic-ui in public index.html

### Selecting a Language
* In App.js, add state object
* Add onClick prop to i tags

### A Touch More Setup
* Create UserCreate.js, Field.js and Button.js in components
* Import UserCreate in App.js

### Getting Data Out of Context
* D 14-context: Pipe in which data is sent
* D 13-context: Data Into the pipe
* D 15-context:

### Creating Context Objects
* New folder of contexts inside src dir
* Create LanguageContext.js inside it, so that it can be imported only where it is required
* createContext creates the context
* Default value can be provided to the createContext call
* In Button.js, import LanguageContext
* D 13-parts: contextType to link Button to Context object
* *contextType* is a special property name
* static because attaching property directly to the class
* It can also be set by the following
```js
Button.contextType = LanguageContext
```
* Not only strings but any kind like object, arrays etc in context object is possible

### Consuming the Context Value
* Get the context value in text for Button and Field

### The Context Provider
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F19%2Fdiagrams.xml
* D 15-context:
* In App, import LanguageContext and wrap UserCreate with LanguageContext.Provider
* Provide *value* prop(special name) to Provider
