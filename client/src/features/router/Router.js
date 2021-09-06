import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';

const Router = () => {
  const auth = false;

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' isAuthenticated={auth}>
          Home
        </PrivateRoute>
        <PublicRoute path='/login' isAuthenticated={auth}>
          Login
        </PublicRoute>
        <PublicRoute path='/register' isAuthenticated={auth}>
          Register
        </PublicRoute>
        <PrivateRoute path='/users' isAuthenticated={auth}>
          Users
        </PrivateRoute>
        <PrivateRoute path='/books' isAuthenticated={auth}>
          Books
        </PrivateRoute>
        <Route>Not Found</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
