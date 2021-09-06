import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children, isAuthenticated }) => {
  return <Route render={() => (!isAuthenticated ? children : <Redirect to='/' />)} />;
};

export default PublicRoute;
