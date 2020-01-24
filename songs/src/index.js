import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.querySelector("#root")
);