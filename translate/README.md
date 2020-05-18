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

### Gotchas Around Providers
* console log createContext in LanguageContext.js
* D 16-pro:
* The value prop doesn't have to be a state property
* It can be any other value
* D 20-flow:
* D 21-hard:
* D 22-diff:
* Provider is creating a separate pipe of info every time we use it

### Accessing Data with Consumers
* In Button.js, contextType is not required when Consumer is used
* We always provide one Child to the Consumer which is a function
* The function will be called with whatever value is inside the pipe

### Pulling From Multiple Contexts
* Consumer is used when there are multiple Contexts
* D 24-m:
* Create ColorContext.js in contexts dir
* We don't have to provide a default value to createContext
* Import this in App.js
* It doesn't matter if we wrap ColorContext outside of LanguageContext or inside of it
* In Button.js, import ColorContext and wrap button with it
* Move code within ColorContext to helper function

### Replacing Redux with Context
* D 29-r:
* D 28: Redux vs Context
* D 27:
* Create LanguageSelector.js inside components
* Cut and paste div from App.js to LanguageSelector
* Pass onLanguageChange as prop to LanguageSelector in App.js after importing it

### Creating a Store Component
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F20%2Fdiagrams.xml
* D 6-cont: 
  * state withing App.js is kind of *business logic*
  * Inside the render method is *view logic*
* D 3-hier:
  * LanguageStore to contain all the business logic

### Implementing a Language Store
* D 3-hier:
* In LanguageContext.js, store createContext in Context(note the capital C) and create LanguageStore
  * Components need to have a capital letter, else React assumes it is a normal jsx or html
* We need to make sure that all of the other components be wrapped with Context.Provider to get the context
```js
<LanguageStore>
  <div>
    <form>
    </form>
    <LanguageSelector />
  </div >
</LanguageStore>

//The above jsx and component will be available in this.props.children
```
* Only export is for named export

### Rendering the Language Store
* In App.js, import LanguageStore and remove unnecessary items

### Connecting the Selector to the Store
* In LanguageSelector, import LanguageContext and console log this.context to check the state and callback being sent

### Connecting the Field and Button to the Store
* In Field.js, use this.context.language
* In Button.js, destructure language property in LanguageContext Consumer