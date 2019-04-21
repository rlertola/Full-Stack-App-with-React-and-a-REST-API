import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const Header = props => {
  return (
    <AuthConsumer>
      {({ isAuth, name }) => (
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <NavLink className="signin" to="signin">
                {isAuth ? name : 'Sign In'}
              </NavLink>
              <NavLink className="signup" to="signup">
                Sign Up
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </AuthConsumer>
  );
};

export default Header;
