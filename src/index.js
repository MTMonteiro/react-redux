import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// conectar o react com redux
import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
