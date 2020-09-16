import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';

// Create our store
const store = createStore(rootReducer);
//helloooooooooooooooo
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
