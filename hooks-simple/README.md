### Introducing Hooks
* https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F21%2Fdiagrams.xml
* D 00-now:
* D 1-hooks:
* D 2-share: Why functional when Class based is present

### App Overview
* D 2-mock:
* D 3-json:
* npx create-react-app hooks-simple

### Building Stateful Class Components
* Create index.js inside src
* Create components dir inside src and create App.js
* D 5-hier:
* Create class based component first in App.js

### The UseState Hook
* D 6-hooks: 
* Import useState in App.js
* Change from Class based to Functional Component
* useState and assign to Array
* npm start

### UseState in Detail
* useState with **Array Destructuring**
```js
const colors = ['red', 'green']
const [colorOne, colorTwo] = colors;
//colorOne is red
//colorTwo is green
```
* D 9-useState:
* D 10-same: Individual values instead of an object

### Building the ResourceList
* D 5-hier:
* D 11-app:
* Create ResourceList.js in components
* Import ResourceList in App.js and call that component and pass resource as prop