import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

// Create our store with our rootReducer (which is all of reducers combined)...if we had mutliple.
// Redux does alot under the hood here for us with this `createStore(reducer)` function,
// but basically it returns a store object for us to use that's loaded with our initial state.
const store = createStore(rootReducer, composeWithDevTools());

render(
  // We wrap our entire app with a `Provider` component provided (no pun intended) by React-Redux.
  // This ensure that our actions dispatch to the correct store by searching up the tree to find the
  // Provider with our store on it.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
