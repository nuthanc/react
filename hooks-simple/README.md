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

### Fetching a Given Resource
* jsonplaceholder.typicode.com and scroll down to Resources
* Checkout posts and todos endpoints
* npm i axios
* npm start
* In ResourceList, import axios
* Use componentDidMount lifecycle method to make Network request
* Check in Networks tab of browser for xhr requests
* Async for Waiting until response is fetched
* On clicking todos, we are not getting 200 or changes in the Network tab

### ComponentDidUpdate vs ComponentDidMount
* D 12-flow: componentDidMount gets called one single time
* So, we need to use componentDidUpdate
* Not recommended step in componentDidUpdate
```js
async componentDidUpdate() {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);

    this.setState({ resources: response.data })
  }
```
* componentDidUpdate gets called whenever the parent component rerenders itself or setState inside the particular component(ResourceList)
* componentDidUpdate keeps running endlessly because of this
* A little check to componentDidUpdate can be applied
* npm start
* It works now
* But class based components have this nasty duplicate logic and additional check

### Refactoring a Class to a Function
* Import useState and useEffect
* Save and npm start to see if it renders without any Error messages

### Lifecycles with UseEffect
* Receive props as argument in ResourceList
* Destructure resource
* D 13-useEffect:
  * First argument: callback function
  * Second argument: Empty array
* npm start and check in Network tab
* While clicking on Todos nothing happens

### Updates with UseEffect
* Same issue as componentDidUpdate
* Place resource inside the array in useEffect's 2nd argument
* npm start and check
* It works
* If same button is clicked again and again, there is no request in the Network tab
* D 16:
* D 17-call:
  * Only when there is a change, useEffect calls the arrow function

### Does It Get Called
* D 15-arr:
  * When the 2nd argument to useEffect is not passed, it gets called non-stop 
  * With empty array, it gets invoked the 1st time(every time), but the 2nd time it doesn't get called: Identical to *componentDidMount*
  
### Quick Gotcha with UseEffect
* useEffect cannot use async or promise function as 1st argument
* Alternatively we can define an invoke an arrow function as 1st argument
```js
const fetchResource = async (resource) => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  // The below is used

useEffect(() => {
  (async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  })(resource);
}, [resource]);

//This is similar to 
const hi = () => console.log('hi')
hi()
hi

(() => console.log('hi'))()
```

### Rendering a List
* Change length to multi-line JSX

### Actual Code Reuse
* D 1-hooks:
* D 2-share:
* D 18-reuse:
* Extracting hook related logic to a separate function
* useResources is that function
