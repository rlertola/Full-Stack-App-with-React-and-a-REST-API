import React from 'react';
import { AuthConsumer } from './AuthContext';

// Allows access to props in any component. Used for login creds several components.
export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <AuthConsumer>
        {state => <Component {...props} context={state} />}
      </AuthConsumer>
    );
  };
}
