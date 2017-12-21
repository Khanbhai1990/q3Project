import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';



const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
