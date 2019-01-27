import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import HomeComponent from '../pages/home';
import { AcyncAboutComponent } from '../pages/about';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <div>
      <ul>
        <li>
          <Link to={ `${match.path}` }> Home </Link>
        </li>
        <li>
          <Link to={ `${match.path}/about` }> About </Link>
        </li>
      </ul>
    </div>
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={HomeComponent} />
        <Route path={`${match.path}/about`} component={AcyncAboutComponent} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout