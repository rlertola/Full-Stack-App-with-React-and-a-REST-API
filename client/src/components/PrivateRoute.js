import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from './AuthContext';

// Used for CreateCourse and UpdateCourse. Redirects to SignIn if user not logged in.
// Redirects back to the last page visited after signing in.
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuth }) => (
        <Route
          render={props =>
            isAuth ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: { from: props.location }
                }}
              />
            )
          }
          {...rest}
        />
      )}
    </AuthConsumer>
  );

  // const isCreatePath = rest.path === '/courses/create';

  // return (
  //   <AuthConsumer>
  //     {({ isAuth, ownsCourse }) => (
  //       <Route
  //         render={props => {
  //           if (isAuth) {
  //             if (isCreatePath) {
  //               return <Component {...props} />;
  //             } else {
  //               // with === true, it always goes to forbidden, without, it always goes to update.
  //               if (ownsCourse) {
  //                 return <Component {...props} />;
  //               } else {
  //                 return <Redirect to="/forbidden" />;
  //               }
  //             }
  //           }

  //           if (!isAuth) {
  //             return (
  //               <Redirect
  //                 to={{
  //                   pathname: '/signin',
  //                   state: { from: props.location }
  //                 }}
  //               />
  //             );
  //           }
  //         }}
  //         {...rest}
  //       />
  //     )}
  //   </AuthConsumer>
  // );
};

export default PrivateRoute;
