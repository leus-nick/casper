import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import NotFound from '../notFound/NotFound';
import Register from '../register/Register';
import Login from '../login/Login';
import Home from '../home/Home';

const Router = () => {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' isAuthenticated={token}>
          <Home />
        </PrivateRoute>
        <PublicRoute path='/login' isAuthenticated={token}>
          <Login />
        </PublicRoute>
        <PublicRoute path='/register' isAuthenticated={token}>
          <Register />
        </PublicRoute>
        <PrivateRoute path='/users' isAuthenticated={token}>
          Users
        </PrivateRoute>
        <PrivateRoute path='/books' isAuthenticated={token}>
          Books
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
