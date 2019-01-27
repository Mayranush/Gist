import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import SignInPage from '../pages/signIn';
import SignOutPage from '../pages/signOut';

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    {/*

    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...

    For this example project, we'll just have a Login Page

    */}
    <Switch>
      <Route path="/auth/signin" component={ SignInPage } />
      <Route path="/auth/signout" component={ SignOutPage } />
      <Redirect to="/auth/signin" />
    </Switch>
  </div>
);

export default UnauthorizedLayout