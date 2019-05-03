import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MYtinerary from './MYtinerary';
import Account from './Account';
import Cities from './Cities';
import Login from './Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const routing = (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/MYtinerary" component={MYtinerary} />
          <Route path="/Cities" component={Cities} />
          <Route path="/Account" component={Account} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  )

// const store = createStore(rootReducer)
// <Provider store={store}></Provider>
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
