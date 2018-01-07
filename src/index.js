import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './components/Login';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Router>
      <div>
          <Route exact path={window.location.pathname} component={App} />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
