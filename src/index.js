import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PrimaryLayout from './layouts/primaryLayout';
import UnauthorizedLayout from './layouts/unauthorizedLayout';
import ReactDOM from 'react-dom';
import AuthorizedRoute from './autorizedRoute';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/auth" component={UnauthorizedLayout} />
              <AuthorizedRoute path="/app" component={PrimaryLayout} />
              <Redirect to="/auth" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));