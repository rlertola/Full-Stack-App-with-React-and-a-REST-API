import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const Header = props => {
  return (
    <AuthConsumer>
      {({ isAuth, name, signOut }) => (
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              {isAuth ? (
                <div>
                  <NavLink className="signin" to="signin">
                    {`Welcome, ${name}`}
                  </NavLink>
                  <NavLink className="signup" to="/" onClick={signOut}>
                    Sign Out
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink className="signin" to="signin">
                    Sign In
                  </NavLink>
                  <NavLink className="signup" to="signup">
                    Sign Up
                  </NavLink>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </AuthConsumer>
  );
};

export default Header;
