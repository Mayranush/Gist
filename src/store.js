import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import loggedUserReducer  from './reducers/loggedUserReducer';
import { browserHistory } from 'react-router';
// import {reducer as formReducer} from "redux-form";

const middleware = routerMiddleware(browserHistory);

const reducers = combineReducers({
  loggedUserState: loggedUserReducer
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, middleware)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
  window.store = store;
}

export default store;