import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthConsumer } from './AuthContext';

// All handled in AuthContext. Will send user to the CreateCourse or UpdateCourse if they clicked on that before they were redirected to the SignIn page.
class UserSignIn extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth, handleChange, signIn, prevPage }) => {
          if (isAuth && prevPage) {
            return this.props.history.push(prevPage);
          } else if (isAuth && !prevPage) {
            return this.props.history.goBack();
          } else if (!isAuth) {
            return (
              <div className="bounds">
                <div className="grid-33 centered signin">
                  <h1>Sign In</h1>
                  <div>
                    <form onSubmit={signIn}>
                      <div>
                        <input
                          id="emailAddress"
                          name="emailAddress"
                          type="text"
                          className=""
                          autoComplete="username"
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className=""
                          autoComplete="current-password"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid-100 pad-bottom">
                        <button className="button" type="submit">
                          Sign In
                        </button>
                        <NavLink className="button button-secondary" to="/">
                          Cancel
                        </NavLink>
                      </div>
                    </form>
                  </div>
                  <p>&nbsp;</p>
                  <p>
                    Don't have a user account?
                    <NavLink to="/signup"> Click here</NavLink> to sign up!
                  </p>
                </div>
              </div>
            );
          }
        }}
      </AuthConsumer>
    );
  }
}

export default UserSignIn;
