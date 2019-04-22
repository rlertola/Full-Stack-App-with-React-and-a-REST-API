import React from 'react';
import { Route } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';
import Forbidden from './Forbidden';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuth }) => (
        <Route
          render={props => (isAuth ? <Component {...props} /> : <Forbidden />)}
          {...rest}
        />
      )}
    </AuthConsumer>
  );
};

export default PrivateRoute;
