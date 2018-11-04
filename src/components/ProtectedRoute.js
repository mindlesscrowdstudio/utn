import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';



const ProtectedRoute = ({ component: Component, ...rest, authenticated }) => {
  console.log('authenticated', authenticated, 'rest',rest);
  return <Route render={ (props) => (authenticated ? <Component {...props} /> : <Redirect to="/registro" /> ) } {...rest} />;
};

export default ProtectedRoute;