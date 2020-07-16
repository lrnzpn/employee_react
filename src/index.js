import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
// redux
import store from './store'
import { Provider } from 'react-redux'
// actions
import { getEmployees } from './actions'

store.dispatch(getEmployees())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
