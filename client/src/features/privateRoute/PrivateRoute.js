import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
  return <Route render={() => (isAuthenticated ? children : <Redirect to='/login' />)} />;
};

export default PrivateRoute;
