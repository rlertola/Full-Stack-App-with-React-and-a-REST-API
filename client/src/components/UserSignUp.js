import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import ValidationErrors from './ValidationErrors';
import { AuthConsumer } from './AuthContext';

// All handled in AuthContext. Will sign in user and send them to courses page.
class UserSignUp extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth, handleChange, signUp, errors }) =>
          isAuth ? (
            <Redirect to="/" />
          ) : (
            <div className="bounds">
              <ValidationErrors errors={errors} />
              <div className="grid-33 centered signin">
                <h1>Sign Up</h1>
                <div>
                  <form onSubmit={signUp}>
                    <div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className=""
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className=""
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                    </div>
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
                        autoComplete="new-password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className=""
                        autoComplete="new-password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid-100 pad-bottom">
                      <button className="button" type="submit">
                        Sign Up
                      </button>
                      <NavLink className="button button-secondary" to="/">
                        Cancel
                      </NavLink>
                    </div>
                  </form>
                </div>
                <p>&nbsp;</p>
                <p>
                  Already have a user account?
                  <a href="/signin">Click here</a> to sign in!
                </p>
              </div>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default UserSignUp;
