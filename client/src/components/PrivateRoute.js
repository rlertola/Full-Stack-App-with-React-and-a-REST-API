import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuth }) => (
        <Route
          render={props =>
            isAuth ? <Component {...props} /> : <Redirect to="/signin" />
          }
          {...rest}
        />
      )}
    </AuthConsumer>
  );
};

export default PrivateRoute;
