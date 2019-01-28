import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';
import { browserHistory } from 'react-router';
// import {reducer as formReducer} from "redux-form";

const middleware = routerMiddleware(browserHistory);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
  window.store = store;
}

export default store;